import {
  Typography,
  Button,
  Paper,
  SvgIcon,
  Grid,
  Avatar,
} from "@mui/material";

import { useScrollTo } from "react-use-window-scroll";

import classes from "./home.module.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function Home({ changeTheme }) {
  function handleNavigate(route) {
    router.push(route);
  }

  const router = useRouter();

  const scrollTo = useScrollTo();

  return (
    <div className={classes.ffContainer}>
      <div className={classes.contentContainerFull}>
        <Grid container spacing={2} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.preTitle}>
              Arbitrum Liquidity Layer
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.mainTitle}>
              Low cost stable coin swaps
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button
                  className={classes.buttonInfo}
                  onClick={() =>
                    scrollTo({ top: 1000, left: 0, behavior: "smooth" })
                  }
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button
                  className={classes.buttonEnter}
                  onClick={() => router.push("/swap")}
                >
                  Enter App
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div id="info" className={classes.contentContainerFullTwo}>
        <div className={classes.floatingSphere}></div>

        <Grid container spacing={3} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.secTitle}>
              Welcome to Expand Exchange
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" className={classes.mainDescription}>
              Expand Exchange officially launched in January 2023 with a
              collective goal of fair and balanced access to DeFi. Expand
              Exchange is a decentralized exchange that has launched on the
              Arbitrum network with low fees, near 0 slippage on correlated
              assets and a strong focus on secondary markets for tokenized locks
              as NFT’s.
            </Typography>
            <Typography variant="body2" className={classes.secDescription}>
              One segment of the cryptocurrency landscape that has shown
              incredible potential is the swapping of stablecoins and volatile
              assets. Expand Exchange Swap offers users quick, seamless and
              cheap transactions while utilizing strategies to maximize their
              yield.
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button
              className={classes.buttonEnterSingle}
              onClick={() => router.push("/swap")}
            >
              Enter App
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
