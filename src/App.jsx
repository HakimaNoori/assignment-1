
import Badge from "./components/Badge";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Week 1 Assignment</h1>

      <Badge label="Course" value="React" />
      <Badge label="Week" value="1" />
      <Badge label="Topic" value="Props" />
      <Badge label="Level" value="Beginner" />
    </div>
  );
}

export default App;
