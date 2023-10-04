import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  let dataBase = [
    {
      title: "This is first button",
      caption: "First btn",
    },
    {
      title: "This is second button",
      caption: "Second btn",
    },
    {
      title: "This is third button",
      caption: "Third btn",
    },
  ];
  return (
    <div className="App">
      <Card caption={dataBase[0].caption} title={dataBase[0].title} />
      <Card caption={dataBase[1].caption} title={dataBase[1].title} />
      <Card caption={dataBase[2].caption} title={dataBase[2].title} />
    </div>
  );
}

export default App;
