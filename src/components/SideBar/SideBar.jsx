import { useId } from 'react';
import css from './SideBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../redux/filters/selectors';
import { changeFilterLocation } from '../../redux/filters/slice';
import { VehicleEquipment } from '../VehicleEquipment/VehicleEquipment';

export const SideBar = () => {
  const locationValue = useSelector(selectLocation);
  const dispatch = useDispatch();
  const locationId = useId();

  const handleChangeLocation = e => {
    dispatch(changeFilterLocation(e.target.value));
  };

  return (
    <div className={css.sidebar}>
      <div className={css.locationWrapper}>
        <label htmlFor={locationId} className={css.locationLabel}>
          Location
        </label>
        <input
          className={css.location}
          placeholder="Kyiv, Ukraine for example"
          type="text"
          name="location"
          id={locationId}
          value={locationValue}
          onChange={handleChangeLocation}
        />
      </div>

      <p className={css.text}>Filters</p>

      <VehicleEquipment />
    </div>
  );
};
