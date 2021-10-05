import React from 'react';
import {Link} from 'react-router-dom';

import {FormattedMessage} from 'react-intl'

class HelloYa extends React.Component {
    render() {
        return (
            <div>
                <Link to='/second'>
                    <button type="button" className="Button">Hello Ya</button>
                </Link>

                <div className='container hero'>
                    <h1>
                        <FormattedMessage id='learn_to'/>
                    </h1>
                    {/* ... */}
                </div>

            </div>
        )

    }

}

export default HelloYa;