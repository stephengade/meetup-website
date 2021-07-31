import "./App.css";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <div className="todo">
      <h2>Daily Tasks</h2>
      <Todo title="Brushing my teeth" />
      <Todo title="15 minutes prayer" />
      <Todo title="Breakfast" />
      <Todo title="Learn how to Code" />
    </div>
  );
};

export default App;
