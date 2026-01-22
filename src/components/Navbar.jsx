import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white p-4 fixed w-full z-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">Bela Plants</h1>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden bg-green-600 p-4 space-y-3">
          <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={()=>setOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={()=>setOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
