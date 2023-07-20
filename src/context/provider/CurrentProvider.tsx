import {ReactNode, useState} from 'react';
import { Theme, CurrentContext } from '../CurrentContext';
import { changeCssRootVariables } from '../../services/changeCssRootVariables';
import { storage } from '../../services/storage';
import { DateServices } from '../../services/DateServices';

interface Props {
  children: ReactNode
}

export const CurrentProvider = ({children, ...props}:Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') as Theme.LIGHT);
  const [dayActive, setDayActive] = useState<string>(DateServices.currentDate());

  //необходимо для изменение темы при инициализации проекта,
  //т.к. функция changeTheme еще не вызывается
  changeCssRootVariables(theme);

  const changeTheme = (theme: Theme) => {
    //изменение темы в localStorage
    storage.setItem('theme', theme);
    //изменение в контексте
    setTheme(theme);
    //изменение темы по css переменным
    changeCssRootVariables(theme);
  }

  const changeDayActive = (dayDate: string) => {
    setDayActive(dayDate)
  }

  return (
    <CurrentContext.Provider 
    value={{
      theme,
      changeTheme,
      dayActive,
      changeDayActive
    }}
    {...props}>
      {children}
    </CurrentContext.Provider>
  )
}