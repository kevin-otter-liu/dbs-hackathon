import { useState, useEffect } from "react";

const LoginPage = () => {
    const [employeeId, setemployeeId] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(employeeId);
        console.log(password);
        setemployeeId('');
        setPassword('');
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="row mt-4">
                    <div className="col"></div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="employeeId1" className="form-label">Employee ID</label>
                            <input type="text" className="form-control" id="employeeId1" aria-describedby="userHelp"
                                value={employeeId} onChange={(e) => setemployeeId(e.target.value)}></input>
                            <div id="userHelp" className="form-text">Key your employee ID</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col"></div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginPage