import React from 'react';
import style from './ThisDayInfo.module.scss';
import Cloud from '../../assets/images/сloud.png';
import ThisDayItem from '../ThisDayItem/ThisDayItem';
import { WeatherService } from '../../services/WeatherService';
import { selectCurrentWeatherData } from '../../store/selectors';
import { useCustomSelector } from '../../hooks/store';

interface Props {

}

export interface Item {
  icon_id: string,
  name: string,
  value: string
}

function ThisDayInfo({}: Props) {

  const { weatherDayActive } = useCustomSelector(selectCurrentWeatherData);

  const pressure = WeatherService.pressure(weatherDayActive.main.pressure);
  
  const items = [
  {
    icon_id: 'temp',
    name: 'Температура',
    value: `${Math.floor(weatherDayActive.main.temp)}° - ощущается как ${Math.floor(weatherDayActive.main.feels_like)}°`
  },
  {
    icon_id: 'pressure',
    name: 'Давление',
    value: `${pressure} мм ртутного столба - ${WeatherService.pressureNormal(pressure)}`
  },
  {
    icon_id: 'precipitation',
    name: 'Осадки',
    value: WeatherService.indicatorRain(weatherDayActive.weather[0].id)
  },
  {
    icon_id: 'wind',
    name: 'Ветер',
    value: `${weatherDayActive.wind.speed} м/с ${WeatherService.windDeg(weatherDayActive.wind.deg)} - ${WeatherService.windSpeed(weatherDayActive.wind.speed)}`
  }
];

  return (
    <div className={style.day_info_block}>
      <div className={style.this_day_info_items}>
        {items.map((item: Item) => 
          <ThisDayItem key={item.icon_id} item={item} />
        )}
      </div>
      <img src={Cloud} alt='Изображение континента' className={style.cloud_img}/>
    </div>
  )
}

export default ThisDayInfo;