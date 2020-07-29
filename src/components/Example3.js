import React from "react";
import './Example3.css';
import {ImageRealLazyLoad, RealLazyLoad} from 'real-react-lazyload';
import Loading from "./Loading";
const Example3 = () => {
    return (
        <div>
            <div className="example-3">
                <div className="before">
                    <h2>Scroll Down To See <span>ImageRealLazyLoad</span> with Loading SVG</h2>
                </div>
                <div className="container">
                    <ImageRealLazyLoad placeholder={<Loading/>} src="http://cdn64.akairan.com/files/images/20163/2016329202544730340a.jpg"/>
                </div>
                <div className="container">
                    <ImageRealLazyLoad placeholder={<Loading/>} src="http://cdn64.akairan.com/files/images/20163/20163292025447302212a.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Example3;
