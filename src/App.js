import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import Albums from './components/Albums';
import AlbumPhotos from './components/AlbumPhotos';
import SimpleTable from './components/Table'

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
           <Route
            path={`/users/`}
            component={(props) => (
              <Users  {...props} history={props.history}  />
            )}
            exact
          />
          <Route
            path={`/users/:userId`}
            component={(props) => (
              <User {...props} history={props.history} />
            )}
            exact
          />
           <Route
            path={`/albums`}
            component={(props) => (
              <Albums  {...props} history={props.history} />
            )}
            exact
          />
            <Route
            path={`/albums/:albumId/photos`}
            component={(props) => (
              <AlbumPhotos {...props} history={props.history} />
            )}
            exact
          />
          <Route
            path={`/tables`}
            component={(props) => (
              <SimpleTable numberOfRows={4}  numberOfColumns={4} history={props.history} />
            )}
            exact
          />
        
        </Switch>
    
    </div>
  );
}

export default App;
