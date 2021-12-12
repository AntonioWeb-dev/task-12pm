import React from 'react';
import { Link } from 'react-router-dom';
import { DivHeader } from './styled';

const Header: React.FC = () => {
  return (
    <DivHeader>
      <Link to='/'>Task Logo</Link>
    </DivHeader>
  )
}

export default Header;