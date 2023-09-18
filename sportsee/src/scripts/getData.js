import fetchData from './fetchData';
import mockData from './mockData';

/**
 * Return the data of the user from the API or from a specific mock file
 * @param {Number} idUser - Id of the user
 * @param {Boolean} boolUseFetch - If true, use API, else use Mock
 * @returns {object} - Return the data of the user in format of {mainData, activity, averageSessions, performance}, eachOne in format {data, loading, error}
 */
const getData = (idUser, boolUseFetch) => {
    const domain = 'http://localhost:3000';
    const mainURI = '/user/' + idUser.toString() + '/';

    return boolUseFetch ? fetchData(domain + mainURI) : mockData();
}

export default getData;