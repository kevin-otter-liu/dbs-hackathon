import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [employeeId, setemployeeId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(employeeId);
        //console.log(password);
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