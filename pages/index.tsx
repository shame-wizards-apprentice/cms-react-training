import { Fragment } from 'react';
import styles from '../styles/Home.module.css';
import Grid from '../Components/Comic/Grid';
import FavoritesGrid from '../Components/Comic/FavoritesGrid';
import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';


export default function Home() {
  return (
    <Fragment>
      <Header />
      <section className={styles['intro-section']}>
        <span className={styles['title-flag']}>
          <p>New Comics!</p>
        </span>
        <h2 className={styles['title']}>
          Coming Out Daily
        </h2>
        <p className={styles['intro']}>
          Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </section>
      <section className={styles['comic-section']}>
        <div className={styles['filter-results']}>
          <Grid />
        </div>
        <FavoritesGrid mobileGrid={false} showMobileGrid={false} />
      </section>
      <Footer />
    </Fragment>
  )
}
