import useFetch from './useFetch';
import useMock from './useMock';

const useGetData = (idUser, boolUseFetch) => {
    const domain = 'http://localhost:3000';
    const mainURI = '/user/' + idUser.toString() + '/';

    const {
        // User Data
        data: fetchUserData,
        loading: fetchLoadUserData,
        error: fetchErrorUserData,
      } = useFetch(domain + mainURI);

      const {
        // User Activity
        data: fetchUserActivity,
        loading: fetchLoadUserActivity,
        error: fetchErrorUserActivity,
      } = useFetch(domain + mainURI + 'activity');
      
      const {
        // User Average Sessions
        data: fetchUserAverageSessions,
        loading: fetchLoadUserAverageSessions,
        error: fetchErrorUserAverageSessions,
      } = useFetch(domain + mainURI + 'average-sessions');
    
      const {
        // User Performance
        data: fetchUserPerformance,
        loading: fetchLoadUserPerformance,
        error: fetchErrorUserPerformance,
      } = useFetch(domain + mainURI + 'performance');

    const {mockMainData, mockActivity, mockSessions, mockPerformance} = useMock(idUser);

    if(boolUseFetch) {
        return {
            mainData: {
                data: fetchUserData, 
                load: fetchLoadUserData, 
                error: fetchErrorUserData
            }, 
            activity: {
                data: fetchUserActivity, 
                load: fetchLoadUserActivity, 
                error: fetchErrorUserActivity
            },
            averageSessions: {
                data: fetchUserAverageSessions, 
                load: fetchLoadUserAverageSessions, 
                error: fetchErrorUserAverageSessions
            },
            performance: {
                data: fetchUserPerformance, 
                load: fetchLoadUserPerformance, 
                error: fetchErrorUserPerformance
            }
        };
    } else {
        return {
            mainData: {data: mockMainData, load: null, error: null}, 
            activity: {data: mockActivity, load: null, error: null},
            averageSessions: {data: mockSessions, load: null, error: null},
            performance: {data: mockPerformance, load: null, error: null}
        };
    }
}

export default useGetData;