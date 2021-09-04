import "./App.css";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>

<Router>
<Switch>
  {/* <HomePage /> */}
  <Route path="/" exact component={HomePage} />
</Switch>
</Router>
  );
}

export default App;
