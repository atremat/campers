import Icon from '../Icon/Icon';
import css from './VehicleEquipment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAC,
  selectAutomatic,
  selectKitchen,
  selectShower,
  selectTV,
} from '../../redux/filters/selectors';
import {
  toggleAC,
  toggleKitchen,
  toggleShower,
  toggleTransmission,
  toggleTV,
} from '../../redux/filters/slice';

export const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const isAC = useSelector(selectAC);
  const isAutomatic = useSelector(selectAutomatic);
  const isKitchen = useSelector(selectKitchen);
  const isTV = useSelector(selectTV);
  const isShower = useSelector(selectShower);

  return (
    <div className={css.container}>
      <h4 className={css.title}>Vehicle equipment</h4>

      <ul className={css.list}>
        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="ac"
              checked={isAC}
              onChange={() => dispatch(toggleAC())}
              id="ac"
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <Icon
              id="ac"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            AC
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="transmission"
              id="transmission"
              checked={isAutomatic}
              onChange={() => dispatch(toggleTransmission())}
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <Icon
              id="transmission"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Automatic
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="kitchen"
              id="kitchen"
              checked={isKitchen}
              onChange={() => dispatch(toggleKitchen())}
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <Icon
              id="kitchen"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Kitchen
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="tv"
              id="tv"
              checked={isTV}
              onChange={() => dispatch(toggleTV())}
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <Icon
              id="tv"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            TV
          </label>
        </li>

        <li className={css.item}>
          <label
            className={css.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="shower"
              id="shower"
              checked={isShower}
              onChange={() => dispatch(toggleShower())}
              style={{ display: 'none' }}
              className={css.inputCheckbox}
            />
            <Icon
              id="shower"
              width={32}
              height={32}
              className={css.icon}
              fillColor={'#101828'}
            />
            Shower/WC
          </label>
        </li>
      </ul>
    </div>
  );
};
