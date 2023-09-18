const fetchData = async (url) => {
    // Fetch Main Data
    const fetchMainData = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    const fetchMainDataJson = await fetchMainData.json();
    const mainData = fetchMainDataJson.data;

    // Fetch Activity Data
    const fetchActivityData = await fetch(url + 'activity', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    const fetchActivityDataJson = await fetchActivityData.json();
    const activityData = fetchActivityDataJson.data;

    // Fetch Average Sessions Data
    const fetchAverageSessionsData = await fetch(url + 'average-sessions', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    const fetchAverageSessionsDataJson = await fetchAverageSessionsData.json();
    const averageSessionsData = fetchAverageSessionsDataJson.data;

    // Fetch Performance Data
    const fetchPerformanceData = await fetch(url + 'performance', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    const fetchPerformanceDataJson = await fetchPerformanceData.json();
    const performanceData = fetchPerformanceDataJson.data;

    return {mainData, activityData, averageSessionsData, performanceData};
};

export default fetchData;