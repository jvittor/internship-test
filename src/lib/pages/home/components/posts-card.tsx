/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { FavoriteBorder, ChatBubbleOutline, Share } from '@mui/icons-material';
import { Post } from '@/lib/entities/home/post';
import { Comment } from '@/lib/entities/home/comments';
import { CommentUseCases } from '@/lib/usecases/comments.usecases';

const PostCard = ({ post }: { post: Post }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = React.useState<boolean>(false);
  const [showComments, setShowComments] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const loadComments = async () => {
    setLoadingComments(true);
    try {
      const commentsData = await CommentUseCases.getComments(post.id);
      setComments(commentsData);
    } catch (error) {
      setError('Falha ao carregar comentários');
    } finally {
      setLoadingComments(false);
    }
  };
  const toggleComments = () => {
    if (!showComments) {
      loadComments();
    }
    setShowComments(!showComments);
  };

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
          <IconButton onClick={toggleComments}>
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

      {showComments && (
        <CardContent>
          {loadingComments ? (
            <CircularProgress size={24} />
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <Typography key={comment.id} variant="body2">
                {comment.body}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" color="textSecondary">
              Nenhum comentário disponível
            </Typography>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default PostCard;
