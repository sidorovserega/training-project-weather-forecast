import React from 'react';
import style from './Popup.module.scss';
import ThisDayItem from '../ThisDayItem/ThisDayItem';
import { Item } from '../ThisDayInfo/ThisDayInfo';
import GlobalSWGSelector from '../../assets/images/icons/global/GlobalSwgSelector';
import GlobalSwgSelector from '../../assets/images/icons/global/GlobalSwgSelector';

interface Props {
  
}

function Popup({ }: Props) {

  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°'
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное'
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков'
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер'
    }
  ];

  return (
    <div className={style.popup}>
      <div className={style.day_info_block}>
        
        <div className={style.this_day_info}>
          <div className={style.this_temp}>12°</div>
          <div className={style.this_name}>Среда</div>
          <div className={style.this_img}>
            <GlobalSwgSelector id='sun' />
          </div>
          <div className={style.this_time}>
            Время: <span>21:54</span>
          </div>
          <div className={style.this_city}>
            Город: <span>Пенза</span>
          </div>
        </div>

        <div className={style.this_day_info_items}>
          {items.map((item: Item) => 
            <ThisDayItem key={item.icon_id} item={item} />
          )}
        </div>

        <div className={style.close}>
          <GlobalSWGSelector id='close'/>
        </div>
        
      </div>
    </div>
  );
}

export default Popup;