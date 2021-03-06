import React from 'react';
import Contacts from '../contacts';

const InfoBox = () => (
  <div className="info-box">
    <div className="slogan">
      <p className="slogan-text">WHATEVER <span className="blue">YOU</span></p>
      <p className="slogan-text">CAN <span className="blue">IMAGINE</span></p>
      <p className="slogan-text"><span className="blue">WE</span> CAN <span className="blue">DELIVER</span></p>
    </div>

    <Contacts />
  </div>
    );

export default InfoBox;
