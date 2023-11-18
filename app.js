import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', { id: 'heading' }, 'Hello Huzefa!');

const heading = <h1 className="heading">Hello Heading</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);