import React from 'react'

const Links=({href,item})=> {

    const clickHandler=(event)=>{
        event.preventDefault();
        window.history.pushState({},'',href);
    }
  return (
    <a href={href} 
    onClick={clickHandler}>{item}</a>
  );
}

export default Links