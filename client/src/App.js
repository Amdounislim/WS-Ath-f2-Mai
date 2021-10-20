import React, { useEffect } from "react"
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserLogin from './components/UserLogin/UserLogin';
import UserProfile from './components/UserProfile/UserProfile';
import UserRegister from './components/UserRegister/UserRegister';
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from './JS/actions/userAction';

function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])



  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Switch>
          <Route path="/register" render={() => <UserRegister />} />
          <Route path="/login" render={() => <UserLogin />} />
          <PrivateRoute path='/profile' render={() => <UserProfile />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
