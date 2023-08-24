import '../styles/Dashboard.scss';
// import { useState } from 'react';
import Plot from './TestPlot';

function Dashboard() {
  // const [data, setData] = useState([]); // Array instead of object

  // const getData = async () => {
  //   await fetch('http://localhost:3000/user/12', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .json((response) => {
  //       setData(response.result);
  //       console.log(response.result);
  //     });
  // };

  return (
    <main>
      <h1>Bonjour Thomas</h1>
      {/* <p>{data}</p> */}
      <Plot />
    </main>
  );
}

export default Dashboard;
