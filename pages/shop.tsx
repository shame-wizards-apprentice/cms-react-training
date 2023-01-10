import { Fragment } from 'react';
import Header from '../Components/Pages/Header';
import Footer from '../Components/Pages/Footer';
import styles from '../styles/Home.module.css';

export default function Shop() {
    return(
        <Fragment>
            <Header />
            <section className={styles['intro-section']}>
                <h1>Are you lost?
                <br /> 
                <a href="/">Go home</a>, weirdo.</h1>
            </section>
            <Footer />
        </Fragment>
    )
}