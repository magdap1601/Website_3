import React from "react";
import './scss/main.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";

function App() {
    return (
        <Router>
            <nav>
                <ul className='list'>
                    <li>
                        <Link to="/Zaloguj" className='link'>Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/ZalozKonto" className='link'>Załóż konto</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/Zaloguj">
                    <SignIn />
                </Route>
                <Route path="/ZalozKonto">
                    <Register />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>
    );
}



export default App;
