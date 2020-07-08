import React from 'react';
const logo = 'https://github.com/KVeitch/breaking-bad-cast-page/blob/master/src/images/logo.png?raw=true';

const Header = () => {
  return (
    <div>
      <header className='center'>
        <img src={logo} alt='' />
      </header>
    </div>
  );
};

export default Header;
