// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/scss/font-awesome.scss";
import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';
import "antd/dist/antd.css"
import "./style/style.scss";
import App from "./App";

// for hot reload
// if (module.hot) {
//     module.hot.accept();
// }

ReactDOM.render(
    <App />,
    document.getElementById("App")
);
