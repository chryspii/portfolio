import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/list.component';
import Edit from './components/edit.component';
import Create from './components/create.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container fluid>

              <Navbar.Brand>
                <Link to={'/'} className='nav-link'>
                  <img src={logo} height='30' weight='30' className="d-inline-block align-top" alt="" /> Coba
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/list"} className="nav-link">
                    List
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path='/' component={Create} />
                  <Route path="/create" component={Create} />
                  <Route path="/edit/:id" component={Edit} />
                  <Route path="/list" component={List} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
