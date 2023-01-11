import './App.css';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom"
import VendingMachine from './VendingMachine';
import Chips from "./Chips"
import Cookies from "./Cookies"
import Soda from "./Soda"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <NavLink exact to="/chips">Chips?</NavLink>
        <NavLink exact to="/cookies">Cookies?</NavLink>
        <Link exact to="/soda">Soda?</Link>
        </nav>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/cookies">
          <Cookies />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
