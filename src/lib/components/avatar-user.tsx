'use client';

import Avatar, { AvatarProps } from '@mui/material/Avatar';

export function CustomAvatar({
  userId,
  size = 40,
  sx,
  ...props
}: AvatarProps & { userId: number; size?: number }) {
  return (
    <Avatar
      src={`https://mighty.tools/mockmind-api/content/human/${userId}.jpg`}
      sx={{ width: size, height: size, ...sx }}
      {...props}
    />
  );
}
