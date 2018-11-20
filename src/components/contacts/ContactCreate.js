import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Redux
import { connect } from 'react-redux';
import { create, update } from '../../REDUX/actions/contacts';

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

    /**
     * LifeCycle - DOM생성 전
     */
    componentWillMount(){
        const { id } = this.props.match.params;
        const { contacts } = this.props;
        // 수정일 경우 
        if(id){
            const rid = contacts.findIndex(c => c.id === Number(id))
            const input = {
                id      : contacts[rid].id,
                name    : contacts[rid].name,
                phone   : contacts[rid].phone,
                belong  : contacts[rid].belong,
                favorite: contacts[rid].favorite
            }
            this.setState({
                // input : JSON.parse(JSON.stringify(contacts[rid]))
                input
            })
            
        }
    }

    /**
     * 입력값
     */
    handleChange = e => {
        let { input } = this.state;
        input[e.target.name] = e.target.value;
        this.setState({input})
    }

    /**
     * 즐겨찾기 토글
     */
    handleToggleFavorite = e => {
        let { input } = this.state;
        input.favorite = !input.favorite;
        this.setState({input})
        
    }

    /**
     * 저장
     */
    handleSave = () => {
        const { input } = this.state;
        
        // 예외검사
        if(
            !this.initData.name.test(input.name)     || !input.name  ||
            !this.initData.phone.test(input.phone)   || !input.phone ||
            !this.initData.belong.test(input.belong) || !input.belong 
        ){
            return alert('입력오류!!');
        }
        // 수정 || 생성
        if(input.id){
            alert(input.id)
            this.props.onUpdate(input.id, input)
        }else{
            this.props.onCreate(input);
        }
        
        this.props.history.push('/');
        
    }

    /**
     * 렌더링
     */
    render() {
        const { input } = this.state;
        
        return (
            <div style={{padding:"3px 15px 7px 15px"}}>
                {/* 이름 */}
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
                {/* 연락처 */}
                <TextField
                    style={{padding:0, marginTop:'10px'}}
                    label="Phone number"
                    fullWidth
                    margin="normal"
                    value={input.phone}
                    name="phone"
                    onChange={this.handleChange}
                />
                {/* 소속 */}
                <TextField
                    style={{padding:0, marginTop:'10px'}}
                    label="Belong"
                    fullWidth
                    margin="normal"
                    value={input.belong}
                    name="belong"
                    onChange={this.handleChange}
                />
                {/* 즐겨찾기 */}
                <FormControlLabel
                    control={
                        <Switch
                            checked={input.favorite}
                            onChange={this.handleToggleFavorite}
                            value={input.favorite}
                            name="favorite"
                            color="primary"
                        />
                    }
                    label="Favorite"
                />
                {/* 저장버튼 */}
                <FixedButton iconName="save" onClick={this.handleSave} />
            </div>
        );
    }// render
}// class

/**
 * Default Props
 */
ContactCreate.propTypes = {
  classes: PropTypes.object.isRequired,
};

/**
 * 발행
 */
let mapDispatchToProps = (dispatch) => {
    return {
        onCreate: contact => dispatch(create(contact)),
        onUpdate: (id,contact) => dispatch(update(id,contact))
    }
}

/**
 * 구독
 */
let mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

ContactCreate = connect(mapStateToProps, mapDispatchToProps)(ContactCreate);

export default withStyles(styles)(ContactCreate);
