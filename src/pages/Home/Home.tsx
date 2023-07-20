import React, { useEffect } from 'react';
import style from './Home.module.scss';
import ThisDay from '../../components/ThisDay/ThisDay';
import ThisDayInfo from '../../components/ThisDayInfo/ThisDayInfo';
import Days from '../../components/Days/Days';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';

type Props = {}

function Home({}: Props) {

  const dispatch = useCustomDispatch();

  const { weather, city } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    
    dispatch(fetchCurrentWeather(city.nameActive));
  }, [city.nameActive]);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather} city={city}/>
        <ThisDayInfo />
      </div>
      <Days weather={weather}/>
    </div>
  )
}

export default Home;