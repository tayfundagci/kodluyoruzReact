import "./App.css";
import { TeamProvider } from "./context/ThemeContext";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <TeamProvider>
      <Header />
      <Button />
    </TeamProvider>
  );
}

export default App;
