import { useState, useEffect } from "react";
import React from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import api from "../api/api";
import { login } from "../redux/authSlice";

const LoginPage = () => {
    const [employeeId, setemployeeId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState("");

    const logEmployee = async () => {
        try {
            const employeeCred = {
                employeeid: employeeId,
                password: password
            }
            const response = await api.post('/api/auth/sign-in', employeeCred);
            if (response && response.data) { 
                setCurrentUser(response.data.access_token);
                dispatch(login(response.data.access_token));
                console.log(response.data.access_token)
            };
        } catch (err) {
            if (err.response) {
                //not in 200 response range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (employeeId.trim() == "" || password.trim() == "") {
            alert("Please fill in all fields");
        }
        //console.log(employeeId);
        //console.log(password);
        //api
        logEmployee(); 
        setemployeeId('');
        setPassword('');
        navigate('/');
    }

    return (
        <div className="container">

            <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                    <h1>Employee Insurance Claims</h1>
                </div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="employeeId1" className="form-label">Employee ID</label>
                            <input type="text" className="form-control" id="employeeId1"
                                value={employeeId} onChange={(e) => setemployeeId(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </div>

                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-8"></div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginPage