import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Message extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.number.isRequired
        })
    };

    render() {
        const { text, name, date } = this.props.details;
        const d = new Date( date );
        var date_string =d.getDate() +
            "/" + (d.getMonth() + 1) +
            "/" + d.getFullYear() +
            " " + d.getHours() +
            ":" + d.getMinutes() +
            ":" + d.getSeconds();

        const url = window.location.href;
        const userName = url.split("/")
        const nickName = localStorage.getItem('username');
        if (name == nickName) {
            return (
                <div className="message-user">
                    <a className="list-group-item list-group-item-action active text-white rounded-0">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <h4 className="mb-0">{name}</h4><small className="small font-weight-bold">{date_string}</small>
                        </div>
                        <p className="font-italic mb-0 text-small">{text}</p>
                    </a>
                </div>
            )

        } else {
            return (
                <div className='message-system'>
                    <a className="list-group-item list-group-item-action list-group-item-info active text-white rounded-0 bg-secundary">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                            <h4 className="mb-0">{name}</h4><small className="small font-weight-bold">{date_string}</small>
                        </div>
                        <p className="font-italic mb-0 text-small" >{text}</p>
                    </a>
                </div>
            )
        }
    }
}
export default Message;