import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});


const FixedButton = props => {
  const { 
    classes, 
    style, 
    iconName, 
    onClick 
  } = props;
  let icon=null;

  // 버튼선택 - props값으로 
  switch(iconName){
    case "save":
      icon = <SaveIcon />
    break;
    case "add":
    default:
      icon = <AddIcon />
    break;  

  }
  
  return (
    <Button 
        style={style} 
        variant="fab" 
        color="primary" 
        aria-label="Add" 
        className={classes.button}
        onClick={onClick}
    >
        {icon}
    </Button>
  );
}

// props 타입 설정
FixedButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

// props 기본값 설정
FixedButton.defaultProps = {
  style: {
    position:'fixed', 
    bottom:'13px', 
    right:'7px'
  },
  iconName: 'add'
};

export default withStyles(styles)(FixedButton);
