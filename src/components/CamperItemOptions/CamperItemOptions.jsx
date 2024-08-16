import Icon from '../Icon/Icon';
import css from './CamperItemOptions.module.css';

export const CamperItemOptions = ({ item }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Icon
          id="adults"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        {item.adults} adults
      </li>
      <li className={css.item}>
        <Icon
          id="transmission"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        {item.transmission.charAt(0).toUpperCase() +
          item.transmission.slice(1).toLowerCase()}
      </li>
      <li className={css.item}>
        <Icon
          id="fuel"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        {item.engine.charAt(0).toUpperCase() +
          item.engine.slice(1).toLowerCase()}
      </li>
      {item.details.kitchen && (
        <li className={css.item}>
          <Icon
            id="kitchen"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Kitchen
        </li>
      )}
      <li className={css.item}>
        <Icon
          id="bed"
          width={20}
          height={20}
          className={css.icon}
          fillColor={'#101828'}
        />
        {item.details.beds} beds
      </li>
      {item.details.airConditioner && (
        <li className={css.item}>
          <Icon
            id="ac"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          AC
        </li>
      )}
    </ul>
  );
};
