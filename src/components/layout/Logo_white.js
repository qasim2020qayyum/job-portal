import React from 'react';

const LogoWhite = () => {
  return (
    <a className="home-link" href={process.env.PUBLIC_URL + '/'} title="Hireco" rel="home">
      <img id="logo-img" height="42" width="170" className="img-fluid auto_size" src="images/white-logo.svg" alt="logo-img" />
    </a>
  );
};

export default LogoWhite;