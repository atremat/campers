import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <ul className={css.list}>
          <li className={css.item}>+ Wide Selection</li>
          <li className={css.item}>+ Easy Booking</li>
          <li className={css.item}>+ Customizable Options</li>
        </ul>
      </section>

      <div className={css.contaier}>
        <h1>Campersland</h1>
        <p>
          We provide camper van rental services in Ukraine. Here you can choose
          the camper of you dreams. Go to the catalog to choose one. Welcome to
          Your Adventure on Wheels Discover the freedom of the open road with
          our premium camper van rentals. Whether you&apos;re planning a weekend
          getaway or an epic cross-country journey, our well-equipped campers
          are your perfect home away from home. Explore breathtaking landscapes,
          experience the thrill of outdoor living, and create unforgettable
          memories with loved ones—all at your own pace.
        </p>
      </div>
    </main>
  );
};

export default HomePage;
