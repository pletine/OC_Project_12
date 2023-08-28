import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.scss';
import Plot from './TestPlot';

function Dashboard({ data }) {
  const numbers = data.numbers;

  const [testData, setTestData] = useState('');

  const fetchTestData = async () => {
    try {
      const data = await fetch('http://localhost:3000/user/12', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          return response.data;
        });
      setTestData(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  return (
    <main>
      <article>
        <h1>Bonjour Thomas</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="dailyAct">
          <Plot data={numbers} />
        </div>
        <div className="averageTime">
          <p>aaa aa{testData.id}</p>
        </div>
        <div className="radar"></div>
        <div className="score"></div>
      </article>

      <aside>
        <ul>
          <li>Calories</li>
          <li>Protéïnes</li>
          <li>Glucides</li>
          <li>Lipides</li>
        </ul>
      </aside>
    </main>
  );
}

export default Dashboard;
