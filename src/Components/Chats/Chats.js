import React from 'react';
import Chat from '../Chat/Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name='Micheal Buble'
                message='Hi, how are you'
                timestamp='35 minutes ago'
                profilePic='https://assets.smoothradio.com/2016/33/michael-buble-1471596905-editorial-long-form-0.jpg'
            />
            <Chat
                name='Matt LeBlanc'
                message='How you doin?'
                timestamp='2 hours ago'
                profilePic='https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/01/03/09/MattLeBlanc_415.jpg?w968'
            />
        </div>
    )
}

export default Chats;