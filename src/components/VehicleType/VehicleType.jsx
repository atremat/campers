import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './VehicleType.module.css';
import { useState } from 'react';

export const VehicleType = () => {
  const [vehicleType, setVehicleType] = useState('camperWindow');

  const handleChange = e => {
    setVehicleType(e.target.value);
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle type</h4>

      <ul className={css.list}>
        <li
          className={css.item}
          style={{
            border:
              vehicleType === 'camperWindow'
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
              value="camperWindow"
              checked={vehicleType === 'camperWindow'}
              id="camperWindow"
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
              vehicleType === 'camperDoor'
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
              value="camperDoor"
              checked={vehicleType === 'camperDoor'}
              id="camperDoor"
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
