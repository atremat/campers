import css from './FeaturesOptions.module.css';
import Icon from '../Icon/Icon';

export const FeaturesOptions = ({ item }) => {
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

      {item.details.airConditioner && item.details.airConditioner != 0 && (
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

      {item.details.kitchen && item.details.kitchen != 0 && (
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
        beds
      </li>

      {item.details.airConditioner && item.details.airConditioner != 0 && (
        <li className={css.item}>
          <Icon
            id="conditioner"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          {item.details.airConditioner} air conditioner
        </li>
      )}

      {item.details.CD && item.details.CD != 0 && (
        <li className={css.item}>
          <Icon
            id="cd"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          CD
        </li>
      )}

      {item.details.radio && item.details.radio != 0 && (
        <li className={css.item}>
          <Icon
            id="radio"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Radio
        </li>
      )}

      {item.details.hob && item.details.hob != 0 && (
        <li className={css.item}>
          <Icon
            id="hob"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          {item.details.hob} hob
        </li>
      )}

      {item.details.freezer && item.details.freezer != 0 && (
        <li className={css.item}>
          <Icon
            id="fridge"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Freezer
        </li>
      )}

      {item.details.toilet && item.details.toilet != 0 && (
        <li className={css.item}>
          <Icon
            id="toilet"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Toilet
        </li>
      )}

      {item.details.shower && item.details.shower != 0 && (
        <li className={css.item}>
          <Icon
            id="shower"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Shower
        </li>
      )}

      {item.details.gas && item.details.gas != 0 && (
        <li className={css.item}>
          <Icon
            id="gas"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Gas
        </li>
      )}

      {item.details.water && (
        <li className={css.item}>
          <Icon
            id="water"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Water
        </li>
      )}

      {item.details.microwave && item.details.microwave != 0 && (
        <li className={css.item}>
          <Icon
            id="microwave"
            width={20}
            height={20}
            className={css.icon}
            fillColor={'#101828'}
          />
          Microwave
        </li>
      )}
    </ul>
  );
};
