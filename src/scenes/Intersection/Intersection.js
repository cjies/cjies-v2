import React from 'react';

import styles from './intersection.scss';
import { Section } from 'components';

import CoverBackground from 'static/img/intersection-bg.jpg';

class Intersection extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    const parralaxEffect = true;
    const backgroundOverlay = true;
    return (
      <Section
        name="INTERSECTION"
        background="dark"
        backgroundImage={CoverBackground}
        backgroundBlur={0}
        backgroundOverlay={backgroundOverlay}
        parallax={parralaxEffect}
        styles={styles}>
        <h1 className={styles.text}>Hello Taipei.</h1>
      </Section>
    );
  }
}

export default Intersection;