import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createContext } from 'react';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
export const ImgUrlContext = createContext();

function App() {
  const [imgUrl, setImgUrl] = useState([]);

  return (
    <ImgUrlContext.Provider value = {[imgUrl, setImgUrl]}>
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Home></Home>
          </Route>
          <Route path={'/post/:postId'}>
            <PostDetail></PostDetail>
          </Route>
          <Route path={'*'}>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ImgUrlContext.Provider>
  );
}

export default App;