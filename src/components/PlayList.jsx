import {useState} from "react";
import {FormattedMessage} from "react-intl";

const PlayList = () => {
    const [count, setCount] = useState(0);
    const onChange = () => {
        setCount((prevState) => prevState + 1);
    };
    return (
        <div className="container mt">
            {/* Footer content here */}
            <p>
                <FormattedMessage id="click_button"/>
            </p>
            <button onClick={onChange}>
                <FormattedMessage id="click_here"/>
            </button>
            <p>
                <FormattedMessage id="click_count" values={{count: count}}/>
            </p>
        </div>
    );
};

export default PlayList;
