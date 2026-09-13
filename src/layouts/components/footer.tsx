const Footer = () => {
  return (
    <footer className="mt-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span>&copy; {new Date().getFullYear()}</span>
        <span className="hidden sm:inline">All rights reserved, Ali Ahmed</span>
      </div>
    </footer>
  );
};

export default Footer;
