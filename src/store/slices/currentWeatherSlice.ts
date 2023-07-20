import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { City, Weather, WeatherDay } from '../types/types';
import { AxiosResponse } from 'axios';
import { storage } from '../../services/storage';

type Response = {
  status: number,
  message: string
};

type CurrentWeather = {
  city: City,
  weather: Weather,
  isLoading: boolean,
  response: Response
};

const options = [
  { value: 'penza', label: 'Пенза' },
  { value: 'moscow', label: 'Москва' }
]

const initialState = {
  city: {
    nameActive: storage.getItem('city'),
    options: options
  },
  weather: {
    city: {
      name: ''
    },
    list: [ 
      {
        main: 
          {
            temp: 0,
            temp_min: 0,
            temp_max: 0,
            feels_like: 0,
            pressure: 0
          },
        wind: {
          speed: 0,
          deg: 0
        },
        weather: [
          {
            id: 0,
            icon: '',
          }
        ],
        dt_txt: ''
      } 
    ] 
  },
  weatherDayActive: {
    main: 
    {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      feels_like: 0,
      pressure: 0
    },
    wind: {
      speed: 0,
      deg: 0
    },
    weather: [
      {
        id: 0,
        icon: '',
      }
    ],
    dt_txt: ''
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    //изменение статуса загрузки
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    
    //успешная загрузка данных
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.weather = action.payload.data
      state.isLoading = false;
      //сведения для пользователей об успехе операции
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },

    //загрузка данных с ошибкой
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      //сведения для пользователей об ошибке 
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    //сохранение в состоянии выбраной карточки с погодой
    setWeatherDay(state, action: PayloadAction<WeatherDay>) {
      state.weatherDayActive = action.payload;
    },

    //сохранение в состоянии выбранного города
    setCity(state, action: PayloadAction<string>) {
      state.city.nameActive = action.payload;
    }
  }
});

export default currentWeatherSlice.reducer;