import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


class SearchForm extends Component {
    state = { 
        keyword : ''
    }

    /**
     * Change handle
     */
    handleChange = e => {
        this.props.onChange(e.target.value)
        this.setState({keyword: e.target.value})
    }

    render() { 
        const {keyword} = this.state;

        return ( 
            <div style={{padding:"3px 15px 7px 15px"}}>
                <TextField
                    style={{padding:0, margin:0}}
                    id="standard-search"
                    label="Search field"
                    fullWidth
                    type="search"
                    margin="normal"
                    value={keyword}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
 
export default SearchForm;