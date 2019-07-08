import React from 'react';

const Shape=(props)=>{
    const shape =props.shape;
    const selectShape = props.selectShape;
    console.log("line 4 in shape.js testing props", props.shape)
    return(
        <div className={shape}  onClick={() =>selectShape(shape)} />
    )
}
export default Shape;