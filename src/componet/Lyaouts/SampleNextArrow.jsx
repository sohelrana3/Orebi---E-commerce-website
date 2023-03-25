import React from 'react'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
     <div  className={className}
     style={{ ...style, display: "block", background: "red", }}
     onClick={onClick}>
     </div>    
    );
  }

export default SampleNextArrow