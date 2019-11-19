import React from 'react';
import Button from '@material-ui/core/Button';

class Component extends React.Component {
    render() {
        const {classes} = this.props
            return(
                <div>
                    <Button variant="contained" color="transparent" component="span" className={classes.butGoogle}>
                    Masuk dengan Google
                    </Button>
                    <Button variant="contained" color="primary" component="span" className={classes.butNik}>
                    Masuk dengan NIK
                    </Button>
                </div>
            )
        }
    }

export default Component;