import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import '../ChatScreen/ChatScreen.css';
import { useParams } from "react-router";

const ChatScreen  = () => {
    const { person } = useParams();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{
        name: 'Michael Buble',
        image: 'https://assets.smoothradio.com/2016/33/michael-buble-1471596905-editorial-long-form-0.jpg',
        message: 'Hi, how are you?'
    }, {
        name: 'Michael Buble',
        image: 'https://assets.smoothradio.com/2016/33/michael-buble-1471596905-editorial-long-form-0.jpg',
        message: 'I just havent met you yet'
    },
    {
        message: 'whats up?'
    }
]);

const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput('');
}
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>{`You matched with ${person} on 27/07/2020`}</p>
            { messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar 
                            className='chatScreen_image'
                            alt={message.name}
                            src={message.image}/>
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                    ) : (
                        <div className='chatScreen__message'>
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                    )
                )
            )}
            <form className='chatScreen__input'>
                <input className='chatScreen__inputField'value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Type a message...' />
                <button className='chatScreen__inputButton' type='submit'  onClick ={handleSend}>SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen;