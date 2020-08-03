import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';
import '../Header/Header.css';

const Header = ({ backButton }) => {
    const history = useHistory();
    return(
        <div className='header' >
             { backButton ? (
                <IconButton onClick = {() => history.replace(backButton)}>
                    <ArrowBackIosIcon />
                </IconButton> 
                ) : (
                <IconButton>
                    <PersonIcon className='header__icon' />
                </IconButton>
            )}
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