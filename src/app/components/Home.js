import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <p>Home Component</p>
                <pre>{ 100 * 4 * 12 }</pre>
            </div>
        );
    }
}

module.exports = Home;
