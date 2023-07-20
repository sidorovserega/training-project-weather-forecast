import style from './Header.module.scss';
import GlobalSwgSelector from '../../assets/images/icons/global/GlobalSwgSelector';
import Select from 'react-select';
import { useCurrentContext } from '../../hooks/useCurrentContext';
import { Theme } from '../../context/CurrentContext';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { setCityActive } from '../../store/thunks/fetchCurrentWeather';
import { storage } from '../../services/storage';
import { DateServices } from '../../services/DateServices';

type Props = {}

function Header({}: Props) {

  //вызов пользовательского хука для доступа к контексту
  const context = useCurrentContext();

  const dispatch = useCustomDispatch();

  const { city } = useCustomSelector(selectCurrentWeatherData);

  //настройки стилей react-select
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: context.theme===Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      border: 'none',
      zIndex:'101',
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: context.theme===Theme.DARK ? '#fff' : '#000'
    })
  };

  //функция смены темы
  const changeTheme = () => {
    context.changeTheme(context.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }
 
  //функция смены выбранного города через react-select
  const handleChangeCity = (option: {label: string, value: string} | null) => {
    if (option) {
      storage.setItem('city', option.value);
      dispatch(setCityActive(option.value));
      context.changeDayActive(DateServices.currentDate());
    }
  }
  console.log(city.nameActive);
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSwgSelector id='header-logo' />
        </div>
        <div className={style.title}>
          React weather
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
          <GlobalSwgSelector id='change-theme' />
        </div>
        <Select 
          defaultValue={city.options.find(item => item.value === city.nameActive)} 
          styles={colorStyles} 
          className={style.selectHeader} 
          options={city.options} 
          onChange={handleChangeCity}
        />
      </div>
    </header>
  )
}

export default Header;