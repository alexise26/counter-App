import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloWorldApp";
import HelloWorldApp from "./HelloWorldApp";
import FirstApp from "./FirstApp";

import './index.css';
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <HelloWorldApp/> */}
        {/* <br /> */}
        {/* <FirstApp/> */}
        <CounterApp value = {22}/>
    </React.StrictMode>

);