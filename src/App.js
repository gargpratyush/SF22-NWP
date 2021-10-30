import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import PopUp from './components/Menu/popup';
import LandingPage from './components/LandingPage/LandingPage';
import sfLogo from './components/Menu/sf-logo.png';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
    <div className="hamburger-menu">
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node} className='burger-class'>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        
      </>
    </ThemeProvider>
    </div>
  
    <Router>
      <Route path="/cities&events" component={PopUp} />
      <Link to="/" className="sf-logo"><img src={sfLogo} alt="Spring Fest" /></Link>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/a">
          <span>abc</span>
        </Route>
        <Route exact path="/">

        </Route>
        <Route exact path="/">

        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;