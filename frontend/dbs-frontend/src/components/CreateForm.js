import React from 'react'

const CreateForm = () => {
  return (

    <div className="container">
        <div className="row">
            <button type="button" class="btn btn-link">Edit</button>
            <button type="button" class="btn btn-link">Delete</button>
        </div>
        <div className="col edit-col">
            <div className = "row">
                <label htmlFor="claimid">Claim Id</label>
                <input type="text" id="claimid"></input>
            </div>
            <div className = "row">
                <label htmlFor="date">Date</label>
                <input type="text" id="date"></input>
            </div>
            <div className = "row">
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount"></input>
            </div>
            <div className = "row">
                <label htmlFor="prevclaimid">Previous Claim Id</label>
                <input type="text" id="prevclaimid"></input>
            </div>
        </div>
        <div className="col edit-col">
            <div className = "row">
                <label htmlFor="status">Status</label>
                <input type="text" id="status"></input>
            </div>
            <div className = "row">
                <label htmlFor="purpose">Purpose</label>
                <input type="text" id="purpose"></input>
            </div>
            <div className = "row">
                <label htmlFor="lud">Last Edited Date</label>
                <input type="text" id="lud"></input>
            </div>
        </div>
    </div>
  )
}

export default CreateForm