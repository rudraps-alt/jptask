import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
function App() {
  return (
    <Switch>
        <Route exact path="/quiz" component={Quiz} />
    </Switch>
  );
}

export default App;
