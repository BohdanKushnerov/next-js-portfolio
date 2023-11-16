import React, { FC } from 'react'

interface IHeader {
  children: React.ReactNode;
}

const Header: FC<IHeader> = ({children}) => {
  return (
    <header className="absolute z-30 w-full">
      Header
      {children}
    </header>
  );
};

export default Header;
