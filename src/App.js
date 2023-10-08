import Header from "./templates/Header/Header";
import "./App.css";
import Usestate from "./components/Usestate/Usestate";
import Useeffect from "./components/Useeffect/Useeffect";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Useeffect />
      </div>
    </div>
  );
}

export default App;
