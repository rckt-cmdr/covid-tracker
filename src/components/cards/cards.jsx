import React from "react";
import styles from "./cards.module.css"
import {Card, CardContent, Typography, Grid} from "@material-ui/core";

const Cards = (props) => {
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body2">Number of Active COVID-19 Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body2">Number of Recovered COVID-19 Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary"> REAL DATE</Typography>
                        <Typography variant="body2">Number of COVID-19 Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;