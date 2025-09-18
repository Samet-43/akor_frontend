import { Link } from "react-router-dom";
import { Disclosure, Transition, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function Footer() {
    return (
        <>
            <footer className="relative w-full text-white overflow-visible bg-[#070B16]">
                {/* Image de fond en arrière-plan */}
                <img
                    src="/footer/bg_footer.png"
                    alt="Footer background"
                    className="absolute inset-0 z-10 w-full h-full"
                />

                {/* Logo centré en haut — toujours au-dessus */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <img
                        src="/akor_logo.png"
                        alt="Akor Aesthetics"
                        className="h-24 sm:h-40 md:h-56 lg:h-72 xl:h-80"
                    />
                </div>

                {/* Contenu en flux normal (descend vers le bas) */}
                <div className="relative z-10 text-[#f6f6f6] flex flex-col">
                    <div className="w-full px-4 sm:px-6 md:px-10 pt-40 sm:pt-56 md:pt-72 lg:pt-80 pb-8 md:pb-24 lg:pb-[12.5rem]">

                        {/* ===== Disclosures (mobile + tablette + jusqu’à lg) ===== */}
                        <div className="xl:hidden space-y-3 mb-8">
                            {/* 1) Contact */}
                            <Disclosure>
                                {({ open }) => (
                                    <div className="rounded-xl bg-white/5">
                                        <DisclosureButton className="w-full flex items-center justify-between px-4 py-3">
                                            <span className="text-[clamp(1rem,1.8vw,1.125rem)] font-medium">Contact</span>
                                            <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-[clamp(0.75rem,1vw,0.875rem)] opacity-80`} />
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-150 ease-out"
                                            enterFrom="transform scale-y-95 opacity-0"
                                            enterTo="transform scale-y-100 opacity-100"
                                            leave="transition duration-100 ease-in"
                                            leaveFrom="transform scale-y-100 opacity-100"
                                            leaveTo="transform scale-y-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-4 pb-4 pt-2 space-y-6">
                                                <h3 className="text-[clamp(1.25rem,2.4vw,1.375rem)] leading-tight font-medium">
                                                    Leader des équipements <br /> esthétiques en Europe
                                                </h3>

                                                <div className="flex items-center gap-3">
                                                    <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><i className="fa-brands fa-instagram text-[clamp(0.95rem,1.2vw,1.0625rem)]"/></a>
                                                    <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><i className="fa-brands fa-linkedin-in text-[clamp(0.95rem,1.2vw,1.0625rem)]"/></a>
                                                    <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><i className="fa-brands fa-facebook-f text-[clamp(0.95rem,1.2vw,1.0625rem)]"/></a>
                                                    <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition"><i className="fa-brands fa-youtube text-[clamp(0.95rem,1.2vw,1.0625rem)]"/></a>
                                                </div>

                                                <ul className="space-y-3 text-[clamp(0.875rem,1.2vw,0.95rem)] text-white/85">
                                                    <li className="flex items-start gap-3"><i className="fa-regular fa-map opacity-70 mt-0.5"/><span>Av. du Diamant 142,<br/>1030 Bruxelles</span></li>
                                                    <li className="flex items-center gap-3"><i className="fa-solid fa-phone opacity-70"/><a href="tel:+326100200300" className="hover:underline">+32 6100 200 300</a></li>
                                                    <li className="flex items-center gap-3"><i className="fa-regular fa-envelope opacity-70"/><a href="mailto:contact@akor-aesthetics.com" className="hover:underline">contact@akor-aesthetics.com</a></li>
                                                </ul>
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>

                            {/* 2) Pages */}
                            <Disclosure>
                                {({ open }) => (
                                    <div className="rounded-xl bg-white/5">
                                        <DisclosureButton className="w-full flex items-center justify-between px-4 py-3">
                                            <span className="text-[clamp(1rem,1.8vw,1.125rem)] font-medium">Pages</span>
                                            <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-[clamp(0.75rem,1vw,0.875rem)] opacity-80`} />
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-150 ease-out"
                                            enterFrom="transform scale-y-95 opacity-0"
                                            enterTo="transform scale-y-100 opacity-100"
                                            leave="transition duration-100 ease-in"
                                            leaveFrom="transform scale-y-100 opacity-100"
                                            leaveTo="transform scale-y-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-4 pb-4 pt-2">
                                                <ul className="space-y-4 text-[clamp(0.9rem,1.2vw,1rem)]">
                                                    <li><Link to="/" className="hover:opacity-80">Accueil</Link></li>
                                                    <li><Link to="/product" className="hover:opacity-80">Technologies</Link></li>
                                                    <li><Link to="/blog" className="hover:opacity-80">Blog</Link></li>
                                                    <li><Link to="/about-us" className="hover:opacity-80">À propos</Link></li>
                                                    <li><Link to="/contact" className="hover:opacity-80">Contact</Link></li>
                                                </ul>
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>

                            {/* 3) Produits */}
                            <Disclosure>
                                {({ open }) => (
                                    <div className="rounded-xl bg-white/5">
                                        <DisclosureButton className="w-full flex items-center justify-between px-4 py-3">
                                            <span className="text-[clamp(1rem,1.8vw,1.125rem)] font-medium">Produits</span>
                                            <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-[clamp(0.75rem,1vw,0.875rem)] opacity-80`} />
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-150 ease-out"
                                            enterFrom="transform scale-y-95 opacity-0"
                                            enterTo="transform scale-y-100 opacity-100"
                                            leave="transition duration-100 ease-in"
                                            leaveFrom="transform scale-y-100 opacity-100"
                                            leaveTo="transform scale-y-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-4 pb-4 pt-2">
                                                <ul className="space-y-4 text-[clamp(0.9rem,1.2vw,1rem)]">
                                                    <li><Link to="/product/1" className="hover:opacity-80">DermoSmart</Link></li>
                                                    <li><Link to="/product/2" className="hover:opacity-80">SKIN/HAIR Kiosk 15 inch</Link></li>
                                                    <li><Link to="/product/3" className="hover:opacity-80">SKIN/HAIR Kiosk 21 inch</Link></li>
                                                    <li><Link to="/product/4" className="hover:opacity-80">Sponge Device</Link></li>
                                                    <li><Link to="/product/5" className="hover:opacity-80">DeepWave</Link></li>
                                                    <li><Link to="/product/6" className="hover:opacity-80">Plamon</Link></li>
                                                </ul>
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>

                            {/* 4) Newsletter */}
                            <Disclosure>
                                {({ open }) => (
                                    <div className="rounded-xl bg-white/5">
                                        <DisclosureButton className="w-full flex items-center justify-between px-4 py-3">
                                            <span className="text-[clamp(1rem,1.8vw,1.125rem)] font-medium">Newsletter</span>
                                            <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-[clamp(0.75rem,1vw,0.875rem)] opacity-80`} />
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-150 ease-out"
                                            enterFrom="transform scale-y-95 opacity-0"
                                            enterTo="transform scale-y-100 opacity-100"
                                            leave="transition duration-100 ease-in"
                                            leaveFrom="transform scale-y-100 opacity-100"
                                            leaveTo="transform scale-y-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-4 pb-4 pt-2">
                                                <form className="relative">
                                                    <label htmlFor="newsletter-email-m" className="sr-only">Email</label>
                                                    <input
                                                        id="newsletter-email-m"
                                                        type="email"
                                                        placeholder="Saisir votre email"
                                                        className="w-full h-12 pl-5 pr-28 rounded-full bg-transparent border border-white/30 placeholder-white/65 text-white outline-none focus:border-white/70 transition"
                                                    />
                                                    <button type="submit" className="h-11 px-6 rounded-full bg-gradient-to-b from-[#252834] to-[#0A0F1C] text-white hover:opacity-90 transition">
                                                        <i className="fa-solid fa-arrow-right text-[clamp(1rem,1.6vw,1.25rem)]" />
                                                    </button>
                                                    <p className="mt-3 text-[clamp(0.7rem,1vw,0.875rem)] text-white/70">
                                                        Inscrivez-vous pour recevoir nos nouveautés — Sans spam, promis !
                                                    </p>
                                                </form>
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>

                            {/* 5) Contactez-nous */}
                            <Disclosure>
                                {({ open }) => (
                                    <div className="rounded-xl bg-white/5">
                                        <DisclosureButton className="w-full flex items-center justify-between px-4 py-3">
                                            <span className="text-[clamp(1rem,1.8vw,1.125rem)] font-medium">Contactez-nous</span>
                                            <i className={`fa-solid fa-chevron-${open ? "up" : "down"} text-[clamp(0.75rem,1vw,0.875rem)] opacity-80`} />
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-150 ease-out"
                                            enterFrom="transform scale-y-95 opacity-0"
                                            enterTo="transform scale-y-100 opacity-100"
                                            leave="transition duration-100 ease-in"
                                            leaveFrom="transform scale-y-100 opacity-100"
                                            leaveTo="transform scale-y-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-4 pb-4 pt-2">
                                                <form className="flex flex-col gap-3">
                                                    <input type="text" placeholder="Votre nom" className="h-11 px-4 rounded-full bg-transparent border border-white/30 placeholder-white/65 text-white outline-none focus:border-white/70 transition" />
                                                    <input type="email" placeholder="Votre email" className="h-11 px-4 rounded-full bg-transparent border border-white/30 placeholder-white/65 text-white outline-none focus:border-white/70 transition" />
                                                    <textarea placeholder="Votre message" rows={3} className="px-4 py-2 rounded-xl bg-transparent border border-white/30 placeholder-white/65 text-white outline-none focus:border-white/70 transition resize-none" />
                                                    <button type="submit" className="h-11 px-6 rounded-full bg-gradient-to-b from-[#252834] to-[#0A0F1C] text-white hover:opacity-90 transition">
                                                        Envoyer
                                                    </button>
                                                </form>
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        </div>
                        {/* ===== /Disclosures ===== */}


                        {/* Rangée 1 : les 4 colonnes (desktop xl+) */}
                        <div className="hidden xl:flex flex-wrap items-start justify-between gap-8 md:gap-12">
                            {/* Col 1 — Titre + réseaux + coordonnées */}
                            <div className="flex-1 min-w-[16rem] max-w-[32rem] space-y-6 order-1">
                                <div className="space-y-6 mb-20">
                                    <h3 className="text-[clamp(1.25rem,2.5vw,1.875rem)] leading-[1.35] font-medium">
                                        Leader des équipements <br /> esthétiques en Europe
                                    </h3>

                                    <div className="flex items-center gap-3">
                                        <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                                            <i className="fa-brands fa-instagram text-[clamp(1rem,1.2vw,1.125rem)] opacity-90" />
                                        </a>
                                        <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                                            <i className="fa-brands fa-linkedin-in text-[clamp(1rem,1.2vw,1.125rem)] opacity-90" />
                                        </a>
                                        <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                                            <i className="fa-brands fa-facebook-f text-[clamp(1rem,1.2vw,1.125rem)] opacity-90" />
                                        </a>
                                        <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                                            <i className="fa-brands fa-youtube text-[clamp(1rem,1.2vw,1.125rem)] opacity-90" />
                                        </a>
                                    </div>
                                </div>

                                <ul className="mt-6 space-y-4 text-[clamp(0.875rem,1.1vw,0.9375rem)] leading-[1.6] text-[#f6f6f6]/85">
                                    <li className="flex items-start gap-3">
                                        <i className="fa-regular fa-map text-[clamp(0.9rem,1vw,1rem)] mt-0.5 opacity-70" />
                                        <span>
                                          Av. du Diamant 142,
                                          <br />
                                          1030 Bruxelles
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fa-solid fa-phone text-[clamp(0.9rem,1vw,1rem)] opacity-70" />
                                        <a href="tel:+326100200300" className="hover:underline">+32 6100 200 300</a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fa-regular fa-envelope text-[clamp(0.9rem,1vw,1rem)] opacity-70" />
                                        <a href="mailto:contact@akor-aesthetics.com" className="hover:underline">
                                            contact@akor-aesthetics.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Col 2 — Liens pages */}
                            <div className="flex-1 min-w-[12rem] max-w-[18rem] order-2">
                                <ul className="space-y-6 text-[clamp(0.9rem,1.1vw,1rem)] leading-[1.6]">
                                    <li><Link to="/" className="hover:opacity-80">Accueil</Link></li>
                                    <li><Link to="/products" className="hover:opacity-80">Technologies</Link></li>
                                    <li><Link to="/blog" className="hover:opacity-80 hidden">Blog</Link></li>
                                    <li><Link to="/about-us" className="hover:opacity-80">À propos</Link></li>
                                    <li><Link to="/contact" className="hover:opacity-80">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Col 3 — Produits */}
                            <div className="flex-1 min-w-[12rem] max-w-[20rem] order-3">
                                <ul className="space-y-6 text-[clamp(0.9rem,1.1vw,1rem)] leading-[1.6]">
                                    <li><Link to="/products/1" className="hover:opacity-80">DermoSmart</Link></li>
                                    <li><Link to="/products/2" className="hover:opacity-80">SKIN/HAIR Kiosk 15 inch</Link></li>
                                    <li><Link to="/products/3" className="hover:opacity-80">SKIN/HAIR Kiosk 21 inch</Link></li>
                                    <li><Link to="/products/4" className="hover:opacity-80">Sponge Device</Link></li>
                                    <li><Link to="/products/5" className="hover:opacity-80">DeepWave</Link></li>
                                    <li><Link to="/products/6" className="hover:opacity-80">Plamon</Link></li>
                                </ul>
                            </div>

                            {/* Col 4 — Newsletter */}
                            <div className="flex-1 max-w-[24rem] order-4">
                                <div className="space-y-6">
                                    <h4 className="text-[clamp(1rem,1.4vw,1.5rem)] text-[#f6f6f6]">
                                        Restez connecté <span className="font-light text-[#F6F6F6]/50">à l’innovation esthétique</span>
                                    </h4>
                                    <form className="relative">
                                        <label htmlFor="newsletter-email" className="sr-only">Email</label>
                                        <input
                                            id="newsletter-email"
                                            type="email"
                                            placeholder="Saisir votre email"
                                            className="w-full h-12 pl-5 pr-16 rounded-full bg-transparent border border-[#f6f6f6]/35 placeholder-[#f6f6f6]/65 text-[#f6f6f6] outline-none focus:border-[#f6f6f6]/70 transition"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-1 top-1 h-10 w-10 rounded-full bg-gradient-to-b from-[#252834] to-[#0A0F1C] text-[#f6f6f6] ring-1 ring-white/25 hover:ring-white/40 grid place-items-center"
                                            aria-label="Envoyer"
                                        >
                                            <i className="fa-solid fa-arrow-right text-[clamp(0.9rem,1.2vw,1rem)]" />
                                        </button>
                                    </form>
                                    <p className="text-[clamp(0.7rem,0.9vw,0.875rem)] text-[#f6f6f6]/60">
                                        Sans spam, promis !
                                    </p>
                                </div>

                                {/* Rangée 2 : Brochure à gauche / Form à droite */}
                                <div className="mt-10">
                                    <div className="flex flex-row">
                                        <div>
                                            <img src="/footer/akor.png" alt=""
                                                className="h-auto w-20"
                                            />
                                        </div>
                                        <div className="block max-w-[55%] ml-6 mt-4 text-lg">
                                            <span className="text-[#F6F6F6]">Télécharger notre Brochure</span>
                                            <span className="text-[#F6F6F6]/50"> complète et explorez l'univers Akor.</span>
                                        </div>
                                    </div>


                                    <a href="#" download className="
                                                    inline-flex items-center gap-3 rounded-full
                                                    bg-[#FFFFFF]/20 text-[#F6F6F6] px-4 py-3 mt-8
                                                    text-[clamp(0.95rem,1.2vw,1rem)] font-medium
                                                    hover:opacity-90 transition w-full xl:w-auto"

                                    >
                                        <i className="fa-solid fa-download"></i>
                                        Télécharger
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bas de page : reste toujours visible et ne recouvre rien */}
                    <div className="w-full mt-8 py-4 bg-[#070B16]">
                        <p className="text-left text-[clamp(0.75rem,1vw,0.875rem)] text-[#f6f6f6]/70 px-4 sm:px-6 md:px-10">
                            © 2025 AKOR AESTHETICS • Conditions générales • Politique de confidentialité
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
