import React from "react";

function Dashboard()
{
    return (
        <div>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Claim ID</th>
        <th scope="col">Insurance ID</th>
        <th scope="col">LastUpdatedDate</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button type="button" class="btn btn-primary btn-sm"> View </button>
        <button type="button" class="btn btn-primary btn-sm"> Delete </button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button type="button" class="btn btn-primary btn-sm"> View </button>
        <button type="button" class="btn btn-primary btn-sm"> Delete </button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button type="button" class="btn btn-primary btn-sm"> View </button>
        <button type="button" class="btn btn-primary btn-sm"> Delete </button>
        </td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-primary btn-sm mb-4"> Create </button>
  </div>
)
}

export default Dashboard