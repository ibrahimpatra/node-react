import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Createinfo from "./Components/Createinfo";
import Infolist from "./Components/Infolist";
import Editinfo from "./Components/editinfo";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
       <Navbar />
   <div className="container">
     
      <div className="container" >
         <Switch>
        <Route path="/" exact >
          <Infolist></Infolist>
        </Route>
        <Route path="/create" exact >
          <Createinfo></Createinfo>
        </Route>
        <Route path="/edit/:id" exact >
          <Editinfo></Editinfo>
        </Route>
        </Switch>
      </div>
      </div>
    </Fragment>
  );
}

export default App;
