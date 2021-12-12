import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_REQUEST } from '../../services/Axios';
import { MainContainer } from '../../themes/layout/Container';

import IVehicle from '../../interface/vehicles';
import VehicleCard from '../../components/vehicleCard';



const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>();
  const location = useLocation();

  useEffect(() => {
    const getVehicles = async () => {
      const TIME_STARTED = new Date().getSeconds();
      while (true) {
        if (new Date().getSeconds() - TIME_STARTED > 30) {
          console.log('Internal server error');
          break;
        }
        try {
          const response = await API_REQUEST.get(`/vehicles${location.search}`);
          if (response.status === 200) {
            setVehicles(response.data);
            break;
          }
        } catch (err) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
    getVehicles();
  }, [location.search]);

  console.log(vehicles);

  return (
    <>
      <h1>{vehicles?.length === 0 ? 'Have no vehicles' : 'Vehicles'}</h1>
      <MainContainer columnQuantity='1'>

        {vehicles?.map((vehicle: IVehicle, index: number) =>
          <VehicleCard
            key={index}
            make={vehicle.make}
            model={vehicle.model}
            bodyType={vehicle.bodyType}
            fuelType={vehicle.fuelType}
            enginePowerPS={vehicle.enginePowerPS}
            enginePowerKW={vehicle.enginePowerKW}
            engineCapacity={vehicle.engineCapacity}
          />)}
      </MainContainer>
    </>
  )
}

export default Vehicles;