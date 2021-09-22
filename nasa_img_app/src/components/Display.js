import React from 'react';
import classes from './Display.module.css';

const Display = props => {

    return (
    <div className={classes.columns}>
        {props.searchedImages.map(image =>
            <figure key={image.id}>
                <img src={image.href} alt="display_image"/>
                <figcaption>{image.title}</figcaption>
                <p>{image.date}</p>
                <button onClick={props.onToggleLikeState(image)}>{image.likeState ? 'liked' : 'like'}</button>
            </figure>
        )}
        	
    </div>
    );
  };
  
  export default Display;