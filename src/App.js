import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchImg from 'services/ApiPixabay';
import SearchForm from 'Component/SearchForm/SearchForm';
import './App.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};
export default class App extends Component {

  state ={
    query: '',
    page: 1,
    status: 'idle',
    images: []
  };
  handleFormSubmit = newQuery => {
    this.setState({ 
      query: newQuery, 
      page: 1, 
      images: [] 
    });
  };
  
  render() {

    return(
      <div>
        <SearchForm onSubmit={this.handleFormSubmit}/>
      <ToastContainer autoClose={5000}/>
      </div>
      
  
  
    )
  }

}

