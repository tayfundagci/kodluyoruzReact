import { useState } from "react";
import { send } from "../SocketApi";

function Palatte({ activeColor }) {
  const [color, setColor] = useState("#000");

  return (
    <div className="palette">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>Clicck</button>
      {color}
    </div>
  );
}

export default Palatte;
