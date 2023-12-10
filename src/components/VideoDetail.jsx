import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { fetchAPI } from '../utils/fetchAPI';
import Videos from './Videos';

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet || !videos) {
    return 'Loading...';
  }

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  console.log(videoDetail);
  return (
    <Box minHeight={'95vh'} >
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer className={"react-player"} url={`https://www.youtube.com/watch?v=${id}`} controls playing/>
            <Typography color={'#fff'} variant='h5' fontWeight={'bold'} p={2}>
              {title}
            </Typography>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{ color: '#fff' }} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color={'#fff'}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '16px', color: 'gray', ml: '4.5px', position: 'absolute', mt: '3px' }} />
                </Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} <span style={{ color: '#F31503', fontWeight: 'bold' }}>views</span>
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} <span style={{ color: '#F31503', fontWeight: 'bold' }}>likes</span>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent={'center'} alignItems={'center'}>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
