import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class Component extends React.Component {
    render(){
        const {classes}=this.props
            return(
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <strong>Antrian anda</strong>
                            </Grid>
                            <Grid item xs={6}>
                                <strong>Antrian saat ini</strong>
                            </Grid>
                        </Grid>
                    </CardContent>
                        <Grid container spacing={1}>
                    <CardActions>
                        <Button className={classes.btnNavi} size="small"><strong>Lihat Semua</strong></Button>
                    </CardActions>
                </Grid>
                </Card> 
            )
    }
}

export default Component;