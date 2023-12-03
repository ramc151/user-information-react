import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
    const navigate = useNavigate();
    const [user, SetUser] = useState({
        'name' : "",
        'password' : ""
    })
    const [arr, setArr] = useState([])
    const [data] = useState(() => {
        let localdata = localStorage.getItem("userdata");
        if(localdata == null){
            return []
        }else{
            return JSON.parse(localdata)
        }
    })
    const inputHandler = (event) => {
        let {name, value} = event.target;
        SetUser({...user, [name] : value})
    }
    const formSubmit = (event) => {
        event.preventDefault();
        let newarr = data.filter((items,index) => {
            return ((user.name === items.name || user.name === items.email) && user.password === items.password)
        })
        setArr(newarr)
    }
    useEffect(()=>{
        if(arr.length > 0){
            localStorage.setItem("userlogin", JSON.stringify(arr))
            navigate('/dashboard')
            alert("login success")
        }else{
            navigate('/login')
        }
        // eslint-disable-next-line
    },[arr])
  return (
    <><Navbar/>
    <div className="container mt-5">
        <form method='post' onSubmit={formSubmit}>
            <div className="form-group mb-2">
                <label htmlFor="" className='form-label'>Email/Name</label>
                <input type="text" className='form-control' onChange={inputHandler} name='name' value={user.name}/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="" className='form-label'>Password</label>
                <input type="password" className='form-control' onChange={inputHandler} name='password' value={user.password}/>
            </div>
            <div className="form-group">
                <input type="submit" className='btn btn-success' value="Login"/>
            </div>
        </form>
    </div></>
  )
}

export default Login