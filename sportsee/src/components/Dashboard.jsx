import '../styles/Dashboard.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
// import useGetData from '../scripts/useGetData';
import getData from '../scripts/getData';
import useChooseDataMode from '../scripts/useChooseDataMode';

import Error from './Error';

// Import Graph Components
import InfoCard from './plots/InfoCard';
import CustomRadialBarChart from './plots/CustomRadialBarChart';
import CustomLineChart from './plots/CustomLineChart';
import CustomRadarChart from './plots/CustomRadarChart';
import CustomBarChart from './plots/CustomBarChart';

// Import icons and images
import IconCal from '../assets/IconCal.svg';
import IconGluc from '../assets/IconGluc.svg';
import IconLipid from '../assets/IconLipid.svg';
import IconProt from '../assets/IconProt.svg';

/**
 * Dashboard component
 * @component Dashboard
 * @returns {JSX.Element} Dashboard component
 */
function Dashboard() {
  // Get ID of the User
  const { idUser } = useParams();

  // Mode of data selection : data from API or from Mock
  // If true, use API, else use Mock
  const [getDataMode] = useChooseDataMode();
  // const dataGet = useGetData(Number(idUser), getDataMode);
  const dataGet = getData(Number(idUser), getDataMode);

  // If data is not loaded, display error message
  if (!dataGet.mainData.data) {
    return <Error />;
  }

  return (
    <main>
      <div className="title">
        {dataGet.mainData.load && <h1>{dataGet.mainData.load}</h1>}
        {dataGet.mainData.data && (
          <h1>
            Bonjour <span>{dataGet.mainData.data.userInfos.firstName}</span>
          </h1>
        )}
        {dataGet.mainData.error && <h1>{dataGet.mainData.error}</h1>}
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="show_data">
        <div className="graphs">
          <div className="graphs_upstair">
            <h2>Activité quotidienne</h2>
            {dataGet.activity.data && (
              <CustomBarChart activity={dataGet.activity.data} />
            )}
          </div>

          <div className="graphs_downstair">
            {dataGet.averageSessions.data && (
              <div className="line">
                <h2>Durée moyenne des sessions</h2>
                <CustomLineChart average={dataGet.averageSessions.data} />
              </div>
            )}

            {dataGet.performance.data && (
              <div className="radar">
                <CustomRadarChart perf={dataGet.performance.data} />
              </div>
            )}

            {dataGet.mainData.data && (
              <div className="radial">
                <h2>Score</h2>
                <CustomRadialBarChart
                  score={
                    dataGet.mainData.data.todayScore
                      ? dataGet.mainData.data.todayScore
                      : dataGet.mainData.data.score
                      ? dataGet.mainData.data.score
                      : 2
                  }
                />
              </div>
            )}
          </div>
        </div>

        {dataGet.mainData.data && (
          <ul className="numbers">
            <InfoCard
              srcImg={IconCal}
              colorImg="#FBEAEA"
              infoValue={dataGet.mainData.data.keyData.calorieCount}
              infoUnit="kCal"
              infoLegend="Calories"
            />
            <InfoCard
              srcImg={IconProt}
              colorImg="#E9F4FB"
              infoValue={dataGet.mainData.data.keyData.proteinCount}
              infoUnit="g"
              infoLegend="Protéïnes"
            />
            <InfoCard
              srcImg={IconGluc}
              colorImg="#FAF6E5"
              infoValue={dataGet.mainData.data.keyData.carbohydrateCount}
              infoUnit="g"
              infoLegend="Glucides"
            />
            <InfoCard
              srcImg={IconLipid}
              colorImg="#FBEAEF"
              infoValue={dataGet.mainData.data.keyData.lipidCount}
              infoUnit="g"
              infoLegend="Lipides"
            />
          </ul>
        )}
      </div>
    </main>
  );
}

export default Dashboard;
