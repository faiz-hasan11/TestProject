import React from 'react'
import {BrowserRouter , Switch , Route} from "react-router-dom"
import Home from "../src/component/Home/Home"
import Auth from "../src/component/Auth/Auth"
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/" exact component={Auth}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
