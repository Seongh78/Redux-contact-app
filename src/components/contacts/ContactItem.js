import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

// import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';
import { select, remove, favorite } from '../../REDUX/actions/contacts';

// Router 
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
});




class ContactItem extends React.Component {
    
    state = {
        ff:false
    }

    /**
     * 버튼 토글
     */
    bottomButtonToggle = () => {
        this.setState(prev => ({
            ff: !prev.ff
        }))
    }


    render(){
        const { 
            classes, 
            info,
            favorite,
        } = this.props;

        const {ff} = this.state;

        return (
            <div className={classes.root}>
                <ListItem 
                    button 
                    style={{zIndex:'9'}}
                >
                    <Avatar onClick={()=>this.bottomButtonToggle()}>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText 
                        primary={info.name} 
                        secondary={info.phone} 
                        onClick={()=>this.bottomButtonToggle()}
                    />
                    <IconButton  
                        aria-label="Delete" 
                        style={{color: (favorite) ? '#3f51b5' : 'rgba(0, 0, 0, 0.26)' }}
                        color="primary"
                        onClick={()=>this.props.onFavorite(info.id)}
                    >
                        {/* <DeleteIcon /> */}
                        <StarIcon style={{zIndex:'10'}} />
                    </IconButton>
                </ListItem>

                <Collapse 
                    in={ff} 
                    timeout="auto" 
                    // unmountOnExit
                >
                    <Link to={`/contacts/${info.id}`}>
                        <Button 
                            variant="outlined"
                            style={{
                                width:'50%', 
                                borderRadius:0, 
                                borderLeft:'none', 
                                textAlign:'center',
                            }}
                        >
                            편집
                        </Button>
                    </Link>
                    <Button 
                        variant="outlined"
                        style={{
                            width:'50%', 
                            borderRadius:0, 
                            borderLeft:'none', 
                            color:'red', 
                            borderRight:'none', 
                            textAlign:'center',
                        }}
                        onClick={()=>this.props.onRemove(info.id)}
                    >
                        삭제
                    </Button>
                </Collapse>
            </div>
        );
    }
}

ContactItem.propTypes = {classes: PropTypes.object.isRequired,};

let mapDispatchToProps = (dispatch) => {
    return {
        onSelect: id => dispatch(select(id)),
        onRemove: id => dispatch(remove(id)),
        onFavorite: id => dispatch(favorite(id)),
    }
}

ContactItem = connect(undefined, mapDispatchToProps)(ContactItem);

export default withStyles(styles)(ContactItem);
