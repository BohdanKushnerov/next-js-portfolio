import React, { FC } from 'react'

interface IHeader {
  children: React.ReactNode;
}

const Header: FC<IHeader> = ({ children }) => {
  return (
    <header>
      *Header*
      {children}
    </header>
  );
};

export default Header;
