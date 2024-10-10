import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [user, SetUser] = useState({
        'name': "",
        'email': "",
        'password': "",
    })
    const [arr, setArr] = useState([])
    const inputHandler = (event) => {
        let { name, value } = event.target;
        SetUser({ ...user, [name]: value })
    }
    const formSubmit = (event) => {
        event.preventDefault();
        setArr([...arr, user])
        SetUser({ 'name': "", 'email': "", 'password': "" })
    }
    useEffect(() => {
        if (arr.length > 0) {
            localStorage.setItem("userdata", JSON.stringify(arr))
            alert("You have Successfully Registered")
            navigate("/login")
        }
    })
    return (
        <div className="container mt-5">
            <form method='post' onSubmit={formSubmit}>
                <div className='form-group mb-2'>
                    <label htmlFor="" className='form-label'>Name</label>
                    <input type="text" className='form-control' onChange={inputHandler} name='name' value={user.name} required />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="" className='form-label'>Email</label>
                    <input type="email" className='form-control' onChange={inputHandler} name='email' value={user.email} required />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="" className='form-label'>Password</label>
                    <input type="password" className='form-control' onChange={inputHandler} name='password' value={user.password} required />
                </div>
                <div className='form-group'>
                    <input type="submit" className='btn btn-primary' value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Register