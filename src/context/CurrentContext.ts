import { createContext } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark' 
}

interface Props {
  theme: Theme,
  changeTheme: (theme: Theme) => void,
  dayActive: string,
  changeDayActive: (dayDate: string) => void
}

export const CurrentContext = createContext<Props>({
  theme: Theme.LIGHT,
  changeTheme: (theme: Theme) => {},
  dayActive: '',
  changeDayActive: (dayDate: string) => {}
});