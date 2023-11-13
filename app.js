const parent = React.createElement('div', { class: 'parent' }, [
    React.createElement('section', { class: 'feature1' },
        React.createElement('p', {}, 'I am a feature 1')
    ),
    React.createElement('section', { class: 'feature2' },
        React.createElement('p', {}, 'I am a feature 2')
    )
])

const rootEl = ReactDOM.createRoot(document.getElementById('root'));

rootEl.render(parent);