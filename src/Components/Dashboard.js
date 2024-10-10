import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbardash from './Navbardash';

const Dashboard = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })
    const [arr, setArr] = useState([]);

    const inputHandler = (event) => {
        let { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const [data] = useState(() => {
        let localdata = localStorage.getItem('userlogin');
        if (localdata == null) {
            return [];
        } else {
            return JSON.parse(localdata)
        }
    })

    const edituser = (id) => {
        let newarr = data.filter((_, index) => {
            return id === index;
        })
        setUser({
            name: newarr[0].name,
            email: newarr[0].email,
            password: newarr[0].password,
        })
    }

    const updateuser = () => {
        setArr([...arr, user])
        window.location = '/dashboard'
    }
    useEffect(() => {
        if (arr.length > 0) {
            localStorage.setItem("userlogin", JSON.stringify(arr))
        }
    }, [arr])

    return (
        <>
            <Navbardash />
            <div className="container mt-5">
                {data.map((card, index) => {
                    return (
                        <div className="col-sm-6 mx-auto mt-5" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title" style={{ fontSize: "20px" }}>User Data</div>
                                    <div className="card-text">Name : {card.name}</div>
                                    <div className="card-text">Email : {card.email}</div>
                                    <div className="card-text">Password : {card.password}</div>
                                    <button type='button' className='btn btn-outline-primary mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => edituser(index)}>Edit</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Update User Data</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    Name : <input type="text" className='form-control' onChange={inputHandler} name='name' value={user.name} />
                                </div>
                                <div>
                                    Email : <input type="email" className='form-control' onChange={inputHandler} name='email' value={user.email} />
                                </div>
                                <div>
                                    Password : <input type="password" className='form-control' onChange={inputHandler} name='password' value={user.password} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={updateuser}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Dashboard