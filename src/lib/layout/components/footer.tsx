export const Footer = () => {
  return (
    <footer className="wrapper mt-5 bg-white">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://www.github.com/jvittor"
            target="_blank"
            rel="noopener noreferrer"
          >
            jvittor
          </a>
        </p>
      </div>
    </footer>
  );
};
