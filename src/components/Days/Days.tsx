import React from 'react';
import style from './Days.module.scss';
import Card from './Card';
import Tabs from './Tabs';
import { Weather, WeatherDay } from '../../store/types/types';
import { WeatherService } from '../../services/WeatherService';
import { useCurrentContext } from '../../hooks/useCurrentContext';
import { DateServices } from '../../services/DateServices';

interface Props {
  weather: Weather
}

function Days({ weather }: Props) {
  
  //вызов пользовательского хука для доступа к контексту
  const context = useCurrentContext();

  const totalDays = DateServices.definitionListDates(weather.list);

  return (
    <>
      <Tabs 
        totalDays={totalDays} 
        dayActive={context.dayActive} 
        changeDayActive={context.changeDayActive}
      />
      <div className={style.days}>
        {
          WeatherService.weatherDaysResult(weather.list, context.dayActive).map(( day: WeatherDay, index: number ) => 
            <Card 
              day={day} 
              key={index} 
              dayActive={context.dayActive}
              index={index}
            />  
          )
        }
      </div>
    </>
  )
}

export default Days;