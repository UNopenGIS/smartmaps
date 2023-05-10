import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (<Translate>Open Source</Translate>),
    Svg: require('@site/static/img/undraw_connected_world.svg').default,
    description: (
      <>
        <Translate>
           All tools and data created from DW7 projects are open source.
        </Translate>
      </>
    ),
    link: "./resources/"
  },
  {
    title: (<Translate>Open practice</Translate>),
    Svg: require('@site/static/img/undraw_world_looking.svg').default,
    description: (
      <>
        <Translate>
            The UN Smart Maps Group is a community of practice. We share best practices and lessons learned.
        </Translate>
      </>
    ),
    link: "./use-cases/",
  },
  {
    title: (<Translate>Open community</Translate>),
    Svg: require('@site/static/img/undraw_world_map.svg').default,
    description: (
      <>
      <Translate>
        Anyone can join the UN Smart Maps Group. We welcome contributions from anyone.
      </Translate>
      </>
    ),
    link: "./get-involved/",
  },
];

function Feature({Svg, title, description,link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>
            {title}
          </h3>
        <p>
            {description}
          </p>
        
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />

          ))}
        </div>
      </div>
    </section>
  );
}
