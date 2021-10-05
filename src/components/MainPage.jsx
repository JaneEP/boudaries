import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Link to='/first'>
                    <button type="button" className="Button">First route</button>
                </Link>
                <Link to='/second'>
                    <button type="button" className="Button">Second route</button>
                </Link>
            </div>
        )
    }
}

export default MainPage;