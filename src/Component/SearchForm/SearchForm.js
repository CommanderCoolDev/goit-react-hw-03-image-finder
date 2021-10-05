import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

export default class SearchForm extends Component{
    state = {
        query: ''
    };

    handleChange = e => {
        this.setState({query: e.target.value.toLowerCase()})
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            toast('Go clearly!');
            return;
          }
      
          this.props.onSubmit(this.state.query);
          this.setState({ query: '' });
        
    };


render () {
    return (
        <header>
            <form>
                <button type='submit'>
                    <span>Try me!</span>
                </button>
                <input
                placeholder='lets search smth....'
                className=''
                type='text'
                value={this.state.query}
                onClick={this.handleChange}
                />
            </form>
        </header>
    )
}
   
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

