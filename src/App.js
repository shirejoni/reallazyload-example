import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example10 from "./components/Example10";
import Example3 from "./components/Example3";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/example1" exact component={Example1}/>
                <Route path="/example2" exact component={Example2}/>
                <Route path="/example3" exact component={Example3}/>
                <Route path="/example10" exact component={Example10}/>
                <Route path="**">
                    <h2>RealLazyLoad examples</h2>
                    <ul>
                        <li><Link to="/example1">Simple LazyLoad for images</Link></li>
                        <li><Link to="/example2">Force Load All LazyLoad</Link></li>
                        <li><Link to="/example3">With Loading SVG</Link></li>
                        <li><Link to="/example10">an Real Complicated example with http Request for component entry callback</Link></li>
                    </ul>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
