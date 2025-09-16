import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { productsData } from "../../../data/products";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-[#f6f6f6]">
                <nav className="h-20 w-full px-6 md:px-10 flex items-center">
                    {/* FLEX 1 : logo */}
                    <Link to="/" className="flex items-center gap-3 shrink-0">
                        <img src="/akor_logo.png" alt="Akor Aesthetics" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />
                        <span className="sr-only">Accueil</span>
                    </Link>

                    {/* FLEX 2 : menu + bouton (justify-end + gap 3rem) */}
                    <div className="ml-auto hidden md:flex items-center justify-end gap-[3rem]">
                        {/* Menu desktop */}
                        <ul className="flex items-center gap-8">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-semibold text-gray-900"
                                            : "text-gray-700 hover:text-gray-900"
                                    }
                                >
                                    Accueil
                                </NavLink>
                            </li>

                            <li className="relative group flex items-center gap-2">
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-semibold text-gray-900 flex items-center gap-2"
                                            : "text-gray-700 hover:text-gray-900 flex items-center gap-2"
                                    }
                                >
                                    Nos technologies
                                    <svg
                                        className="hidden xl:block size-4 transition-transform group-hover:rotate-180 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                                    </svg>
                                </NavLink>

                                {/* Dropdown → liste produits */}
                                <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 rounded-xl bg-white shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                                    {productsData.map((p) => (
                                        <NavLink
                                            key={p.id}
                                            to={`/products/${p.id}`}
                                            className="block px-3 py-2 rounded-lg hover:bg-gray-50"
                                        >
                                            {p.title}
                                        </NavLink>
                                    ))}
                                </div>
                            </li>

                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "font-semibold text-gray-900"
                                            : "text-gray-700 hover:text-gray-900"
                                    }
                                >
                                    À propos
                                </NavLink>
                            </li>
                        </ul>

                        {/* Bouton contact */}
                        <Link
                            to="/contact"
                            className="inline-flex h-12 px-6 items-center justify-center rounded-full bg-[#0A0F1C] text-white hover:opacity-90 transition"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Burger mobile (inchangé) */}
                    <button
                        className="ml-auto md:hidden inline-flex items-center justify-center size-10 rounded-full"
                        aria-label="Ouvrir le menu"
                        onClick={() => setOpen(true)}
                    >
                        <svg viewBox="0 0 24 24" className="size-6">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </nav>

                {/* Panneau mobile plein écran (inchangé pour l’instant) */}
                {open && (
                    <div className="fixed inset-0 z-50 bg-white">
                        <div className="h-20 px-6 flex items-center justify-between">
                            <img src="/akor_logo.png" alt="Akor Aesthetics" className="h-8 select-none" />
                            <button
                                className="inline-flex items-center justify-center size-10 rounded-full"
                                aria-label="Fermer le menu"
                                onClick={() => setOpen(false)}
                            >
                                <svg viewBox="0 0 24 24" className="size-6">
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-8 space-y-4 text-lg">
                            <Link to="/" onClick={() => setOpen(false)} className="block py-3">Accueil</Link>
                            <details className="py-3">
                                <summary className="cursor-pointer list-none flex items-center justify-between">
                                    Nos technologies
                                    <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"/>
                                    </svg>
                                </summary>
                                <div className="mt-3 pl-3 space-y-2">
                                    {productsData.map((p) => (
                                        <Link
                                            key={p.id}
                                            to={`/products/${p.id}`}
                                            onClick={() => setOpen(false)}
                                            className="block py-2"
                                        >
                                            {p.title}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                            <Link to="/about-us" onClick={() => setOpen(false)} className="block py-3">À propos</Link>
                            <Link
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-6 inline-flex h-12 px-6 items-center justify-center rounded-full bg-[#0A0F1C] text-[#f6f6f6]"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

export default Navbar;
