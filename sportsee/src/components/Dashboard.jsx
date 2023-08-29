import '../styles/Dashboard.scss';
import useFetch from '../scripts/useFetch';

function Dashboard() {
  const domain = 'http://localhost:3000';
  const uriTest = '/user/12';

  const { data, loading, error } = useFetch(domain + uriTest);

  return (
    <main>
      <article>
        <h1>Bonjour Thomas</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="averageTime"></div>
        <div className="radar"></div>
        <div className="score"></div>
        <div className="App">
          {loading && <p>{loading}</p>}
          {data && <p>{data.keyData.carbohydrateCount}</p>}
          {error && <p>{error}</p>}
        </div>
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
