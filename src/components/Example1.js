import React from "react";
import data from './data.json';
import Item from "./Item";
import {Link} from "react-router-dom";

const Example1 = () => {
    return (
        <div>
            <h3>
                Image LazyLoad for items <Link to="/"><b>Back</b></Link>
            </h3>
            <div className="content">
                {data.items.map(item => <Item key={item['id']} imageUrl={item['imageUrl']}/>)}
            </div>
        </div>
    )
}

export default Example1;
