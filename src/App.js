import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
     <Navbar/>
     <Switch>
         
          <Route
            path={`/`}
            component={(props) => (
              <Posts history={props.history} />
            )}
            exact
          />
            <Route
            path={`/posts/:postId`}
            component={(props) => (
              <Post {...props} history={props.history} />
            )}
            exact
          />
        
        </Switch>
    
    </div>
  );
}

export default App;
