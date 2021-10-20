import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { userRegister } from '../../JS/actions/userAction'
import Loader from "../Loader/Loader"

const UserRegister = () => {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const loading = useSelector(state => state.userReducer.loading)
  const dispatch = useDispatch()


  const register = (e) => {
    const newUser = { fullName, email, phone, password }
    e.preventDefault();
    dispatch(userRegister(newUser));
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
  }



  return loading ? (<Loader />) : (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={register}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to={`/login`}>sign in? </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
