import { AxiosResponse } from "axios";
import { Weather, WeatherDay } from "../store/types/types";
import api from "../axios";
import { DateServices } from "./DateServices";

export class WeatherService {
  static getCurrentWeather(city: string):Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/forecast?q=${city}`);
  }

  static indicatorRain = (rain: number) => {
    switch (rain) {
      case 500:
        return 'Небольшой дождь';
      case 501:
        return 'Умеренный дождь';
      case 502:
        return 'дождь';
      case 503:
        return 'Сильный дождь';
      case 504:
        return 'Очень сильный дождь';
      case 511:
        return 'Ледяной дождь';
      case 520:
        return 'Ливень';
      case 521:
        return 'Тропический дождь';
      case 522:
        return 'Сильный ливень';
      case 531:
        return 'Порывистый дождь';
      default:
        return 'Без осадков';
    }
  }

  static windDeg = (deg: number) => {
    if ((deg >= 326.25 && deg <= 360) || ( deg >= 0 && deg < 33.75)) {
      return 'cеверный';
    }
    if (deg >= 33.75 && deg < 78.75) {
      return 'cеверо-восточный';
    }
    if (deg >= 78.75 && deg < 123.75) {
      return 'восточный';
    }
    if (deg >= 123.75 && deg < 168.75) {
      return 'юго-восточный';
    }
    if (deg >= 168.75 && deg < 213.75) {
      return 'южный';
    }
    if (deg >= 213.75 && deg < 258.75) {
      return 'юго-западный';
    }
    if (deg >= 258.75 && deg < 303.75) {
      return 'западный';
    }
    if (deg >= 303.75 && deg < 326.25) {
      return 'cеверо-западный';
    } 
  }

  static windSpeed = (speed: number) => {
    if (speed >= 0 && speed < 2) {
      return 'штиль';
    }
    if (speed >= 2 && speed < 5) {
      return 'слабый ветер';
    }
    if (speed >= 5 && speed < 10) {
      return 'умеренный ветер';
    }
    if (speed >= 10 && speed < 18) {
      return 'сильный ветер';
    }
    if (speed >= 18 && speed < 30) {
      return 'штормовой ветер';
    } 
    if (speed >= 30) {
      return 'ураган';
    }
  }

  static pressure = (pressure: number) => Math.round(pressure * 0.750063755419211);

  static pressureNormal = (pressure: number) => {
    if (pressure < 750) {
      return 'пониженное';
    }
    if (pressure > 765) {
      return 'повышенное';
    }
    return 'нормальное';
  }

  static weatherDaysResult = (weatherDays: WeatherDay[], dayActive: string) => {
    return weatherDays.filter(day => DateServices.outputFormattedDate(day.dt_txt) === dayActive);
  }
}