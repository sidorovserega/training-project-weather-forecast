import React from 'react';
import style from './Days.module.scss';
import { DateServices } from '../../services/DateServices';

interface Props {
  totalDays: string[],
  dayActive: string,
  changeDayActive: (dayDate: string) => void
}

function Tabs({totalDays, dayActive, changeDayActive}: Props) {

  return (
    <div className={style.tabs}>
      {
        totalDays.map((dayDate, index) => 
          <div 
            className={dayDate ===  dayActive? style.tab + ' ' + style.tabActive : style.tab }
            key={dayDate} 
            onClick={() => changeDayActive(dayDate)}  
          >
            {index === 0 ? 'Сегодня' : DateServices.weekDayCalculate(dayDate)}
          </div>  
        )
      }
    </div>
  )
}

export default Tabs;