import '../styles/Dashboard.scss';
import React from 'react';
import useGetData from '../scripts/useGetData';

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
 * If boolUseFetch is TRUE, useFetch and data from API
 * If boolUseFetch is FALSE, useMock and data from file
 */
function Dashboard({ boolUseFetch }) {
  const dataGet = useGetData(boolUseFetch);

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

      <article>
        {dataGet.activity && (
          <div className="bar">
            <CustomBarChart activity={dataGet.activity.data} />
          </div>
        )}

        {dataGet.averageSessions && (
          <div className="line">
            <CustomLineChart average={dataGet.averageSessions.data} />
          </div>
        )}

        {dataGet.performance && (
          <div className="radar">
            <CustomRadarChart perf={dataGet.performance.data} />
          </div>
        )}

        {dataGet.mainData && (
          <div className="radial">
            <CustomRadialBarChart score={dataGet.mainData.data.todayScore} />
          </div>
        )}
      </article>

      <aside>
        {dataGet.mainData && (
          <ul>
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
      </aside>
    </main>
  );
}

export default Dashboard;
