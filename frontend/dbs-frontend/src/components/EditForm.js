import React, { useState } from 'react'
// const axios = require('axios');
import axios from 'axios';
import api from '../api/api.js';
import {useSelector } from 'react-redux'
import { header } from 'express/lib/request.js';
// const curr = useSelector(state => state.auth.value)

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

    const [claimID, setClaimID] = useState("")
    const [expDate, setExpDate] = useState("")
    const [amt, setAmt] = useState("")
    const [isFollowUp, setIsFollowUp] = useState(false)
    const [prevClaimId, setPrevClaimId] = useState("")
    const [status, setStatus] = useState("")
    const [purpose, setPurpose] = useState("")
    const [lastEdited, setLastEdited] = useState("")
    // const [claimInfo, setClaimInfo] = useState({})

    // const fetchClaim = async () => {
    //     try {
    //       const getClaim = await api.get('/claim', header={`bearer ${curr}`});
    //     //   const getClaim = await api.get('localhost:4500/InsuranceClaims');
    //     //   setClaimInfo(getClaim.data);
    //       setClaimID(getClaim.data.claimID);
    //       setExpDate(getClaim.data.expenseDate);
    //       setAmt(getClaim.data.Amount);
    //       setIsFollowUp(getClaim.data.FollowUp);
    //       setPrevClaimId(getClaim.data.PreviousClaimID);
    //       setStatus(getClaim.data.Status);
    //       setPurpose(getClaim.data.Purpose);
    //       setLastEdited(getClaim.data.LastEditedClaimDate);
    //       console.log(getClaim.data)
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`);
    //     }
    // }
    const [isEditable, setIsEditable] = useState(false)
    const toggleEdit = () => {
        setIsEditable(!isEditable)
    }
    const deleteClaim = () => {
        //
    }
    const saveClaim = () => {
        // post to API
    }


    return (
        <div className="container">
            <div className="row">
                <button type="button" className="btn btn-link" >Edit</button>
                <button type="button" className="btn btn-link">Delete</button>
            </div>

            <div className="row">
                <div className = "col-6">
                    <label htmlFor="claimid">Claim Id</label>
                    <input type="text" id="claimid" className="form-control col-4" value={"claimID"} readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="status">Status</label>
                    <input type="text" id="status" className="form-control col-4" value={"status"} readOnly={false}></input>
                </div>
            </div>

            <div className="row">
                <div className = "col-6">
                    {/* add datepicker? */}
                    <label htmlFor="date">Expense Date</label>
                    <input type="text" id="date" className="form-control col-4" value={expDate} readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="prevclaimid">Previous Claim Id</label>
                    <input type="text" id="prevclaimid" className="form-control col-4" value={prevClaimId} readOnly></input>
                </div>
            </div>


            <div className="row">
                <div className = "col-6">
                    {/* add check for money */}
                    <label htmlFor="amount">Amount</label>
                    <input type="text" id="amount" className="form-control col-4" value={amt} readOnly></input>
                </div>
                <div className = "col-6">
                    <label htmlFor="prevclaimid">Purpose</label>
                    <input type="text" id="prevclaimid" className="form-control col-4" value={purpose} readOnly></input>
                </div>
            </div>
            <div className="row">
                <div className = "col-6">
                    <label htmlFor="isFollowUp">is this a follow-up claim?</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpYes" checked={isFollowUp} readOnly></input>
                    <label class='form-check-label' htmlFor="isFollowUpYes">Yes</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpNo" checked={!isFollowUp} readOnly></input>
                    <label class='form-check-label' htmlFor="isFollowUpNo">No</label>
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