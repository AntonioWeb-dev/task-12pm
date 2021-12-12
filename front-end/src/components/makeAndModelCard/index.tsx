import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DivCard } from './styled';

interface IProps {
  content: string;
}

const MakeAndModelCard: React.FC<IProps> = ({ content }) => {
  const location = useLocation();

  let pathTo = /make=/gi.test(location.search)
    ?
    `/vehicles?make=FORD&model=${content}`
    :
    `/?make=${content}`;
  return (
    <DivCard>
      <Link to={pathTo}>
        {content}
      </Link>
    </DivCard>
  )
};

export default MakeAndModelCard;