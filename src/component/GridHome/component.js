import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Person';


class Component extends React.Component {
    render() {
        const {classes}=this.props
        return(
            <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>>
                    <div className={classes.paper}><strong>Selamat Datang</strong></div>
                </Grid>
                <Grid item xs={6}>>
                <Avatar className={classes.greenAvatar}>
                <AssignmentIcon />
                </Avatar>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default Component;