import React, { useState } from "react";
import ButtonComponent from './ButtonComponent';  // ให้แน่ใจว่าเส้นทางถูกต้อง

import "./styles.css";

const App = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="container">
      {completed ? (
        <h1 className="complete-text">COMPLETE</h1>
      ) : (
        <ButtonComponent setCompleted={setCompleted} />
      )}
    </div>
  );
};

export default App;
