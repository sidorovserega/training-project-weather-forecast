import { WeatherService } from "../../services/WeatherService";
import { storage } from "../../services/storage";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";
import { City, WeatherDay } from "../types/types";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather());

    const res = await WeatherService.getCurrentWeather(payload);
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      dispatch(currentWeatherSlice.actions.setWeatherDay(res.data.list[0]));
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
    }
  }
  catch (error) {
    console.log(error);
  }
}

export const setWeatherDayActive = (payload: WeatherDay) => (dispatch: AppDispatch) => {
  dispatch(currentWeatherSlice.actions.setWeatherDay(payload));
}

export const setCityActive = (payload: string) => (dispatch: AppDispatch) => {
  dispatch(currentWeatherSlice.actions.setCity(payload));
}