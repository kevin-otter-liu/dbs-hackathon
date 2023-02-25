import React, { useState } from "react";
import axios from "axios";

function CreateForm() {
  const [data, setData] = useState({});

  const submitNewClaim = async (e) => {
    await e.preventDefault();
    try {
      console.log(data);
      const postNewClaim = await axios.post(
        "http://localhost:4500/InsuranceClaims",
        {
          ExpenseDate: data,
        }
      );
      console.log(postNewClaim);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={submitNewClaim}>
        <div>
          <h3>Create new policy claim</h3>
          <div>
            <div className="col-6">
              <label htmlFor="expDate">Expense Date</label>
              <input
                className="form-control col-4"
                type="text"
                id="expDate"
                name="expDate"
                onChange={(e) => setData({ ...data, expDate: e.target.value })}
              />
            </div>
            <div className="col-6">
              <label htmlFor="amount">Amount</label>
              <input
                className="form-control col-4"
                type="amount"
                id="amount"
                name="amount"
                onChange={(e) => setData({ ...data, amount: e.target.value })}
              />
            </div>
            <div className="col-6">
              <label htmlFor="purpose">Purpose</label>
              <input
                className="form-control col-4"
                type="text"
                id="purpose"
                onChange={(e) => setData({ ...data, purpose: e.target.value })}
              ></input>
            </div>
            <div className="col-6">
              <label htmlFor="isFollowUp">Is this a follow-up claim?</label>
              <input
                type="radio"
                id="isFollowUp"
                className="form-check-input col-4"
                name="isFollowUpYes"
              ></input>
              <label class="form-check-label" for="isFollowUpYes">
                Yes
              </label>
              <input
                type="radio"
                id="isFollowUp"
                className="form-check-input col-4"
                name="isFollowUpNo"
              ></input>
              <label class="form-check-label" for="isFollowUpNo">
                No
              </label>
              {/* <label htmlFor="isFollowUp">Is this a follow up claim?</label>
              <input
                className="form-control col-4"
                type="radio"
                id="isFollowUpYes"
                onChange={(e) =>
                  setData({ ...data, isFollowUp: e.target.value })
                }
              ></input> */}
            </div>
            <div className="col-6">
              <label htmlFor="prevclaimid">Previous Claim ID</label>
              <input
                className="form-control col-4"
                type="text"
                id="prevclaimid"
                name="prevclaimid"
                onChange={(e) =>
                  setData({ ...data, prevclaimid: e.target.value })
                }
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default CreateForm;

{
  /* <div className="row">
                <div className = "col-6">
                    <label htmlFor="isFollowUp">is this a follow-up claim?</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpYes" readOnly></input>
                    <label class='form-check-label' for="isFollowUpYes">Yes</label>
                    <input type="radio" id="isFollowUp" className="form-check-input col-4" name="isFollowUpNo" readOnly></input>
                    <label class='form-check-label' for="isFollowUpNo">No</label>
                </div> */
}
