import React from 'react';
import style from './ThisDay.module.scss';
import { City, Weather } from '../../store/types/types';
import { DateServices } from '../../services/DateServices';

interface Props {
  weather: Weather,
  city: City
}

function ThisDay({weather, city}: Props) {

  return (
    <div className={style.day_block}>
      <div className={style.top_block}>
        <div className={style.top_block_wrapper}>
          <div className={style.this_temp}>{Math.floor(weather.list[0].main.temp)}</div>
          <div className={style.this_day_day}>Сейчас</div>
        </div>
        <img className={style.iconImg} src={process.env.REACT_APP_API_URL_IMG_WEATHER + `${weather.list[0].weather[0].icon}@2x.png`} alt='Иконка погоды'/>
      </div>
      <div className={style.bottom_block}>
        <div className={style.this_time}>
          Время: <span>{DateServices.returnCurrentTime()}</span>
        </div>
        <div className={style.this_city}>
          Город: <span>{city.options.find(item => item.value === city.nameActive)?.label}</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay;