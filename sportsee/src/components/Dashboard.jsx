import '../styles/Dashboard.scss';
import useFetch from '../scripts/useFetch';

function Dashboard() {
  const idUser = 12;
  const domain = 'http://localhost:3000';
  const mainURI = '/user/' + idUser.toString() + '/';

  const {
    // User Data
    data: userData,
    loading: loadUserData,
    error: errorUserData,
  } = useFetch(domain + mainURI);

  const {
    // User Activity
    data: userActivity,
    loading: loadUserActivity,
    error: errorUserActivity,
  } = useFetch(domain + mainURI + 'activity');

  const {
    // User Average Sessions
    data: userAverageSessions,
  } = useFetch(domain + mainURI + 'average-sessions');

  const {
    // User Performance
    data: userPerformance,
  } = useFetch(domain + mainURI + 'performance');

  return (
    <main>
      <article>
        <div className="App">
          {loadUserData && <h1>{loadUserData}</h1>}
          {userData && <h1>Bonjour {userData.userInfos.firstName}</h1>}
          {errorUserData && <h1>{errorUserData}</h1>}
        </div>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className="averageTime"></div>
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
