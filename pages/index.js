import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Adham Ehab</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Hi there!</h1>
          <p className={styles.paragraph}>
            I am a Senior Staff Software Engineer at <a href="https://cision.com" target="_blank" rel="noopener noreferrer" style={{color: 'blue', textDecoration: 'underline'}} >Cision</a>, where I work on building large-scale Data and ML Platform.
          </p>
          <p className={styles.paragraph}>
            Previously, I led the engineering team at <a href="https://factmata.com" target="_blank" rel="noopener noreferrer">style={{color: 'blue', textDecoration: 'underline'}} Factmata</a>, an ML startup fighting fake-news and misinformation where we got acquired by Cision.
          </p>
          <p className={styles.paragraph}>
            I was also part of the early team at <a href="https://arqamfc.com" target="_blank" rel="noopener noreferrer">style={{color: 'blue', textDecoration: 'underline'}} Arqam</a> (Acquired by) <a href="https://statsbomb.com" target="_blank" rel="noopener noreferrer">style={{color: 'blue', textDecoration: 'underline'}} Statsbomb</a> where we worked on building the most advanced sports analytics platform in the world.
            Before that, I worked at different startups and software firms in the MENA region, where I was mainly focused on scaling data systems.
          </p>
          <p className={styles.paragraph}>
            You can reach out to me anytime on <a href="https://twitter.com/_adhameh" target="_blank" rel="noopener noreferrer">style={{color: 'blue', textDecoration: 'underline'}} Twitter</a> or <a href="mailto:adham.ehab@hey.com">Email</a>.
          </p>
        </div >
      </main>
    </div>
  );
};

export default Home;
