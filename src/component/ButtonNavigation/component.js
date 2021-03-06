import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/History';
import LocationOnIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';


class Component extends React.Component {
    render() {
        const {classes}=this.props
        return(
            <div>
                <BottomNavigation className={classes.btmNavi} style={{marginTop:180}}>
                <Link to="/"><BottomNavigationAction label="Home" icon={<RestoreIcon />} /></Link>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <Link to="/login"><BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /></Link>
                </BottomNavigation>
            </div>
        )
    }
}

export default Component;