import '../styles/Dashboard.scss';
import useFetch from '../scripts/useFetch';

// Import Graph Components
import RadialBarChartHome from './plots/RadialBarChart';
import LineChartHome from './plots/LineChart';
import InfoCard from './plots/InfoCard';
import RadarChart from './plots/RadarChart';
import BarChart from './plots/BarChart';

// Import icons and images
import IconCal from '../assets/IconCal.svg';
import IconGluc from '../assets/IconGluc.svg';
import IconLipid from '../assets/IconLipid.svg';
import IconProt from '../assets/IconProt.svg';

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

  // const {
  //   // User Activity
  //   data: userActivity,
  // } = useFetch(domain + mainURI + 'activity');

  // const {
  //   // User Average Sessions
  //   data: userAverageSessions,
  // } = useFetch(domain + mainURI + 'average-sessions');

  // const {
  //   // User Performance
  //   data: userPerformance,
  // } = useFetch(domain + mainURI + 'performance');

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
        {userData && <BarChart />}
        {userData && <RadarChart />}
        {userData && <LineChartHome />}
        {userData && <RadialBarChartHome />}
      </article>

      <aside>
        {userData && (
          <ul>
            <InfoCard
              srcImg={IconCal}
              colorImg="#FBEAEA"
              infoValue={userData.keyData.calorieCount}
              infoUnit="kCal"
              infoLegend="Calories"
            />
            <InfoCard
              srcImg={IconProt}
              colorImg="#E9F4FB"
              infoValue={userData.keyData.proteinCount}
              infoUnit="g"
              infoLegend="Protéïnes"
            />
            <InfoCard
              srcImg={IconGluc}
              colorImg="#FAF6E5"
              infoValue={userData.keyData.carbohydrateCount}
              infoUnit="g"
              infoLegend="Glucides"
            />
            <InfoCard
              srcImg={IconLipid}
              colorImg="#FBEAEF"
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
