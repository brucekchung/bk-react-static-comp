import React from 'react';
import Button from './Button';
import Author from './Author.js';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author authImg={props.authImg}
                authName={props.authName}
                estTime={props.estTime} />
        {/* create an Author component and add it here */}
        {/* it will need properties of the author image, 
        name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
