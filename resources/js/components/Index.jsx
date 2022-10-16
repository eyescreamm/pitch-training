import React from 'react';
import ReactDOM from 'react-dom';
import Piano from './Piano';
import './Index.css';

function Index() {
    return (
        <div className="App">
            <Piano />
        </div>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
