import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Layout/Header';
import Sidebar from "./Layout/Sidebar";
import Profile from "./Pages/Profile";
import Dialogs from "./Pages/Dialogs";
import Settings from "./Pages/Settings";
import News from "./Pages/News";
import Music from "./Pages/Music";
import Home from "./Pages/Home";
import Users from "./Pages/Users/UsersContainer";

import '../styles/global.scss';
import UsersContainer from "./Pages/Users/UsersContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <Sidebar/>
                <div className="container bar">
                    <Route path='/profile'
                           component={Profile}/>
                    <Route path='/dialogs'
                           component={Dialogs}/>
                    <Route exact path='/'
                           render={() => <Home/>}/>
                   <Route exact path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
