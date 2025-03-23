/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgress, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TOKEN_KEY } from '@/middleware';
import Image from 'next/image';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { LoginUseCase } from '@/lib/usecases/user.usecases';

const CustomTextField = styled(TextField)({});

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    name: 'John Dee',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!validateEmail(loginData.email)) {
        toast.error('Invalid email format.');
        return;
      }

      setLoading(true);

      try {
        const useCase = new LoginUseCase();
        const result = await useCase.execute(loginData);

        if (result.success) {
          if (result.token) {
            Cookie.set(TOKEN_KEY, result.token, { expires: 7 });
          } else {
            throw new Error('token is undefined');
          }
          toast.success('success login!');
          router.push('/');
        } else {
          toast.error('incorrect email or password.');
        }
      } catch (err) {
        setError('an unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    },
    [loginData, router]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLoad = () => setIsPageLoaded(false);

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  return (
    <div className="w-full">
      {isPageLoaded ? (
        <div className="font-roboto flex w-full items-center justify-center">
          <div className="grid w-[500px] min-w-full rounded-3xl bg-white shadow-none lg:min-w-4xl lg:shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="font-roboto text-black-200 flex w-full flex-col items-center justify-center gap-6 p-10 lg:gap-10"
            >
              <ToastContainer />
              <Image
                src="/assets/logo.png"
                className="rounded-full"
                width={200}
                height={200}
                alt="logo"
                priority // Importante para otimizar o carregamento da imagem
              />
              <CustomTextField
                required
                id="email"
                name="email"
                label="email"
                variant="outlined"
                fullWidth
                onChange={handleLogin}
                value={loginData.email}
                error={
                  loginData.email !== '' && !validateEmail(loginData.email)
                }
                helperText={
                  loginData.email !== '' && !validateEmail(loginData.email)
                    ? 'Invalid email format'
                    : ''
                }
              />
              <CustomTextField
                required
                id="password"
                name="password"
                label="password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                fullWidth
                onChange={handleLogin}
                value={loginData.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-black bg-white p-2 text-xl font-semibold text-black shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex w-full items-center justify-center">
                    <div className="loading"></div>
                  </div>
                ) : (
                  'entrar'
                )}
              </button>
              <button
                type="button"
                onClick={() => router.push('/')}
                className="mt-4 cursor-pointer"
              >
                <p className="font-normal text-black underline">
                  back to homepage
                </p>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center p-10">
          <div className="loading"></div>
        </div>
      )}
    </div>
  );
}
