import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  console.log(lastUpdate);
  if (!confirmed) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}> 
          <Card  className={[styles.fullHeight, styles.card, styles.infected].join(' ')}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <CountUp
                  separator=","
                  start={0}
                  end={confirmed.value}
                  duration={3}
                ></CountUp>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Total number of infected
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}> 
          <Card  className={[styles.fullHeight, styles.card, styles.recovered].join(' ')}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <CountUp
                  separator=","
                  start={0}
                  end={recovered.value}
                  duration={3}
                ></CountUp>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Total number of recovered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}> 
          <Card  className={[styles.fullHeight, styles.card, styles.deaths].join(' ')}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                <CountUp
                  separator=","
                  start={0}
                  end={deaths.value}
                  duration={3}
                ></CountUp>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {new Date(lastUpdate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                Total number of deaths
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Cards;
