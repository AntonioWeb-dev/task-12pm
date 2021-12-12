import React from 'react';
import IVehicles from '../../interface/vehicles';
import { CardContainter } from './styled';

const VehicleCard: React.FC<IVehicles> = (vehicle) => (
  <CardContainter>
    <h3>{vehicle.model}</h3>
    <span>Make - {vehicle.make}</span>
    <p>{vehicle.fuelType}, {vehicle.bodyType}</p>
    <ul>
      <li>enginePowerPS:<p>{vehicle.enginePowerPS}</p></li>
      <li>enginePowerKW:<p>{vehicle.enginePowerKW}</p></li>
      <li>engineCapacity:<p>{vehicle.engineCapacity}</p></li>
    </ul>
  </CardContainter>
)

export default VehicleCard;