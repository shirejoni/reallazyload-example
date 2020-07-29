import React from "react";
import {RealLazyLoad} from 'real-react-lazyload';
import './Item.css';
const Item = ({imageUrl, placeholder}) => {
    return (
        <div className="Item">
            {placeholder == undefined ? (
                <RealLazyLoad componentEntryCallback={() => {
                    console.log(`image going to load: ${imageUrl}`);
                    return true;
                }}>
                    <img src={imageUrl}/>
                </RealLazyLoad>
            ) : ""}
        </div>
    )
}

export default Item;
