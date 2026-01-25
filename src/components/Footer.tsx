const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Berhan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with care and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
