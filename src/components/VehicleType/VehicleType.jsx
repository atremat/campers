import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './VehicleType.module.css';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVehicleType } from '../../redux/filters/selectors';
import { changeVehicleType } from '../../redux/filters/slice.js';

export const VehicleType = () => {
  const dispatch = useDispatch();
  // const [vehicleType, setVehicleType] = useState('camperWindow');
  const vehicleType = useSelector(selectVehicleType);
  const handleChange = e => {
    dispatch(changeVehicleType(e.target.value));
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle type</h4>

      <ul className={css.list}>
        <li
          className={css.item}
          style={{
            border:
              vehicleType === 'panelTruck'
                ? '1px solid #E44848'
                : '1px solid rgba(16, 24, 40, 0.2)',
          }}
        >
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="vehicleType"
              value="panelTruck"
              checked={vehicleType === 'panelTruck'}
              id="panelTruck"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <Icon
              id="camper-window"
              width={40}
              height={28}
              className={css.icon}
              fillColor={'#101828'}
            />
            Van
          </label>
        </li>

        <li
          className={css.item}
          style={{
            border:
              vehicleType === 'fullyIntegrated'
                ? '1px solid #E44848'
                : '1px solid rgba(16, 24, 40, 0.2)',
          }}
        >
          <label
            className={clsx(css.label, css.door)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="vehicleType"
              value="fullyIntegrated"
              checked={vehicleType === 'fullyIntegrated'}
              id="fullyIntegrated"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <Icon
              id="camper-door"
              width={40}
              height={28}
              className={css.icon}
              fillColor={'#101828'}
            />
            Fully Integrated
          </label>
        </li>

        <li
          className={css.item}
          style={{
            border:
              vehicleType === 'alcove'
                ? '1px solid #E44848'
                : '1px solid rgba(16, 24, 40, 0.2)',
          }}
        >
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="radio"
              name="vehicleType"
              value="alcove"
              checked={vehicleType === 'alcove'}
              id="alcove"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <Icon
              id="camper-full"
              width={40}
              height={28}
              className={css.icon}
              fillColor={'#101828'}
            />
            Alcove
          </label>
        </li>
      </ul>
    </div>
  );
};
