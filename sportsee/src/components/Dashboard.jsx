import '../styles/Dashboard.scss';
import useFetch from '../scripts/useFetch';
import RadialBarChart from './plots/RadialBarChart';
import InfoCard from './plots/InfoCard';

function Dashboard({ modeDataGet }) {
  const idUser = 12;
  const domain = 'http://localhost:3000';
  const mainURI = '/user/' + idUser.toString() + '/';

  const testDataPlot = [1, 2, 3, 4, 5, 3, 2, 1, -5];

  const {
    // User Data
    data: userData,
    loading: loadUserData,
    error: errorUserData,
  } = useFetch(domain + mainURI);

  // const data = useGetData(idUser, true);
  // console.log(data);

  const {
    // User Activity
    data: userActivity,
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
      <div className="title">
        {loadUserData && <h1>{loadUserData}</h1>}
        {userData && (
          <h1>
            Bonjour <span>{userData.userInfos.firstName}</span>
          </h1>
        )}
        {errorUserData && <h1>{errorUserData}</h1>}
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <article>
        <div className="averageTime">
        </div>
        <div className="radar"></div>
        {userData && <RadialBarChart data={userData.todayScore} />}
      </article>

      <aside>
        {userData && (
          <ul>
            <InfoCard
              infoValue={userData.keyData.calorieCount}
              infoUnit="kCal"
              infoLegend="Calories"
            />
            <InfoCard
              infoValue={userData.keyData.proteinCount}
              infoUnit="g"
              infoLegend="Protéïnes"
            />
            <InfoCard
              infoValue={userData.keyData.carbohydrateCount}
              infoUnit="g"
              infoLegend="Glucides"
            />
            <InfoCard
              infoValue={userData.keyData.lipidCount}
              infoUnit="g"
              infoLegend="Lipides"
            />
          </ul>
        )}
      </aside>
    </main>
  );
}

export default Dashboard;
