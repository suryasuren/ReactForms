import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Form from './Components/Forms/Forms';
import Home from './Components/Home/index'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route component={Form} exact path="/" />
                <Route component={Home} path="/success"/>
            </BrowserRouter>
        </div>
    );
}

export default App;
