import dataFile from '../assets/data';
// import useFetch from './scripts/useFetch';

function useGetData(userId, modeGetData) {
    let dataUser;
    let dataActivity;
    let dataAverageSessions;
    let dataPerformance;

    if(modeGetData) {
        // const domain = 'http://localhost:3000';
        // const mainURI = '/user/' + userId.toString() + '/';
        
        // const {
        //     // User Data
        //     data: userData,
        //     loading: loadUserData,
        //     error: errorUserData,
        //   } = useFetch(domain + mainURI);
    } else {
        dataUser = {
            'data': 
                dataFile.USER_MAIN_DATA
                .find(elem => elem.id === userId), 
            'loading': null, 
            'error': null
        }
        dataActivity = {
            'data': 
                dataFile.USER_ACTIVITY
                .find(elem => elem.id === userId), 
            'loading': null, 
            'error': null
        }
        dataAverageSessions = {
            'data': 
                dataFile.USER_AVERAGE_SESSIONS
                .find(elem => elem.id === userId), 
            'loading': null, 
            'error': null
        }
        dataPerformance = {
            'data': 
                dataFile.USER_PERFORMANCE
                .find(elem => elem.id === userId), 
            'loading': null, 
            'error': null
        }
    }

    return {
        dataUser, 
        dataActivity, 
        dataAverageSessions, 
        dataPerformance
    };
}

export default useGetData;