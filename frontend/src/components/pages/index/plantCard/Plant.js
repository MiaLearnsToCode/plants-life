import React from 'react'
import StyledPlant from '../../../styled/StyledPlant'
import { waterAlert } from '../../../../lib/waterAlert'

const Plant = ({plant}) => {
  const waterAlarm = waterAlert(plant.last_watered, plant.water_frequency)
  return (
    <StyledPlant data-testid='plantContainer'>
      <p>{plant.nickname}</p>
      {
        waterAlarm &&
        <p data-testid='plantEmoji'>
          {
            waterAlarm === 'ok' && '🌿' 
          }
          {
            waterAlarm === 'water' && '🚰' 
          }
          {
            waterAlarm === 'danger' && '❗️' 
          }
        </p>
      }
    </StyledPlant>
  )
}

export default Plant