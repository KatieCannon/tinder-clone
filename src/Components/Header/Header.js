import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return(
        <div className='header' >
            <IconButton>
                <PersonIcon className='header__icon' />
            </IconButton>
            <Link to='/'>
                <img src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt='tinder logo' className='header__logo' />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <ForumIcon className='header__icon' />
                </IconButton>
            </Link>
        </div>    
    )
}

export default Header;