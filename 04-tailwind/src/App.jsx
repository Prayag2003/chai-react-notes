import "./App.css";
import Card from "./Components/Card";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const arr2 = ["React", "Vue", "Angular", "Svelte", "Ember"];
  const prop = {
    title: "React",
    description: "A JavaScript library for building user interfaces",
  };
  return (
    <>
      <div className="bg-green-500 text-black p-4 text-3xl rounded-2xl">
        Chai aur React | Vite | Tailwind CSS
      </div>
      <Card myProp={prop} myArr={arr} username="Prayag" />
      <Card myProp={prop} myArr={arr2} />
    </>
  );
}

export default App;
