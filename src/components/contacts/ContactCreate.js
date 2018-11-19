import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Redux
import { connect } from 'react-redux';
import { create } from '../../REDUX/actions/contacts';

// commons
import { 
    FixedButton, 
} from '../commons';

// CSS
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ContactCreate extends React.Component {
    initData = {
        name: /[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
        phone: /^\d{3}-\d{3,4}-\d{4}$/,
        belong: /[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
        img: /[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
    }

    state = {
        keyword: '',
        input: {
            name: '',
            phone: '',
            belong: '',
            favorite: false
        }
    }

    handleChange = e => {
        let { input } = this.state;
        input[e.target.name] = e.target.value;
        this.setState({input})
    }
    handleToggleFavorite = e => {
        let { input } = this.state;
        input.favorite = !input.favorite;
        this.setState({input})
        
    }
    handleSave = () => {
        const { input } = this.state;
        // 예외검사
        if(
            !this.initData.name.test(input.name)     || !input.name  ||
            // !this.initData.phone.test(input.phone)   || !input.phone ||
            !this.initData.belong.test(input.belong) || !input.belong 
        ){
            return alert('입력오류!!');
        }
        this.props.onCreate(input);
        this.props.history.push('/');
        
    }


  
    render() {
        const { input } = this.state;
        
        
        return (
            <div style={{padding:"3px 15px 7px 15px"}}>
                <TextField
                    style={{padding:0, marginTop:'10px'}}
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={input.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <br/>
                <TextField
                    style={{padding:0, marginTop:'10px'}}
                    label="Phone number"
                    fullWidth
                    margin="normal"
                    value={input.phone}
                    name="phone"
                    onChange={this.handleChange}
                />
                <TextField
                    style={{padding:0, marginTop:'10px'}}
                    label="Belong"
                    fullWidth
                    margin="normal"
                    value={input.belong}
                    name="belong"
                    onChange={this.handleChange}
                />

                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.checkedB}
                            onChange={this.handleToggleFavorite}
                            value={input.favorite}
                            name="favorite"
                            color="primary"
                        />
                    }
                    label="Favorite"
                />

                <FixedButton iconName="save" onClick={this.handleSave} />
            </div>
        );
    }// render
}

ContactCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

let mapDispatchToProps = (dispatch) => {
  return {
      onCreate: contact => dispatch(create(contact))
  }
}

ContactCreate = connect(undefined, mapDispatchToProps)(ContactCreate);

export default withStyles(styles)(ContactCreate);
