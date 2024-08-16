import Icon from '../Icon/Icon';
import css from './VehicleEquipment.module.css';

export const VehicleEquipment = () => {
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
              name=""
              id="ac"
              style={{ display: 'none' }}
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
              name=""
              id="transmission"
              style={{ display: 'none' }}
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
              name=""
              id="kitchen"
              style={{ display: 'none' }}
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
              name=""
              id="tv"
              style={{ display: 'none' }}
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
              name=""
              id="shower"
              style={{ display: 'none' }}
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
