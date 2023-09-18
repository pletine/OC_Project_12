import data from '../assets/data.js';

const mockData = (idUser) => {
    const mockMainData = data.USER_MAIN_DATA.find((elem) => elem.id === idUser);
    const mockActivity = data.USER_ACTIVITY.find((elem) => elem.userId === idUser);
    const mockSessions = data.USER_AVERAGE_SESSIONS.find((elem) => elem.userId === idUser);
    const mockPerformance = data.USER_PERFORMANCE.find((elem) => elem.userId === idUser);

    return {mockMainData, mockActivity, mockSessions, mockPerformance};
};

export default mockData;