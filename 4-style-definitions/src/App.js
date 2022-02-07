import './App.css';
import A from './components/A';
import B from './components/B';

// iki süslü parantez, background-color değil backgroundColor şeklinde.
// bootstrap için cdnjs e gidip ordan bootstrap linkini al

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{ color: "red", backgroundColor: "white", paddingTop: 50, paddingBottom: 50 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim esse, accusantium molestias libero porro ipsum asperiores quia a repudiandae animi quasi maiores nostrum dignissimos ex vero dolorum itaque perferendis.</div>

          <div class="alert alert-primary mt-5 " role="alert">
            A simple primary alert—check it out!
          </div>

          <A />
          <B />
       
      </header>
    </div>
  );
}

export default App;
