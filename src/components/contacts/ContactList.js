import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


import ContactItem from './ContactItem';
import { SearchForm, ResponsiveDialog } from '../commons';

// import sampleData from '../../sampleData.json'

// Redux
import { connect } from 'react-redux';
import { all } from '../../REDUX/actions/contacts';

// CSS
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ContactList extends React.Component {
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
    const { classes } = this.props;
    const { keyword } = this.state;

    const contacts = (keyword) ? this.props.contacts.filter(c => c.name.match(keyword) || c.phone.match(keyword)) : this.props.contacts;

    const items = contacts.map(item => <ContactItem key={item.id} info={item} favorite={item.favorite} /> )

    console.log(items);
    
    return (
      <div className={classes.root} style={{zIndex:'89', width:'100%', margin:0}}>
        <SearchForm onChange={this.handleChangeKeyword} />
        <List>
          {items}
        </List>
        {/* <ResponsiveDialog isOpen={false} /> */}
      </div>
    );
  }
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
};

let mapStateToProps = (state) => {
  return {
      contacts: state.contacts
  }
}

ContactList = connect(mapStateToProps)(ContactList);

export default withStyles(styles)(ContactList);
