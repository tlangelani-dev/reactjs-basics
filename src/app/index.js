import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
    render() {
        var data = {
            company: 'Spree',
            categories: ['Men', 'Women', 'Kids', 'Misc']
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col xs-offset-1">
                        <Header title="Welcome to React.js Basics" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col xs-offset-1">
                        <Home data={data} />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
