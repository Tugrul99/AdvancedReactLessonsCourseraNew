import React from "react";
import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [toggle, setToggle] = useState(false);

  const changeHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = toggle ? "Just Toggled" : "Not toggled :)";
  }, [toggle]);

  return (
    <div>
      <button style={{ color: "red" }} onClick={changeHandler}>
        Toggle Button
      </button>
      {toggle && <h2> Welcome Guys</h2>}
    </div>
  );
};

export default UseEffectExample;
