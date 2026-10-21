import iconImage from "@/assets/icon.png";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4 sm:px-5">
      <header className="mx-auto flex max-w-[1160px] items-center justify-between gap-3 rounded-full bg-white/90 py-2 pl-4 pr-2 shadow-soft backdrop-blur sm:pl-5">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-black text-ink">
          <img src={iconImage} alt="" className="h-8 w-8 rounded-full object-cover" />
          Berhan
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 font-extrabold">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden rounded-full px-4 py-3 text-ink transition-colors hover:text-gold-ink sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-cocoa px-5 py-3 text-cream transition-transform hover:-translate-y-0.5"
          >
            Say hi
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
