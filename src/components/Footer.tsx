const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-12 pt-6 text-center font-bold text-muted-ink sm:px-6">
      © {currentYear} Berhan
    </footer>
  );
};

export default Footer;
