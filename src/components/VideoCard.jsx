import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// eslint-disable-next-line
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    console.log(videoId, snippet);
    return (
        <Card sx={{width: {md: '310px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet.title} sx={{ width: 358, height: 180 }} />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight={'bold'} color={'#fff'}> 
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/video/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight={'bold'} color={'gray'}> 
                        {snippet?.channelTitle || demoChannelTitle }
                        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
