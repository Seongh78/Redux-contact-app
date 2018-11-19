import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

// contacts
import ContactItem from './ContactItem';

// commons
import { 
  SearchForm, 
  FixedButton, 
} from '../commons';

// Redux
import { connect } from 'react-redux';

// Router 
import { Link } from 'react-router-dom';

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
  
  /**
   * 검색어 변경
   */
  handleChangeKeyword = keyword => {
    this.setState({keyword})
  }
  
  /**
   * Render
   */
  render() {
    const { classes, match } = this.props;
    const { keyword } = this.state;

    // 검색 필터
    let contacts = (
      (keyword) 
      ? this.props.contacts.filter(c => c.name.match(keyword) || c.phone.match(keyword)) 
      : this.props.contacts
    );
    
    if(match.path === '/favorite'){
      contacts = contacts.filter(c => c.favorite===true)
    }

    const items = contacts.map(item => (
        <ContactItem 
          key={item.id} 
          info={item} 
          favorite={item.favorite} 
        />
      ))
    
    return (
      <div className={classes.root} style={{zIndex:'89', width:'100%', margin:0}}>
        <SearchForm onChange={this.handleChangeKeyword} />
        {
          (items.length<1) ? 
          <div style={{width:'100%', textAlign:'center', marginTop:'10px'}}>
            연락처가 없습니다.
          </div>:
          <List>
            {items}
          </List>
        }

        <Link to="/create">
          <FixedButton />
        </Link>
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
