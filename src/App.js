import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => (
  <BrowserRouter>
    <Box >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/video/:id" element={<VideoDetail />} />
        <Route exact path="/channel/:id" element={<ChannelDetail />} />
        <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>

  </BrowserRouter>
);


export default App
