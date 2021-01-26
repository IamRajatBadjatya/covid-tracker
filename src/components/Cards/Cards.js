import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  console.log(lastUpdate);
  if (!confirmed) {
    return <p>Loading...</p>;
  } else {
    const cards = [
      {
        title: 'infected',
        desc: 'Total number of infected',
        value: confirmed.value
      },
      {
        title: 'recovered',
        desc: 'Total number of recovered',
        value: recovered.value
      },
      {
        title: 'deaths',
        desc: 'Total number of deaths',
        value: deaths.value
      }
    ];
    return (
      <div className={styles.container}>
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item xs={12} md={4}>
              <Card
                className={[styles.fullHeight, styles.card, styles[card.title]].join(
                  ' '
                )}
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {card.title.toUpperCase()}
                  </Typography>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    <CountUp
                      separator=","
                      start={0}
                      end={card.value}
                      duration={3}
                    ></CountUp>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {new Date(lastUpdate).toLocaleDateString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
};

export default Cards;
