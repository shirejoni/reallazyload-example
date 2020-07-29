import React from "react";
import data from './data.json';
import Item from "./Item";
import {Link} from "react-router-dom";
import {forceVisible} from 'real-react-lazyload';
const Example2 = () => {
    return (
        <div>
            <h3>
                Force Visible for items <Link to="/"><b>Back</b></Link>
            </h3>
            <p className="text">after click on force visible button, it will render all lazy load components</p>
            <p className="sub red">if your force a component to be visible with forceVisible, it won't call componentEntryCallback</p>
            <p className="sub">you can open network on browsers developer tools and see images request when click on force visible button</p>
            <div>
                <button onClick={() => {forceVisible()}}>force visible</button>
            </div>
            <div className="content">
                {data.items.map(item => <Item key={item['id']} imageUrl={item['imageUrl']}/>)}
            </div>
        </div>
    )
}

export default Example2;
