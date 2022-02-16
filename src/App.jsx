import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import { getPosts } from './actions/blog'
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  

  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
