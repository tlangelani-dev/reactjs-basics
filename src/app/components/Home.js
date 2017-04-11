import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <p>Company: {this.props.data.company}</p>
                <pre>{ 100 * 4 * 12 }</pre>
                <ul>{this.props.data.categories.map((category, i) => <li key={i}>{category}</li>)}</ul>
            </div>
        );
    }
}

// define prop types
Home.propTypes = {
    data: PropTypes.object
};

module.exports = Home;
