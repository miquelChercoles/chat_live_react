import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { useHistory } from 'react-router-dom';


const Header = (props) => {
    const url = window.location.href;
    const urlString = url.split("/");
    const chat = urlString[urlString.length - 1].charAt(0);
    const history = useHistory();
    const username = localStorage.getItem('username');
    const goToBegin = () => history.push('/');


    return (
        <header className="top">
            <form >
                <h1 className="title-username">{username}</h1>
                <h1 className="title-chat">Chat {Parser(chat)}</h1>
                <button className='button-exit' onClick={goToBegin} >Exit</button>
            </form>
        </header>
    );
};
export default Header;