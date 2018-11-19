import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Redux
import { connect } from 'react-redux';

// CSS
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ContactDetail extends React.Component {
  state = {
    keyword: ''
  }
  
  shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


  handleChangeKeyword = keyword => {
    this.setState({keyword})
  }
  
  render() {
    const { classes, match, location } = this.props;
    
    
    return (
      <div className={classes.root} style={{zIndex:'89', width:'100%', margin:0}}>
        <h3>match.url: {match.url}</h3>
        <h3>match.path: {match.path}</h3>
        <h3>location.pathname: {location.pathname}</h3>
        {/* <ResponsiveDialog isOpen={false} /> */}
      </div>
    );
  }
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

let mapStateToProps = (state) => {
  return {
      contacts: state.contacts
  }
}

ContactDetail = connect(mapStateToProps)(ContactDetail);

export default withStyles(styles)(ContactDetail);
