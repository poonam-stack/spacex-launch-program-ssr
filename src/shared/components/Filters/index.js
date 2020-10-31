import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Filters = ({ year, urlParams, routeProps, setYear, setLaunchSuccess, setLandingSuccess }) => {
  const queryParams = urlParams ? (urlParams.split('/').length > 1 ? urlParams.split('/')[1] : '') : (routeProps && routeProps.location && routeProps.location.search ? routeProps.location.search : "")

  let yearValues = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

  yearValues = yearValues.map((yr) => (
    <Link
      className={queryParams.indexOf(yr) > -1 ? 'activeLink' : ''}
      to={`${urlFormatter(queryParams, "year", yr)}`} key={yr}
      onClick={() => setYear(year === null || year != yr ? yr : null)}
    >
      {yr}
    </Link>
  ));
  let launchStatus = [true, false];
  launchStatus = launchStatus.map((a) => (
    <Link to={`${urlFormatter(queryParams, "launchSuccess", a)}`} key={`launchSuccess-${a}`}
      className={`${queryParams.indexOf(`launchSuccess=${a}`) > -1 ? "activeLink" : ""}`}
      onClick={() => setLaunchSuccess(a)}>
      {`${a}`}
    </Link>
  ));

  let landStatus = [true, false];
  landStatus = landStatus.map((a) => (<Link
    to={`${urlFormatter(queryParams, "launchSuccess", a)}`} key={`landSuccess-${a}`}
    onClick={() => setLandingSuccess(a)}
    className={queryParams.indexOf(`landSuccess=${a}`) > -1 ? 'activeLink' : ''}
  >{`${a}`}
  </Link>));
  return (
    <div className="filterSection">
      <div className="filterData">
        <div className="filterHeading"> Filters </div>
        <div className="filterSubHeading">Launch Year</div>
        <div className="filterOptions">{yearValues}</div>
        <div className="filterSubHeading">Successful Launch</div>
        <div className="filterOptions">{launchStatus}</div>
        <div className="filterSubHeading">Successful Landing</div>
        <div className="filterOptions">{landStatus}</div>
      </div>

    </div>

  )
}


const urlFormatter = (locnData, filter, filterVal) => {

  if (!locnData && filterVal)
    return `?${filter}=${filterVal}`
  if (!locnData && !filterVal)
    return ``

  if (locnData.indexOf(filter) > -1) {
    if ((["launchSuccess", "landSuccess"].includes(filter))) {
      if (filterVal) {
        return locnData
      } else {
        let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
        if (t.length > 0)
          return `?${t.join("&")}`
      }
    }
    else {
      if (locnData.indexOf(filterVal) > -1) {
        let t = locnData.split('?')[1].split('&').filter(el => el.indexOf(filter) == -1)
        if (t.length > 0)
          return `?${t.join("&")}`
      }
      else {
        return `${locnData.replace(locnData.split('year=')[1].substr(0, 4), filterVal)}`
      }
    }
  } else {
    if ((["launchSuccess", "landSuccess"].includes(filter))) {
      if (filterVal) {
        return `${locnData}&${filter}=${filterVal}`
      }
      return `${locnData}`
    }
    else {
      return `${locnData}&${filter}=${filterVal}`
    }
  }
  return ``
}
export default Filters;