import React from 'react';
import { Item } from '../ThisDayInfo/ThisDayInfo';
import style from './ThisDayItem.module.scss';
import IndicatorSwgSelector from '../../assets/images/icons/indicators/IndicatorSwgSelector';

type Props = {
  item: Item
}

function ThisDayItem({ item }: Props) {
  
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSwgSelector id={item.icon_id}/>
      </div>
      <div className={style.indicator_name}>{item.name}</div>
      <div className={style.indicator_value}>{item.value}</div>
    </div>
  )
}

export default ThisDayItem;