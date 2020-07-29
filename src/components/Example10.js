import React,{useEffect} from "react";
import RowList from "./RowList";
import 'flickity/dist/flickity.min.css';

let collections = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

const Example10 = () => {

    return (
        <div>
            {collections.map((collection) => (
                <RowList key={collection} collection={collection}/>
            ))}
        </div>
    )
}

export default Example10;
