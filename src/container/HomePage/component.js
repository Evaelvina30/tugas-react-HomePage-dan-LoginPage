import React from 'react';
import AppBar from '../../component/AppBar';
import ButtonNavigation from '../../component/ButtonNavigation'
import Container from '@material-ui/core/Container';
import GridHome from '../../component/GridHome';
import CardHome from '../../component/CardHome';
import ButtonHome from '../../component/ButtonHome';
class Component extends React.Component {
    render() {
        const {classes} = this.props;
        return(
            
             <Container maxWidth="sm" style={{maxWidth:449}} className={classes.Container}>
                <AppBar />
                <GridHome />
                <CardHome />
                <ButtonHome />
                <ButtonNavigation />
                </Container>
        
            
        )
    }
}

export default Component;