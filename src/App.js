import logo from './logo.svg';
import './App.css';
import BasicExample from './BasicExample';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import ListComponent from './components/ListComponent';
import CreateComponent from './components/CreateComponent';
import ViewComponent from './components/ViewComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListComponent}></Route>
                          <Route path = "/groups" component = {ListComponent}></Route>
                          <Route path = "/add-group/:_id" component = {CreateComponent}></Route>
                          <Route path = "/view-group/:_id" component = {ViewComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
