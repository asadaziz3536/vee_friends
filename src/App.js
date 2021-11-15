
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <Fragment >
      <Router >
        <Routes/>
      </Router>  
    </Fragment>
  );
}

export default App;
