import useFetch from './useFetch';
import useMock from './useMock';

/**
 * Return the data of the user from the API or from a specific mock file
 * @param {Number} idUser - Id of the user
 * @param {Boolean} boolUseFetch - If true, use API, else use Mock
 * @returns {object} - Return the data of the user in format of {mainData, activity, averageSessions, performance}, eachOne in format {data, loading, error}
 */
const useGetData = (idUser, boolUseFetch) => {
    const domain = 'http://localhost:3000';
    const mainURI = '/user/' + idUser.toString() + '/';

    // Get Data from API
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

    // Get Data from Mock
    const {mockMainData, mockActivity, mockSessions, mockPerformance} = useMock(idUser);

    // Return the data of the user
    if(boolUseFetch 
        && (fetchUserData || fetchLoadUserData || fetchErrorUserData) // Fetch User Data
        && (fetchUserActivity || fetchLoadUserActivity || fetchErrorUserActivity) // Fetch User Activity
        && (fetchUserAverageSessions || fetchLoadUserAverageSessions || fetchErrorUserAverageSessions) // Fetch User Average Sessions
        && (fetchUserPerformance || fetchLoadUserPerformance || fetchErrorUserPerformance) // Fetch User Performance
    ) {
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