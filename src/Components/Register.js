import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Register = () => {
    const [user, SetUser] = useState({
        'name' : "",
        'email' : "",
        'password' : "",
    })
    const [arr, setArr] = useState([])
    const inputHandler = (event) => {
        let {name, value} = event.target;
        SetUser({...user, [name] : value})
    }
    const formSubmit = (event) => {
        event.preventDefault();
        setArr([...arr, user])
        SetUser({'name':"",'email':"",'password':""})
    }
    useEffect(()=>{
        if(arr.length > 0){
            localStorage.setItem("userdata", JSON.stringify(arr))
            alert("You have Successfully Registered")
        }
    })
  return (
    <><Navbar/>
    <div className="container mt-5">
        <form method='post' onSubmit={formSubmit}>
            <div className='form-group mb-2'>
                <label htmlFor="" className='form-label'>Name</label>
                <input type="text" className='form-control' onChange={inputHandler} name='name' value={user.name}/>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="" className='form-label'>Email</label>
                <input type="email" className='form-control' onChange={inputHandler} name='email' value={user.email}/>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="" className='form-label'>Password</label>
                <input type="password" className='form-control' onChange={inputHandler} name='password' value={user.password}/>
            </div>
            <div className='form-group'>
                <input type="submit" className='btn btn-primary' value="Register"/>
            </div>
        </form>
    </div></>
  )
}

export default Register