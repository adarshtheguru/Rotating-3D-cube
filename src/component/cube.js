import React, { useRef, useState } from "react";
import "../assets/css/cube.css";

const Cube = () => {
  const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - rotationX);
    setInitialY(e.clientY - rotationY);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (isDragging) {
      const newRotationX = e.clientX - initialX;
      const newRotationY = e.clientY - initialY;
      setRotationX(newRotationX);
      setRotationY(newRotationY);

      cubeRef.current.style.transform = `rotateX(${-newRotationY}deg) rotateY(${newRotationX}deg)`;
    }
  };

  return (
    <div
      className="scene"
      onMouseDown={startDragging}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onMouseMove={onDrag}
    >
      <div className="cube" ref={cubeRef}>
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </div>
    </div>
  );
};

export default Cube;
