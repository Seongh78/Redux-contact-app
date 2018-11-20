import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// Router 
import { NavLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  
  state = {
    auth: true,
    anchorEl: null,
  };

  /**
   * Change handle
   */
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  
  /**
   * SideMenu toggle
   */
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    // const open = Boolean(anchorEl);


    const sideList = (
      <div className={classes.list}>
        <List>
          {/* 홈 */}
          <NavLink to="/" >
            <ListItem button >
              <ListItemIcon>
                  <MailIcon />
              </ListItemIcon>
              <ListItemText primary="홈" />
            </ListItem>
          </NavLink>

          <Divider />
          
          {/* 즐겨찾기 */}
          <NavLink to="/favorite" >
            <ListItem button >
              <ListItemIcon>
                <InboxIcon /> 
              </ListItemIcon>
              <ListItemText primary="즐겨찾기" />
            </ListItem>
          </NavLink>
          
        </List>
      </div>
    );


    return (
      <div className={classes.root} >
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer('left', true)} />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Contacts
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
