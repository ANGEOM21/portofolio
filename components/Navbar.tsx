import { useEffect, useState } from "react";

// --- Navbar ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang Saya' },
    { href: '#projects', label: 'Proyek' },
    { href: '#sertifikasi', label: 'Sertifikasi' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <div className={`navbar fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-200/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
        </div>
        <a href="#home" className="btn btn-ghost normal-case text-xl">Fahmi Idris Anjounghan</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
        </ul>
      </div>
      <div className="hidden lg:navbar-end">
        <a href="#contact" className="btn btn-primary">Hubungi Saya</a>
      </div>
    </div>
  );
};

export default Navbar;