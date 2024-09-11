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
        {/* <FirstApp title = "Hola soy Vegeta"/> */}
        <CounterApp value = {100}/>
    </React.StrictMode>

);