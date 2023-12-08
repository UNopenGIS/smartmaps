import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Head>
        <meta property="og:title" content="UN Smart Maps" />
        <meta property="og:description" content="Keep web maps open for a better world" />
      </Head>
      <div className="container">
        <h1 className="hero__title">
          <Translate>
            UN Smart Maps
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            Keep web maps open for a better world
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--tertiary button--lg"
            to="/get-involved/join">
              <Translate>
                Join UN Smart Maps
              </Translate>
           </Link>
          <Link
            className="button button--secondary button--lg"
            to="/events">
              <Translate>
                See upcoming events
              </Translate>
           </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
