import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full justify-center border-b-2 border-black p-5 backdrop-blur-md">
      <section className="flex w-4xl items-center justify-between bg-[#00000]">
        <div className="flex flex-row">
          <div></div>
          <div>
            <h1 className="text-2xl font-bold">teste</h1>
          </div>
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};
