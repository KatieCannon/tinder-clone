import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../TinderCards/TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([ 
        {
            name: 'Wentworth Miller',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Wentworth_by_Andrew_Horovitz.JPG/220px-Wentworth_by_Andrew_Horovitz.JPG'

        }, 
        {
            name:'Nasri Atweh',
            url: 'https://marcandrew.ca/wp-content/uploads/2014/07/Nasri.jpg'
        }
    ]);
    return (
        <div>
            <div className='tinderCards__cardContainer'>
                { people.map((person) => (
                    <TinderCard 
                    className='swipe' 
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}} 
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;