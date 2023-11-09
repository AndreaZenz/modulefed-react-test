import React, { useEffect, useState } from "react";
import axios from "axios";
// Must be imported for webpack to work
import "./App.css";

function App(props, handleRefreshData) {
  // array destructuring   (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), questo array contiene il valore ricavato dall'api
  // const [data, setData] = useState([]);

  const data = props.data;

  

  //The useEffect hook is called in a component after the first render and every time the component updates.
  // useEffect(() => {
    // axios (libreria npm) ci permette di effettuare la get a mocky, e nel then prendiamo la risposta e utilizzando il setData (dell'array deconstructure)
  //   axios
  //     .get("https://run.mocky.io/v3/98ae029f-b61a-4a3f-8323-8078d95cb12e")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const refreshData = () => {
  //   axios
  //     .get("https://run.mocky.io/v3/61ce86a9-040b-4830-b3dc-5de6d7f78536")
  //     .then((res) => setData(res.data), console.log(test))
  //     .catch((err) => console.log(err));
  // };

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
