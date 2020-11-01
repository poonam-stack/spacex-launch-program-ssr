import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Filters from '../components/Filters';
import LaunchList from '../components/LaunchList';
import Footer from '../components/Footer';
import getSpacexLaunches from '../apis/fetchLaunches';
import './Main.css';

const Main = ({ launchData, urlParams, routeProps }) => {
   const [year, setYear] = useState(null);
   const [launchSuccess, setLaunchSuccess] = useState(null);
   const [landingSuccess, setLandingSuccess] = useState(null);
   const [launchRes, setLaunchData] = useState(null);

   useEffect(() => {
      if (launchSuccess !== null || landingSuccess !== null || year !== null)
         getSpacexLaunches(year, launchSuccess, landingSuccess).then(
            res => { setLaunchData(res.launchData); }
         );
   }, [year, launchSuccess, landingSuccess]);

   const data = launchRes ? launchRes : launchData;

   return (
      <main>
         <div className="mainHeading">SpaceX Launch Programs</div>
         <div className="mainContainer">
            <Filters year={year} urlParams={urlParams} routeProps={routeProps}
               setYear={setYear} setLaunchSuccess={setLaunchSuccess} setLandingSuccess={setLandingSuccess} />
            <LaunchList launchData={launchRes ? launchRes : data} />
         </div>
         <Footer />
      </main>)
}
Main.propTypes = {
   launchData: PropTypes.array,
   urlParams: PropTypes.string,
   routeProps: PropTypes.object,
};
export default Main;