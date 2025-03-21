import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';
import { FavoriteBorder, ChatBubbleOutline, Share } from '@mui/icons-material';
import { Post } from '@/lib/entities/home/post';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ mr: 2 }} />
        <div>
          <Typography variant="body1">User {post.userId}</Typography>
          <Typography variant="body2" color="textSecondary">
            {post.title}
          </Typography>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="body1">{post.body}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <div>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <Typography variant="body2">35</Typography>
        </div>
        <div>
          <IconButton>
            <ChatBubbleOutline />
          </IconButton>
          <Typography variant="body2">12</Typography>
        </div>
        <div>
          <IconButton>
            <Share />
          </IconButton>
          <Typography variant="body2">7</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
