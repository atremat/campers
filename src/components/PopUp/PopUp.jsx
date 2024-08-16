import Icon from '../Icon/Icon';
import ModalWindow from '../ModalWindow/ModalWindow';
import css from './PopUp.module.css';

export const PopUp = ({ modalIsOpen, onCloseModal, item }) => {
  return (
    <ModalWindow modalIsOpen={modalIsOpen} onCloseModal={onCloseModal}>
      <div className={css.container}>
        <h3 className={css.name}>{item.name}</h3>

        <div className={css.ratingWrapper}>
          <Icon
            id="star-empty"
            className={css.star}
            width={16}
            height={16}
            fillColor="#ffc531"
          />

          <p
            className={css.rating}
          >{`${item.rating} (${item.reviews.length} Reviews)`}</p>
          <p className={location}>
            <Icon
              id="geo"
              width={16}
              height={16}
              className={css.locationIcon}
            />
            {item.location}
          </p>
        </div>

        <h3 className={css.price}>€ {item.price.toFixed(2)}</h3>

        <ul className={css.list}>
          {item.gallery.map((image, idx) => {
            return (
              <li key={idx} className={css.item}>
                <img src={image} className={css.photo} />
              </li>
            );
          })}
        </ul>

        <p className={css.aboutText}>{item.description}</p>
      </div>
    </ModalWindow>
  );
};
