import fetch from 'isomorphic-fetch'

const getSpacexLaunches = (year = null, launchSuccess = null, landingSuccess = null) => {
    var url = 'https://api.spacexdata.com/v3/launches?limit=100';
    if (launchSuccess)
        url += "&launch_success=true"
    if (landingSuccess)
        url += "&land_success=true"
    if (year)
        url += `&launch_year=${year}`
    return fetch(url)
        .then(data => data.json())
        .then(launches => {
            const launchData = launches.map((item) => {
                const {
                    mission_name: mn,
                    mission_id: mId,
                    launch_year: yr,
                    launch_success: launchSucc,
                    links: { mission_patch_small: img },
                    rocket
                } = item;
                const { land_success: landSucc } = rocket.first_stage.cores[0];
                return { ...{ mn, mId, yr, launchSucc, img, landSucc } };
            });
            return { launchData }
        })
        .catch(err => {
            console.log('Oops! There is some problem, in fetching data.' + err);
        });
}

export default getSpacexLaunches;