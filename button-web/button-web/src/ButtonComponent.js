import React, { useState } from "react";

const ButtonComponent = ({ setCompleted }) => {
  const [cancelPosition, setCancelPosition] = useState({ top: "%", left: "120%" });
  const [buttonSize, setButtonSize] = useState({ width: "150px", height: "45px" });

  const moveCancelButton = () => {
    const newX = Math.random() * 80 + 10; // สุ่มตำแหน่งใหม่
    const newY = Math.random() * 80 + 10;
    setCancelPosition({ top: `${newY}%`, left: `${newX}%` });
    setButtonSize("150px"); // ขยายขนาดปุ่มเป็น 3 เท่าของขนาดเดิม
  };

  const resetCancelButtonSize = () => {
    setButtonSize("50px"); // คืนขนาดปุ่มกลับมาเป็นปกติ
  };

  return (
    <div className="button-container" style={{ position: "relative" }}>
      <button className="ok-button" onClick={() => setCompleted(true)}>
        OK
      </button>
      <button
        className="cancel-button"
        style={{
          top: cancelPosition.top,
          left: cancelPosition.left,
          width: buttonSize.width,  // ใช้ความกว้างจาก state
          height: buttonSize.height,
          transition: "width 0.3s ease, height 0.3s ease", // เพิ่มการเคลื่อนไหว
          position: "absolute", // ให้ปุ่มเคลื่อนไหวในตำแหน่งที่ถูกต้อง
        }}
        onMouseEnter={moveCancelButton}
        onMouseLeave={resetCancelButtonSize} // เมื่อเมาส์ออกจากปุ่มให้กลับขนาดเดิม
        onClick={moveCancelButton}
      >
        Cancel
      </button>
    </div>
  );
};

export default ButtonComponent;
