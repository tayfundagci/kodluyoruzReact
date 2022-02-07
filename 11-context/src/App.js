import "./App.css";
import { TeamProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import Container from "./components/Container";

function App() {
  return (
    <TeamProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </TeamProvider>
  );
}

export default App;
