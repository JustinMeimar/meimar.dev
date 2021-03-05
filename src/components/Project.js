import React from 'react';
import Todo from './projects/Todo.js';
import Bookstore from './projects/Bookstore.js';
import Chess from './projects/Chess.js';
import BookPage from './pages/BookPage.js';
import ChessPage from './pages/ChessPage.js';
import TodoPage from './pages/TodoPage.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function Project() {


    return(
        <div className="project_wrap">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Todo></Todo>
                        <Chess></Chess>
                        <Bookstore></Bookstore>
                    </Route >
                    <Route path="/chess">
                        <ChessPage></ChessPage>
                    </Route>
                    <Route path="/bookstore">
                        <BookPage></BookPage>   
                    </Route>
                    <Route path="/todo">
                        <TodoPage></TodoPage>   
                    </Route>      
                </Switch>
            </Router>
           
        </div>
    );
}

export default Project