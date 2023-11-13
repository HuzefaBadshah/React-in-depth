import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', { className: 'parent' }, [
    React.createElement('section', { className: 'feature1' },
        React.createElement('p', {}, 'I am a feature 1')
    ),
    React.createElement('section', { className: 'feature2' },
        React.createElement('p', {}, 'I am a feature 2')
    )
])

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(parent);