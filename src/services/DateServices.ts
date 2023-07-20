import moment from "moment";
import { WeatherDay } from "../store/types/types";

export class DateServices {

  static currentDate = () => {
    return new Date().toLocaleDateString("ru-RU");
  }

  static weekDayCalculate = (date: string) => { 

    // const currentTimeFotmatted = new Date().toLocaleDateString("ru-RU").toString().split('.').reverse().join('-');
    if (date === this.currentDate()) {
      return 'Сегодня';
    }

    switch (new Date(date.split('.').reverse().join('-')).getDay()) {
      case 0: 
        return 'Воскресенье';
      case 1: 
        return 'Понедельник';
      case 2: 
        return 'Вторник';
      case 3: 
        return 'Среда';
      case 4: 
        return 'Четверг';
      case 5: 
        return 'Пятница';
      case 6:
        return 'Суббота';
    }
  }

  static outputFormattedDate = (dateTime: string) => {
    return dateTime.split(' ')[0].split('-').reverse().join('.'); 
  }

  static returnCurrentTime = () => {
    return moment().format('HH:mm');
  }

  static outputFormattedTime = (dateTime: string) => {
    
    return dateTime.split(' ')[1].slice(0, 5);
  }

  static definitionListDates = (listDays: WeatherDay[]) => {
    
    const resultListDates: string[] = [];
    
    listDays.map((day: WeatherDay) => {
      const dateFormatted = DateServices.outputFormattedDate(day.dt_txt);
      if (resultListDates.indexOf(dateFormatted) === -1) {
        resultListDates.push(dateFormatted);
      }
    });
    return resultListDates;
  }
  
}