const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary h-16">
      <div className="flex justify-center items-center h-full">
        <p className="text-white">
          Dagmawi Nebiat © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
