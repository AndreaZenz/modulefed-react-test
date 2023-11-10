import React, { useEffect, useState } from "react";
import axios from "axios";
// Must be imported for webpack to work
import "./App.css";

function App(props) {
  // array destructuring   (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), questo array contiene il valore ricavato dall'api
  // const [data, setData] = useState([]);

  const data = props.data;

  return (
    <div className="container">
      <div className="mt-3">
        <div className="d-flex">
          <h3>Fetch Data from API</h3>
          {/* <button className="btn btn-success" onClick={refreshData}>
            Refresh API
          </button> */}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>firstname</th>
              <th>lastname</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
