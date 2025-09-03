import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <span className="logo-text">Photofram</span>
                </div>

                {/* Desktop Nav */}
                <ul className="navbar-links">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link to={item.path}>
                                <button
                                    className={location.pathname === item.path ? "active" : ""}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <span className="active-indicator"></span>
                                    )}
                                </button>
                            </Link>
                        </li>
                    ))}

                    {/* WhatsApp Contact Button */}
                    <li>
                        <a
                            href="https://wa.me/919876543210" // replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#20b857] transition"
                        >
                            <FaWhatsapp className="text-lg" />
                            <span className="text-sm">WhatsApp</span>
                        </a>
                    </li>


                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="hamburger-button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu-overlay">
                    <ul className="mobile-nav-links">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link to={item.path} onClick={() => setMobileOpen(false)}>
                                    <button
                                        className={location.pathname === item.path ? "active" : ""}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            </li>
                        ))}

                        {/* WhatsApp on Mobile */}
                        <li className="flex justify-center mt-4">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-btn-mobile"
                            >
                                <FaWhatsapp className="whatsapp-icon" />
                                <span>Contact</span>
                            </a>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}
