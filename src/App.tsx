import "./App.css";
import NewDocButton from "./components/NewDocButton";

function App() {
  return (
    <div>
      <NewDocButton
        style={{ backgroundColor: "green" }}
        disabled={true}
        aria-expanded={true}
        aria-atomic={false}
      />
    </div>
  );
}

export default App;
