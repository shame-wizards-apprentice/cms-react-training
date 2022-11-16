import { Fragment } from 'react';
import Grid from '../Components/Grid';


export default function Home() {
  return (
    <Fragment>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Comic Closet</h1>
        </div>
      </section>
      <section className="intro-section">
        <h2 className="title">
            <span className="title-flag">New Comics!</span>
          Coming Out Daily
        </h2>
        <p className="intro">
          Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </section>
      <section className="comics-section">
          <Grid />
      </section>
    </Fragment>
  )
}
