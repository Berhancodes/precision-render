const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-2 border-dashed border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-handwritten text-lg text-muted-foreground">
            © {currentYear} berhan — made with love ♡
          </p>
          <p className="font-handwritten text-lg text-muted-foreground rotate-tiny-right">
            thanks for stopping by ✿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
