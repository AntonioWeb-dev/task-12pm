import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { API_REQUEST } from '../../services/Axios';
import MakeAndModelCard from '../../components/makeAndModelCard';
import { MainContainer } from '../../themes/layout/Container';

const Home: React.FC = () => {
  const [makesOrModel, setMakesOrModel] = useState<string[]>([]);
  const location = useLocation();
  let currentPath = /make=/gi.test(location.search) ? 'Models' : 'Makes';

  useEffect(() => {
    const getMakes = async () => {
      const TIME_STARTED = new Date().getSeconds();
      while (true) {
        if (new Date().getSeconds() - TIME_STARTED > 30) {
          break;
        }
        try {
          let response;
          switch (currentPath) {
            case 'Makes':
              response = await API_REQUEST('/makes');
              break;
            case 'Models':
              response = await API_REQUEST(`/models${location.search}`);
              break;
          }
          if (response?.status === 200) {
            setMakesOrModel(response.data);
            break;
          }
        } catch (err) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    };
    getMakes();
  }, [currentPath, location.search])

  return (
    <>
      <h1>{makesOrModel.length === 0 ? 'Have no models' : currentPath}</h1>
      <MainContainer columnQuantity='2'>

        {makesOrModel.map((make: string) => (
          <MakeAndModelCard key={make} content={make} />
        ))}
      </MainContainer>
    </>
  )
};

export default Home;