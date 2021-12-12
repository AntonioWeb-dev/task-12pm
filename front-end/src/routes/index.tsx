import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Header from '../components/header';

import { Home, Vehicles } from '../pages';
import { PageContainer } from '../themes/layout/Container';


const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Switch>
      </PageContainer>
    </Router>
  )
}

export default Routes;