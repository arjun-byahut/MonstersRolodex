import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "../App";
import CardDetails from "../Components/CardDetails";

export default function RoutesComponent(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CardDetails/:id">CardDetails</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/CardDetails/:id">
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
