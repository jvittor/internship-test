import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Comment } from '@/lib/entities/home/comments';

const CommentList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body2">
              <strong>{comment.name}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {comment.email}
            </Typography>
            <Typography variant="body2">{comment.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentList;
