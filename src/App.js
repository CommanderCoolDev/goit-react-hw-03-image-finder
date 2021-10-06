import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ApiPixabay from 'services/ApiPixabay';
import SearchForm from 'Component/SearchForm/SearchForm';
import './App.css';
import ImageGallery from 'Component/ImageGallery/ImageGallery';
// import ImageItem from 'Component/ImageItem/ImageItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};
export default class App extends Component {

  state ={
    query: '',
    error: null,
    page: 1,
    status: 'idle',
    images: []
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;

    if (prevName !== nextName) {
      this.renderImg();
    }
  };
  
  handleFormSubmit = newQuery => {
    this.setState({ 
      query: newQuery, 
      page: 1, 
      images: [] 
    });
  };

  renderImg = () => {
    const { query, page } = this.state;
    
    ApiPixabay
      .fetchImg(query, page)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(() => this.setState({ status: Status.RESOLVED }));
  };

 
  render() {
    const { error, status } = this.state;

    return(
      <>
        <SearchForm onSubmit={this.handleFormSubmit}/>
        <ToastContainer autoClose={5000} />
        
        <ImageGallery images={this.state.images}/>



      </>
      
  
  
    )
  }

}

