import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://assessment.api.vweb.app/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div className='container'>
      <h1 className="text-center">Storing User Id in Table</h1>
      <br />
      <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">User_id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.user_id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
