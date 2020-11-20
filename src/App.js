import React from 'react';
import './App.css';
import Video from './video';
import VideoSidebar from './VideoSidebar'

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        < VideoSidebar />
      </div>
    </div>
  );
}

export default App;
