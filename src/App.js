import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import MainArea from './Components/MainArea/MainArea';
import CommentForm from './Components/CommentForm/CommentForm';
import youtube from './API/youtube';
import axios from 'axios';
import Comments from './Components/Comments/Comments';

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    comments: [],
  }
  
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
    this.getComments();
    console.log("in onVideoSelect", this.state.comments)
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AAIzaSyDGRVRjP6tHBTVo1guL1vJJkSQGyjSTSiw',
        q: searchTerm,
        type: 'video',
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    console.log(response.data.items);
    this.getComments();
    console.log("in handleSubmit", this.state.comments);
  }

  getComments = async () => {
    try{
      const response = await axios.get(`http://127.0.0.1:8000/comments-id/${this.state.selectedVideo.id.videoId}/`);
      this.setState({comments: response.data});
      console.log("after axios", response.data);
    }
    catch(e){
      console.log(e)
    }
    
  }

  render() {
    const { selectedVideo, videos, comments } = this.state;

    return (
      <div className="app">
        <Header onFormSubmit={this.handleSubmit}/>
        <div className="app__page">
          <SideBar/>
          <MainArea selectedVideo={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect}/>
        </div>
        <div className="app__comments">
          <CommentForm />
          <Comments comments={comments}/>
        </div>
      </div>
    );
  }
  
}

export default App;
