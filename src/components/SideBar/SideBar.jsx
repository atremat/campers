import { useId } from 'react';
import css from './SideBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/filters/selectors';
import { changeFilterLocation } from '../../redux/filters/slice';
import { VehicleEquipment } from '../VehicleEquipment/VehicleEquipment';
import { VehicleType } from '../VehicleType/VehicleType';
import Icon from '../Icon/Icon';

export const SideBar = () => {
  const locationValue = useSelector(selectLocation);
  const dispatch = useDispatch();
  const locationId = useId();

  const handleChangeLocation = e => {
    dispatch(changeFilterLocation(e.target.value));
  };

  return (
    <section className={css.sidebar}>
      <div className={css.locationWrapper}>
        <label htmlFor={locationId} className={css.locationLabel}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <input
            className={css.location}
            placeholder="City"
            type="text"
            name="location"
            id={locationId}
            value={locationValue}
            onChange={handleChangeLocation}
          />
          <Icon id="geo" width={18} height={20} className={css.locationIcon} />
        </div>
      </div>

      <p className={css.text}>Filters</p>

      <VehicleEquipment />

      <VehicleType />
    </section>
  );
};
