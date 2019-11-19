import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonGoogle from '../../component/ButtonGoogle';
import CardLogin from '../../component/CardLogin';
class Component extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            
             <Container maxWidth="sm" style={{maxWidth:449}} className={classes.Container}>
                 <ButtonGoogle />
                 <CardLogin />
            </Container>
        
            
        )
    }
}

export default Component;