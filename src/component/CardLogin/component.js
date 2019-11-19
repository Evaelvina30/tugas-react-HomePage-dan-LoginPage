import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {
    render() {
        const {classes} = this.props
        return(
            <div>
            <Card className={classes.card}>
            
            </Card>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            <strong>Login</strong>
            </Typography>
            </div>
        )
    }
}

export default Component;