import React, {forwardRef,createRef, useEffect, useLayoutEffect, useReducer, useState} from "react";
import './RowList.css';
import jsonPlaceholder from "../utils/jsonplaceholder";
import {RealLazyLoad} from 'real-react-lazyload';
import Item from "./Item";
import Config from '../config';
import Flickity from  'flickity';
const fetch = async (dispatch) => {
    dispatch({type: "SET_LOADING"});
    console.log("going to send fake request to get posts for display in RowList")
    await jsonPlaceholder.get(`/posts`);// Just Simulate an Http Request it is not important
    let items = [];
    for(let i = 0; i < 10; i++) {
        items.push({
            id: `${Math.floor(Math.random() * 9999999 + 1)}-${i}`,
            imageUrl: `${Config.baseUrl}images/${Math.floor(Math.random() * 60 + 1)}.jpg`
        });
    }
    dispatch({type: "SET_ITEMS", items: items});

}
let initilizeState = {
    items: [],
    loading: false,
    shouldIFetch: false,
}

const reducer = (state,action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {...state, loading: true};
            break;
        case "SET_FETCH_REQUEST":
            return {...state, shouldIFetch: true};
        case "SET_ITEMS":
            return {...state, items: action.items, loading: false};
        default:
            return state;
    }
}
const RowList = forwardRef(({placeholder, collection}, ref) => {
    let [state, dispatch] = useReducer(reducer, initilizeState, () => initilizeState);
    let rowRef = createRef();
    useEffect(() => {
        if(placeholder != true && state['shouldIFetch'] && state['loading'] === false && state['items'].length === 0) {
            fetch(dispatch)
        }
    }, [state, dispatch])

    useEffect(() => {
        let flick = undefined;
        if(rowRef.current && rowRef.current.querySelector('.row')) {
            flick = new Flickity(rowRef.current.querySelector('.row'),{
                pageDots: false,
                rightToLeft: true,
                textAlign: 'right',
                contain: true,
                prevNextButtons: false,
            });
        }
    }, [rowRef.current, state.items.length])


    if(placeholder) {
        return (
            <div className="row" ref={ref}>
                {(() => {
                    let items = [];
                    for(let i = 0; i < 8; i++) {
                        items.push(
                            <Item key={`placeholder-${collection}` + i} placeholder={true}/>
                        )
                    }
                    return items;
                })()}
            </div>
        )
    }
    let shouldIRender = state.items.length > 0;
    return (
            <div className="RowList" ref={rowRef}>
                <RealLazyLoad forceVisible={shouldIRender}  placeholder={<RowList collection={collection} placeholder={true}/>}   componentEntryCallback={() => {
                    if(state['shouldIFetch'] === false) {
                        dispatch({type : 'SET_FETCH_REQUEST'});

                    }
                    return false;
                }}>
                    <div className="row" ref={ref}>
                        {state['items'].map((item) => {
                            return (
                                <Item key={`${collection}-${item['id']}`} imageUrl={item['imageUrl']}/>
                            )
                        })}
                    </div>
                </RealLazyLoad>
            </div>
    )

});

export default RowList;
