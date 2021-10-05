import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchImg from 'services/ApiPixabay';
import './App.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

render() {
  return(
    <ToastContainer autoClose={5000}/>


  )
}
