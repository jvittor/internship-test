/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TOKEN_KEY } from '@/middleware';
import Image from 'next/image';

import SkeletonLoginForm from '@/lib/pages/login/components/skeleton-login';
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
  const router = useRouter();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
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
  };

  useEffect(() => {
    setIsPageLoaded(document.readyState === 'complete');
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
              />
              <CustomTextField
                required
                id="password"
                name="password"
                label="password"
                variant="outlined"
                fullWidth
                onChange={handleLogin}
                value={loginData.password}
              />
              <button
                type="submit"
                className="border-black-300 text-black-300 flex w-full items-center justify-center rounded-lg border-2 bg-white p-2 text-xl font-semibold shadow-[rgba(0,0,15,0.5)_-3px_5px_4px_0px] hover:bg-black hover:text-white"
              >
                {loading ? <CircularProgress size="30px" /> : 'ENTRAR'}
              </button>
              <a href="/">
                <p className="font-normal underline">back to homepage</p>
              </a>
            </form>
          </div>
        </div>
      ) : (
        <SkeletonLoginForm />
      )}
    </div>
  );
}
