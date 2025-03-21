import { ThemeToggle } from '@/lib/components/theme-toggle';

export const Header = () => {
  return (
    <header className="bg-orange sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="mx-auto flex items-center justify-between bg-[#00000] p-10 py-2">
        <div className="flex flex-row items-center gap-10">
          <div></div>
          <div>
            <h1 className="text-2xl font-bold"></h1>
          </div>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
};
