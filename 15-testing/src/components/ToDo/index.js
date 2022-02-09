import { useState } from "react";

const defaultItems = [
  {
    name: "Item A",
  },
  {
    name: "Item B",
  },
  {
    name: "Item C",
  },
];

function ToDo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text
        <input
          id="inputt"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      {/* inputları almak için. */}
      <button onClick={addItem}>Add</button>
      {/* aktif itemleri almak ve üzerine eklemek için.w */}
      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default ToDo;
