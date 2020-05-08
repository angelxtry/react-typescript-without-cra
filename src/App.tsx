import React from 'react';
import bulbIconUrl, { ReactComponent as BulbIcon } from './images/ic-btn-emo-bulb.svg';
import loveIconUrl, { ReactComponent as LoveIcon } from './images/ic-btn-emo-love.svg';
import moonIconUrl, { ReactComponent as MoonIcon } from './images/ic-btn-emo-moon.svg';
import waterdropIconUrl, { ReactComponent as WaterdropIcon } from './images/ic-btn-emo-waterdrop.svg';

export default function App() {
  return (
    <div>
      React + TypeScript + Webpack!
      <div>
        <img src={bulbIconUrl} alt="Bulb Icon" />
      </div>
      <BulbIcon />
      <div>
        <img src={loveIconUrl} alt="Love Icon" />
      </div>
      <LoveIcon />
      <div>
        <img src={moonIconUrl} alt="Moon Icon" />
      </div>
      <MoonIcon />
      <div>
        <img src={waterdropIconUrl} alt="Waterdrop Icon" />
      </div>
      <WaterdropIcon />
    </div>
  );
}
