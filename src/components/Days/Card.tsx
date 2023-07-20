import React from 'react';
import style from './Days.module.scss';
import { WeatherDay } from '../../store/types/types';
import { WeatherService } from '../../services/WeatherService';
import { DateServices } from '../../services/DateServices';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { setWeatherDayActive } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {
  day: WeatherDay,
  dayActive: string,
  index: number
}

function Card({day, dayActive, index}: Props) {

  const dispatch = useCustomDispatch();
  const { weatherDayActive } = useCustomSelector(selectCurrentWeatherData);

  return (
    <div 
      className={weatherDayActive.dt_txt === day.dt_txt ? style.card + ' ' + style.cardActive : style.card}
      onClick={() => dispatch(setWeatherDayActive(day))}  
    > 
      <div className={style.day_time}>{dayActive === DateServices.currentDate() && index === 0 ? 'Сейчас' : DateServices.outputFormattedTime(day.dt_txt)}</div>
      <div className={style.day_date}>{DateServices.outputFormattedDate(day.dt_txt)}</div>
      <div className={style.img}>
        <img className={style.iconImg} src={process.env.REACT_APP_API_URL_IMG_WEATHER + `${day.weather[0].icon}@2x.png`} alt='Иконка погоды'/>
      </div>
      <div className={style.temp_day}>{Math.floor(day.main.temp_max) + '°'}</div>
      <div className={style.temp_night}>{Math.floor(day.main.temp_min) + '°'}</div>
      <div className={style.info}>{WeatherService.indicatorRain(day.weather[0].id)}</div>
    </div>
  )
}

export default Card;