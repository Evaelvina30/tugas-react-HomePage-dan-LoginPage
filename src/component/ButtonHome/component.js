import React from 'react';
import Button from '@material-ui/core/Button';


class Component extends React.Component {
    render() {
        const {classes} = this.props
            return(
                <div>
                    <Button variant="contained" color="primary" component="span" className={classes.butHome}>
                    <strong>Ambil Antrian</strong>
                    </Button>
                </div>
            )
        }
    }

export default Component;