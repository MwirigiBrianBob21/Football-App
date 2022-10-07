import React, { useState } from 'react';


const LikeButton = ({itemId}) => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(isClicked);
  };

  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick } id={itemId}>
      <span className="likes-counter">{ `⚽ | ${likes}` }</span>
    </button>
  );
};

export default LikeButton;