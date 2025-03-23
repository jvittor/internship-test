/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

'use client';

import { Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

export default function SkeletonLoginForm() {
  return (
    <div className="w-full">
      <div className="font-roboto flex w-full items-center justify-center">
        <div className="grid w-full min-w-4xl rounded-3xl bg-white shadow-none lg:w-[500px] lg:shadow-2xl">
          <form className="font-roboto text-black-200 flex w-full flex-col items-center justify-center gap-6 p-10 lg:gap-10">
            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Skeleton>

            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="password"
                name="password"
                label="Senha"
                variant="outlined"
                fullWidth
              />
            </Skeleton>

            <Skeleton className="w-full" variant="rectangular">
              <a
                href="/register"
                className="w-full cursor-pointer text-center hover:underline"
              >
                Não tem registro ainda? Se registre aqui{' '}
              </a>
            </Skeleton>

            <Skeleton
              sx={{
                width: { lg: 400, md: 400, sm: 300 },
                maxWidth: '100%',
              }}
              variant="rectangular"
            >
              <CustomTextField
                required
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Skeleton>
          </form>
        </div>
      </div>
    </div>
  );
}
