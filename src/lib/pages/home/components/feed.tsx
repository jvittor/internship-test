/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import * as React from 'react';
import { Grid, Typography, Box, CircularProgress } from '@mui/material';
import { PostUseCases } from '@/lib/usecases/posts.usecases';
import PostCard from '@/lib/pages/home/components/posts-card';
import { Post } from '@/lib/entities/home/post';

export default function TwitterFeed() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [page, setPage] = React.useState<number>(1);
  const [hasMore, setHasMore] = React.useState<boolean>(true);
  const observerRef = React.useRef<HTMLDivElement | null>(null);
  const limit = 5;
  const loadPosts = React.useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newPosts = await PostUseCases.getPosts(page, limit);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);

      if (newPosts.length < limit) {
        setHasMore(false);
      }
    } catch (error) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  }, [page, limit, loading, hasMore]);
  React.useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, loading]);
  React.useEffect(() => {
    loadPosts();
  }, [page]);

  if (error) return <Typography>{error}</Typography>;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', py: 2 }}>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid
            item
            xs={12}
            key={post.id}
            ref={index === posts.length - 1 ? observerRef : null}
          >
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>

      {loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}

      {!hasMore && (
        <Typography align="center" mt={2}>
          Sem mais posts
        </Typography>
      )}
    </Box>
  );
}
