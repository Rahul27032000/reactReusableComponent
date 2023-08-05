import "./App.css";
import NewDocButton from "./components/NewDocButton";

function App() {
  return (
    <div>
      <NewDocButton backgroundColor="black" disabled={true} />
    </div>
  );
}

export default App;
