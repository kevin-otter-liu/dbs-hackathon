import React from 'react'
// const axios = require('axios');
import axios from 'axios';




const EditForm = () => {
    // const fetchClaim = async () => 
    // axios.get("http:localhost:4500/InsuranceClaims")
    //                     .then(function (response) {
    //                         console.log(response)
    //                     })

    // const res = axios({
    //     method: 'get',
    //     url: 'localhost:4500/InsuranceClaims'
    // })
    // const data = res.json()
    // console.log(res)
    
    // console.log(claim.FirstName)


    return (
        <div className="container">
            <div className="row">
                <button type="button" class="btn btn-link">Edit</button>
                <button type="button" class="btn btn-link">Delete</button>
            </div>

            <div className="row">
                <div className = "col-6">
                    <label htmlFor="claimid">Claim Id</label>
                    <input type="text" id="claimid" className="form-control col-4" readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="status">Status</label>
                    <input type="text" id="status" className="form-control col-4" readOnly></input>
                </div>
            </div>

            <div className="row">
                <div className = "col-6">
                    {/* add datepicker? */}
                    <label htmlFor="date">Expense Date</label>
                    <input type="text" id="date" className="form-control col-4" readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="prevclaimid">Previous Claim Id</label>
                    <input type="text" id="prevclaimid" className="form-control col-4" readOnly></input>
                </div>
            </div>


            <div className="row">
                <div className = "col-6">
                    {/* add check for money */}
                    <label htmlFor="amount">Amount</label>
                    <input type="text" id="amount" className="form-control col-4" readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="prevclaimid">Purpose</label>
                    <input type="text" id="prevclaimid" className="form-control col-4" readOnly></input>
                </div>
            </div>
            <div className="row">
                <div className = "col-6">
                    <label htmlFor="isFollowUp">is this a follow-up claim?</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpYes" readOnly></input>
                    <label class='form-check-label' for="isFollowUpYes">Yes</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpNo" readOnly></input>
                    <label class='form-check-label' for="isFollowUpNo">No</label>
                </div>
                <div className = "col-6">
                    <label htmlFor="lud">Last Edited Date</label>
                    <input type="text" id="lud" className="form-control col-4" readOnly></input>
                </div>
            </div>
        </div>
    )
    }

export default EditForm