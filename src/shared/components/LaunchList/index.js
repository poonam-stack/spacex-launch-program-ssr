import React from "react";
import PropTypes from 'prop-types';
import './index.css';
const LaunchList = ({ launchData }) => {
  const results = launchData.map((el, i) => {
    return (
      <div key={el.mn} className="lzy-div">
        <div className="imgBg">
          {el.img ? <img width='200' height='200' className="lzy-img" src={el.img} alt={el.mn} /> : null}
        </div>
        <div className="launchName">{`${el.mn} #${i + 1}`}</div>
        {el.mId.length > 0 ? (
          <div className="missions">
            <span>Mission Ids:</span>
            <ul>
              {el.mId.map((id) => (
                <li key={id}>{id}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="launchInfo">
          <span>Launch Year: </span>
          <span>{el.yr}</span>
        </div>
        <div className="launchInfo">
          <span>Successful Launch: </span>
          <span>{`${el.launchSucc}`}</span>
        </div>
        {el.landSucc !== null ? (
          <div className="launchInfo">
            <span>Successful Landing: </span>
            <span>{`${el.landSucc}`}</span>
          </div>
        ) : null}
      </div>
    );
  });
  return <div className="launchDisplay">{results}</div>;
};
LaunchList.propTypes = {
  launchData: PropTypes.array,
};
export default LaunchList;
