import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function Chess() {

    return(
        <a href="/chess">
        <div id="project">
            <div className="Chess">
                Chess
            </div>
        </div>
        </a>
    );
}

export default Chess;