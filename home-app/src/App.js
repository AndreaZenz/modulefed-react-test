import React, { lazy, Suspense, useEffect, useState  } from "react"; // Must be imported for webpack to work
import axios from "axios";
import "./App.css";

const Header = lazy(() => import("HeaderApp/Header"));





function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // axios (libreria npm) ci permette di effettuare la get a mocky, e nel then prendiamo la risposta e utilizzando il setData (dell'array deconstructure)
    axios
      .get("https://run.mocky.io/v3/98ae029f-b61a-4a3f-8323-8078d95cb12e")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  const handleRefreshData = () => {
    axios
      .get("https://run.mocky.io/v3/61ce86a9-040b-4830-b3dc-5de6d7f78536")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };



  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header
          data={data}
          handleRefreshData={handleRefreshData}
        />
      </Suspense>
      <div className="container">
        <button className="btn btn-success" onClick={handleRefreshData}>
          Refresh API
        </button>
        {/* <button className="btn btn-success">Refresh API</button> */}
      </div>
    </div>
  );
}

export default App;
