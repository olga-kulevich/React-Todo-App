import React from 'react';
import logoPng from './logo.png';

const Logo = () => (
  <picture>
    <img src={logoPng} alt="Senla logo" width={174} height={36} />
  </picture>
);

export default Logo;
