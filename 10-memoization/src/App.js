import "./App.css";
import { useMemo, useState, useCallback } from "react";
import Header from "./components/Header";

// Clicke basıldığı zaman Header de oradaki return un içinde olduğu için o da render ediliyor. Bu bizim için bir problem.
// gereksiz render. Önüne geçmek için export ederken React.memo(Header); yapmalıyız.

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number]);
  // hesaplamayı sadece number arttığında yapması için.
  // useMemo hooku

  // const data = calculateObject();

  return (
    <div className="App">
      <Header increment={increment} />
      {/* number 5 olana kadar 0 gönder 5 olduktan sonra render et.  */}
      <hr />
      <h1>{number}</h1>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

// function calculateObject(number) {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log("Calculating completed!");

//   return { name: "Tayfun", number };
// }

export default App;
