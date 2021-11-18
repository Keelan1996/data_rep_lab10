import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Header } from './components/header'; // import header
import { Footer } from './components/footer'; // import footer
import { Content } from './components/content';// import middle content

import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap navigation bar
import { Navbar, Nav } from 'react-bootstrap'; // import nav bar

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // gives router and switch
import { Create } from './components/create'; // import for create class
import { Read } from './components/read';// import for read
import { Edit } from './components/edit'; // import for edit (lab8)



// <Router> incases the main code. switch allows to switch between components, 
//the<Router> gives <route> where you can link your components up and pass the route type you gave in for the nav bar
// exact is the exact path

// imports class from react called conponent/ this the main component
class App extends Component {

  // method that takes no arguements
  render() {

    // headers and time 
    // header, content and footer being imported
    // imported bootstrap using nav bar code given on site

    // lab8 unique id on the edit component

    return (

      <Router>

        <div className="App">

          <Navbar bg="primary" variant="dark">

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Navbar>

          <br />


          <Switch>

            <Route path='/' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
            
            
            <Route path = '/edit/:id' component={Edit}/>

          </Switch>




        </div>

      </Router>

    );

  } // render()

}// class app

export default App;
