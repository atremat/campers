import clsx from 'clsx';
import css from './PopUpAddInfo.module.css';
import { useState } from 'react';
import PopUpFeatures from '../PopUpFeatures/PopUpFeatures';
import { PopUpReviews } from '../PopUpReviews/PopUpReviews';

export const PopUpAddInfo = ({ item }) => {
  const [chosenOption, setChosenOption] = useState('features');

  const handleChange = e => {
    setChosenOption(e.target.value);
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li
          className={css.item}
          style={{
            borderBottom:
              chosenOption === 'features' ? '5px solid #E44848' : 'none',
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
              name="option"
              value="features"
              checked={chosenOption === 'features'}
              id="features"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            Features
          </label>
        </li>

        <li
          className={css.item}
          style={{
            borderBottom:
              chosenOption === 'reviews' ? '5px solid #E44848' : 'none',
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
              name="option"
              value="reviews"
              checked={chosenOption === 'reviews'}
              id="reviews"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            Reviews
          </label>
        </li>
      </ul>

      {chosenOption === 'features' ? (
        <PopUpFeatures item={item} />
      ) : (
        <PopUpReviews item={item} />
      )}
    </div>
  );
};
