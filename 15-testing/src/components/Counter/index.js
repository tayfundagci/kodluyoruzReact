import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decreasee</button>
      <button onClick={() => setCount(count + 1)}>Increasee</button>
    </div>
  );
}

export default Counter;
