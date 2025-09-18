import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { productsData } from "../../data/products.ts";
import Contact from "../../components/shared/contact/Contact.tsx";
import Deposition from "../../components/shared/deposition/Deposition.tsx";

function Home() {
    const hoverRef = useRef(false);

    // Filtrer les produits
    const esthetiqueItems = useMemo(
        () =>
            productsData
                .filter(p => p.activity === "Esthétique")
                .map(p => ({
                    n: String(p.id).padStart(2, "0"),
                    title: p.title,
                    type: p.types,
                    desc: p.description,
                    image: p.image,
                    to: `/product/${p.id}`,
                })),
        []
    );

    const analyseItems = useMemo(
        () =>
            productsData
                .filter(p => p.activity === "Analyse")
                .map(p => ({
                    n: String(p.id).padStart(2, "0"),
                    title: p.title,
                    type: p.types,
                    desc: p.description,
                    image: p.image,
                    to: `/product/${p.id}`,
                })),
        []
    );

    // États indépendants
    const [indexEsthetique, setIndexEsthetique] = useState(0);
    const [indexAnalyse, setIndexAnalyse] = useState(0);

    // Auto-rotation Esthétique
    useEffect(() => {
        const id = setInterval(() => {
            if (!hoverRef.current && esthetiqueItems.length > 0) {
                setIndexEsthetique((i) => (i + 1) % esthetiqueItems.length);
            }
        }, 6000);
        return () => clearInterval(id);
    }, [esthetiqueItems.length]);

    // Auto-rotation Analyse
    useEffect(() => {
        const id = setInterval(() => {
            if (!hoverRef.current && analyseItems.length > 0) {
                setIndexAnalyse((i) => (i + 1) % analyseItems.length);
            }
        }, 6000);
        return () => clearInterval(id);
    }, [analyseItems.length]);

    const activeEsthetique = esthetiqueItems[indexEsthetique];
    const activeAnalyse = analyseItems[indexAnalyse];

    useEffect(() => {
        // Clonage automatique comme dans le CodePen
        document.querySelectorAll<HTMLElement>(".marquee").forEach((marquee) => {
            const content = marquee.querySelector<HTMLElement>(".marquee-content");
            if (!content) return;

            const displayed = parseInt(
                getComputedStyle(marquee).getPropertyValue(
                    "--marquee-elements-displayed"
                ),
                10
            );
            const elements = content.children.length;
            marquee.style.setProperty("--marquee-elements", elements.toString());

            // On clone les premiers éléments pour éviter le "saut"
            for (let i = 0; i < displayed; i++) {
                const clone = content.children[i].cloneNode(true);
                content.appendChild(clone);
            }
        });
    }, []);


    return (
        <>
            {/*HERO*/}
            <section className="relative w-full flex justify-center">

                <picture className="flex justify-center">
                    <source srcSet="/home/hero-1-1.png" media="(max-width: 810px)"/>
                    <img
                        src="/home/hero-1.png"
                        alt="Machine esthétique"
                        className="w-[97.2%] h-auto rounded-[40px]"
                    />
                </picture>

                {/* Texte superposé */}
                <div
                    className="absolute left-[5%] top-6 md:top-1/2 translate-y-0 md:-translate-y-1/2 max-w-[19rem] sm:max-w-[22rem] md:max-w-md">
                    <h1
                        className="font-medium text-2xl sm:text-3xl md:text-5xl xl:text-6xl
                                  leading-snug md:leading-tight xl:leading-[79px]
                                  tracking-[-0.02em] text-[#FCF8F1]
                                  [text-shadow:_2px_2px_0px_rgba(73,73,73,0.4)] lg:[text-shadow:none]"
                    >
                        L’esthétique
                        <br/> de la nouvelle
                        <br/> génération
                    </h1>

                    <p
                        className="mt-3 sm:mt-4 md:mt-6
                                  font-[Quicksand] font-medium
                                  text-xs sm:text-sm md:text-base
                                  leading-[1.4] tracking-[-0.01em] text-[#F6F6F6]
                                  [text-shadow:_1px_1px_0px_rgba(73,73,73,0.4)] lg:[text-shadow:none]"
                    >
                        Des machines conçues pour les professionnels exigeants, alliant
                        efficacité, rentabilité et design.
                    </p>

                    <Link
                        to="/products"
                        className="absolute top-0 right-[-1rem] md:static
                                   inline-flex items-center justify-center
                                   mt-0 md:mt-12
                                   rounded-full bg-white px-4 sm:px-5 md:px-6 py-2.5 md:py-3
                                   text-xs sm:text-sm font-medium text-black
                                   hover:bg-gray-100 transition"
                    >
                        <span className="block md:hidden">Nos technos</span>

                        <span className="hidden md:block">Nos technologies</span>

                        <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                </div>
            </section>

            {/*MACHINA*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                <div className="w-[94.6vw] flex justify-between">

                    <img
                        src="/home/machina/hero.png"
                        alt="Image 1"
                        className="w-[46%] h-auto hidden md:block"
                    />

                    {/* div4 : texte */}
                    <div className="flex items-center justify-start h-full">
                        <div className="max-w-[95vw] xl:max-w-[43vw] text-center xl:text-left">

                            <div className="font-semibold text-lg md:text-xl xl:text-3xl leading-snug text-[#0A0F1C]">
                                Des machines conçues pour l’excellence
                            </div>

                            <div className="text-lg md:text-xl font-normal text-[#0A0F1C]/80 py-12 md:my-6">
                                Découvrez une sélection de nos équipements haut de gamme, conçus pour allier performance,
                                innovation et rentabilité. <br/>
                                Chaque machine est pensée pour répondre aux besoins des professionnels
                                exigeants du secteur esthétique et médical.
                            </div>

                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center px-9 py-5 rounded-full bg-[#0B1524] text-[#FCF8F1] text-lg md:text-xl font-medium hover:brightness-110 transition"
                            >
                                Voir nos machines
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

            {/*BELGIUM*/}
            <section className="w-full flex justify-center my-25 xl:my-50">
                <div className="w-[97%] mx-auto">
                    {/* Bloc texte centré */}
                    <div className="text-center">
                        <p className="text-xl xl:text-3xl font-semibold mb-16">
                            100% Expertise Belge 🇧🇪, 100% Innovation
                        </p>

                        <h2 className="text-lg xl:text-xl text-[#0A0F1C] font-medium">
                            Innovation, expertise et service sur mesure
                        </h2>

                        <p className="mt-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                            bien plus qu'un équipement{" "}

                            <img src="/home/image-text-1.png" alt="" className="inline-block px-2"/>
                        </p>

                        <p className="text-lg xl:text-xl text-[#0A0F1C]/70">
                            un partenariat pour{" "}

                            <img src="/home/image-text-2.png" alt="" className="inline-block px-2"/>

                            vos projets esthétiques.
                        </p>
                    </div>
                </div>
            </section>

            {/*MADE IN KOREA*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                {/* Cartes */}
                <div className="grid gap-6 md:grid-cols-2 md:gap-8 w-[95vw]">
                    {/* Carte 1 */}
                    <figure className="relative overflow-hidden rounded-[1.5rem]">
                        <img
                            src="/home/image-1.png"
                            alt="Made in Korea"
                            className="w-full h-auto object-cover"
                        />
                    </figure>

                    {/* Carte 2 */}
                    <figure className="relative overflow-hidden rounded-[1.5rem]">
                        <img
                            src="/home/image-2.png"
                            alt="Technologies innovantes"
                            className="w-full h-auto object-cover"
                        />
                    </figure>
                </div>
            </section>

            {/*DEMO*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                <div className="w-[97.5%] mx-auto">
                    {/* En-tête */}
                    <header className="pl-6 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="max-w-[95vw] lg:max-w-[50vw] xl:max-w-[40vw]">
                            <p className="text-lg xl:text-3xl leading-11 text-[#0A0F1C]">
                                Découvrez des dispositifs esthétiques et médicaux {" "}
                                <span className="text-[#0A0F1C]/50">
                                    de pointe, alliant innovation, fiabilité et  expertise professionnelle pour des résultats d’exception
                                </span>
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="self-end md:self-center md:mt-1 mr-8 inline-flex items-center gap-2 text-[#0A0F1C] hover:opacity-80"
                        >
                            <span className="mt-8 ">VOIR PLUS</span>
                            <img src="/home/link.svg" alt="" className="hidden md:block w-12"/>
                        </Link>
                    </header>


                    {/* Carte visuelle Esthétique */}
                    <div className="mb-20">
                        {/* --- Titre animé uniquement mobile --- */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeEsthetique?.title + "-mobile"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="block md:hidden mb-4"
                            >
                                <h4 className="font-medium text-2xl leading-[1.2] text-[#0A0F1C] text-center">
                                    {activeEsthetique?.title}
                                </h4>
                            </motion.div>
                        </AnimatePresence>

                        <div className="relative overflow-hidden rounded-[3rem]">
                            <img src="/home/hero-2.png" alt="" className="w-full h-auto xl:h-[88vh] object-cover" />

                            {/* Produit animé */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeEsthetique?.image}
                                    src={activeEsthetique?.image}
                                    alt={activeEsthetique?.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute top-1/2 right-1/6 translate-y-[-30%] translate-x-[20%] max-h-[60%] max-w-[50%] w-auto object-contain pointer-events-none z-20"
                                />
                            </AnimatePresence>

                            {/* Contenu interne */}
                            <div className="absolute inset-0 px-6 md:px-10 xl:px-14 xl:pt-14 pb-14">
                                {/* Liste (desktop uniquement) */}
                                <ul className="space-y-8 hidden xl:block">
                                    {esthetiqueItems.map((it, i) => {
                                        const isActive = i === indexEsthetique;
                                        return (
                                            <li key={it.n}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIndexEsthetique(i)}
                                                    className={[
                                                        "w-full text-left transition flex items-center gap-5",
                                                        isActive ? "opacity-100" : "opacity-60 hover:opacity-80",
                                                    ].join(" ")}
                                                >
                                                    <span className="text-[#C7D3DA]/80">{it.n}</span>
                                                    <span className="text-[20px] text-white">{it.title}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Bloc texte animé desktop */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeEsthetique?.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="mt-20 hidden md:block"
                                    >
                                        <h4 className="text-white font-medium text-[3.5rem] leading-[1.2]">
                                            {activeEsthetique?.title}
                                        </h4>
                                        <p className="mt-5 max-w-[30rem] text-white/80 text-xl leading-[2]">
                                            {activeEsthetique?.desc}
                                        </p>
                                        <Link
                                            to={activeEsthetique?.to || "#"}
                                            className="mt-7 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-xl font-medium text-black hover:bg-white transition hidden xl:inline-flex"
                                        >
                                            Découvrir →
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Bloc texte animé mobile (desc + bouton à gauche) */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeEsthetique?.desc + "-mobile"}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="flex flex-row items-center justify-between gap-4 md:hidden"
                                    >
                                        {/* Description à gauche */}
                                        <div className="flex-1 z-20">
                                            <p className="text-white/80 text-[14px] leading-[2] pt-4
                                                          [text-shadow:_1px_1px_0px_rgba(73,73,73,0.4)]">
                                                {activeEsthetique?.desc}
                                            </p>
                                        </div>
                                        {/* (Image produit reste déjà affichée via motion.img au-dessus) */}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Carte visuelle Esthétique */}
                    <div>
                        {/* --- Titre animé uniquement mobile --- */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeAnalyse?.title + "-mobile"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="block md:hidden mb-4"
                            >
                                <h4 className="font-medium text-2xl leading-[1.2] text-[#0A0F1C] text-center">
                                    {activeAnalyse?.title}
                                </h4>
                            </motion.div>
                        </AnimatePresence>

                        <div className="relative overflow-hidden rounded-[1.5rem]">
                            <img src="/home/hero-2.png" alt="" className="w-full h-auto xl:h-[88vh] object-cover" />

                            {/* Produit animé */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeAnalyse?.image}
                                    src={activeAnalyse?.image}
                                    alt={activeAnalyse?.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute top-1/2 right-1/6 translate-y-[-30%] translate-x-[20%] max-h-[60%] max-w-[50%] w-auto object-contain pointer-events-none z-20"
                                />
                            </AnimatePresence>

                            {/* Contenu interne */}
                            <div className="absolute inset-0 px-6 md:px-10 xl:px-14 xl:pt-14 pb-14">
                                {/* Liste (desktop uniquement) */}
                                <ul className="space-y-4 hidden xl:block">
                                    {analyseItems.map((it, i) => {
                                        const isActive = i === indexAnalyse;
                                        return (
                                            <li key={it.n}>
                                                <button
                                                    type="button"
                                                    onClick={() => setIndexAnalyse(i)}
                                                    className={[
                                                        "w-full text-left transition flex items-center gap-5",
                                                        isActive ? "opacity-100" : "opacity-60 hover:opacity-80",
                                                    ].join(" ")}
                                                >
                                                    <span className="text-[#C7D3DA]/80">{it.n}</span>
                                                    <span className="text-[20px] text-white">{it.title}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Bloc texte animé desktop */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeAnalyse?.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="mt-20 hidden md:block"
                                    >
                                        <h4 className="text-white font-medium text-[3.5rem] leading-[1.2]">
                                            {activeAnalyse?.title}
                                        </h4>
                                        <p className="mt-5 max-w-[30rem] text-white/80 text-xl leading-[2]">
                                            {activeAnalyse?.desc}
                                        </p>
                                        <Link
                                            to={activeAnalyse?.to || "#"}
                                            className="mt-7 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-xl font-medium text-black hover:bg-white transition hidden xl:inline-flex"
                                        >
                                            Découvrir →
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Bloc texte animé mobile (desc + bouton à gauche) */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeAnalyse?.desc + "-mobile"}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="flex flex-row items-center justify-between gap-4 md:hidden"
                                    >
                                        {/* Description à gauche */}
                                        <div className="flex-1 z-20">
                                            <p className="text-white/80 text-[14px] leading-[2] pt-4
                                                          [text-shadow:_1px_1px_0px_rgba(73,73,73,0.4)]">
                                                {activeAnalyse?.desc}
                                            </p>
                                        </div>
                                        {/* (Image produit reste déjà affichée via motion.img au-dessus) */}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/*CERTIFICATE*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                <div className="w-[90vw] lg:w-[98vw] mx-auto flex flex-col gap-10">

                    {/* Partie haute : titre + lien */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <h3 className="text-xl xl:text-3xl leading-[1.35] text-[#0A0F1C] md:max-w-[60vw] xl:max-w-[35vw]">
                            <span className="font-normal">
                              AKOR Aesthetics redéfinit la technologie esthétique et élève les standards du soin.
                            </span>
                            <span className="font-normal text-[#0A0F1C]/50">
                              {" "}Nous concevons des solutions intelligentes qui allient innovation et performance terrain.
                            </span>
                        </h3>

                        <Link
                            to="/products"
                            className="self-end md:self-auto inline-flex items-center gap-2 text-[#0A0F1C] hover:opacity-80"
                        >
                            <span className="mt-8">EN SAVOIR PLUS</span>
                            <img src="/home/link.svg" alt="" className="hidden md:block"/>
                        </Link>
                    </div>

                    {/* Partie basse : liste + image */}
                    <div className="flex flex-col md:flex-row gap-10 mt-20">

                        {/* Colonne gauche */}
                        <div className="flex-1 flex flex-col justify-evenly gap-8 ml-none xl:ml-8">
                            {/* Item 1 */}
                            <div className="flex items-start gap-4 w-full">
                                <img src="/home/certificate.svg" alt="Certification" className="w-15"/>
                                <div className="text-[#0A0F1C]">
                                    <div className="font-medium text-xl xl:text-2xl">Certification CA</div>
                                    <div className="mt-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                                        Une garantie officielle de conformité et de sécurité, reconnue en Europe entière.
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4 w-full">
                                <img src="/home/diamond.svg" alt="Certification" className="w-15"/>
                                <div className="text-[#0A0F1C]">
                                    <div className="font-medium text-xl xl:text-2xl">Fabrication Coréenne</div>
                                    <div className="mt-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                                        Des équipements issus du savoir-faire technologique coréen, réputé mondialement.
                                    </div>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-4 w-full">
                                <img src="/home/heart.svg" alt="Certification" className="w-15"/>
                                <div className="text-[#0A0F1C]">
                                    <div className="font-medium text-xl xl:text-2xl">Expertise médicale</div>
                                    <div className="mt-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                                        Une expérience confirmée dans l’esthétique médicale et professionnelle avancée.
                                    </div>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex items-start gap-4 w-full">
                                <img src="/home/light.svg" alt="Certification" className="w-15"/>
                                <div className="text-[#0A0F1C]">
                                    <div className="font-medium text-xl xl:text-2xl">Innovation et fiabilité</div>
                                    <div className="mt-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                                        Des machines performantes et conçues pour durer, alliant puissance et précision.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite (image) */}
                        <div className="flex-1 rounded-[1.5rem] overflow-hidden hidden md:block">
                            <img
                                src="/home/image-6.png"
                                alt="Accueil AKOR Aesthetics"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/*EXPERTISE*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                <div className="w-[95%] mx-auto">
                    {/* Titre unique (début en gras) */}
                    <p className="text-center text-[#0A0F1C] text-3xl leading-10 max-w-[48rem] mx-auto">
                        Nous vous accompagnons avec expertise <span className="text-[#0A0F1C]/50">et conseils personnalisés, de la sélection de matériels <br/> innovants à la formation et au support</span>
                    </p>

                    {/* Grille de cartes — largeur contenue + images moins hautes */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-[92vw] mx-auto mt-20">

                        {/* Carte 1 */}
                        <article className="bg-[#FDFDFF] rounded-[40px] h-fit">
                            <div>
                                <img
                                    src="/home/expertise/image-1.jpg"
                                    alt="Conseil personnalisé"
                                    className="w-full h-full rounded-t-[40px] rounded-b-[30px]"
                                />
                            </div>
                            <div className="p-8 text-left">
                                <h4 className="text-lg sm:text-2xl text-[#0A0F1C] mb-8">
                                    Conseil personnalisé
                                </h4>
                                <p className="p-2 text-lg leading-relaxed text-[#0A0F1C]/60">
                                    Nous analysons vos besoins et vous guidons vers la solution la plus adaptée.
                                </p>
                            </div>
                        </article>

                        {/* Carte 2 */}
                        <article className="bg-[#FDFDFF] rounded-[40px] h-fit">
                            <div>
                                <img
                                    src="/home/expertise/image-2.jpg"
                                    alt="Conseil personnalisé"
                                    className="w-full h-full rounded-t-[40px] rounded-b-[30px]"
                                />
                            </div>
                            <div className="p-8 text-left">
                                <h4 className="text-lg sm:text-2xl text-[#0A0F1C] mb-8">
                                    Achat
                                </h4>
                                <p className="p-2 text-lg leading-relaxed text-[#0A0F1C]/60">
                                    Un accompagnement clair et transparent pour un investissement en toute confiance.
                                </p>
                            </div>
                        </article>

                        {/* Carte 3 */}
                        <article className="bg-[#FDFDFF] rounded-[40px] h-fit">
                            <div>
                                <img
                                    src="/home/expertise/image-3.jpg"
                                    alt="Conseil personnalisé"
                                    className="w-full h-full rounded-t-[40px] rounded-b-[30px]"
                                />
                            </div>
                            <div className="p-8 text-left">
                                <h4 className="text-lg sm:text-2xl text-[#0A0F1C] mb-8">
                                    Installation et formation
                                </h4>
                                <p className="p-2 text-lg leading-relaxed text-[#0A0F1C]/60">
                                    Mise en place rapide et formation complète pour une prise en main optimale.
                                </p>
                            </div>
                        </article>

                        {/* Carte 4 */}
                        <article className="bg-[#FDFDFF] rounded-[40px] h-fit">
                            <div>
                                <img
                                    src="/home/expertise/image-4.jpg"
                                    alt="Conseil personnalisé"
                                    className="w-full h-full rounded-t-[40px] rounded-b-[30px]"
                                />
                            </div>
                            <div className="p-8 text-left">
                                <h4 className="text-lg sm:text-2xl text-[#0A0F1C] mb-8">
                                    Service Après-Vente
                                </h4>
                                <p className="p-2 text-lg leading-relaxed text-[#0A0F1C]/60">
                                    Un suivi réactif et durable pour assurer la performance de vos équipements.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/*EQUIPMENT*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64">
                <div className="w-[100vw] mx-auto">
                    {/* Titre */}
                    <div className="text-center max-w-[95vw] lg:max-w-[40vw] mx-auto">
                        <p className="text-[#0A0F1C] text-3xl leading-10">
                            Découvrez l’excellence de nos équipements, <br />
                            <span className="text-[#0A0F1C]/60">
                              des technologies esthétiques conçues pour durer et performer.
                            </span>
                        </p>
                    </div>

                    {/* espace */}
                    <div className="mt-20"></div>

                    {/* Ligne 1 */}
                    <div className="marquee">
                        <ul className="marquee-content">
                            {[1, 2, 3, 4].map((i) => (
                                <li
                                    key={`r1-${i}`}
                                    className="flex-none w-[26rem] h-[12rem] rounded-[1.25rem] overflow-hidden"
                                >
                                    <img
                                        src={`/home/equipment/image-${i}.jpg`}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* espace */}
                    <div className="mt-6"></div>

                    {/* Ligne 2 (inverse) */}
                    <div className="marquee reverse">
                        <ul className="marquee-content">
                            {[5, 6, 7, 8].map((i) => (
                                <li
                                    key={`r2-${i}`}
                                    className="flex-none w-[26rem] h-[12rem] rounded-[1.25rem] overflow-hidden"
                                >
                                    <img
                                        src={`/home/equipment/image-${i}.jpg`}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Styles */}
                <style>{`
                    :root {
                      --marquee-width: 100vw;
                      --marquee-height: 12rem;
                      --marquee-elements-displayed: 4; /* combien d'éléments visibles */
                    }
            
                    .marquee {
                      width: var(--marquee-width);
                      overflow: hidden;
                      position: relative;
                      height: var(--marquee-height);
                    }
            
                    .marquee-content {
                      list-style: none;
                      display: flex;
                      gap: 1.5rem;
                      animation: scrolling 35s linear infinite;
                    }
            
                    .marquee.reverse .marquee-content {
                      animation-direction: reverse;
                    }
            
                    @keyframes scrolling {
                      from { transform: translateX(0); }
                      to   { transform: translateX(calc(-1 * var(--marquee-width))); }
                    }
                `}</style>
            </section>

            {/*BOOK A DEMO*/}
            <section className="w-full flex justify-center mt-32 xl:mt-64 hidden xl:block">
                <div className="w-full mx-auto bg-[#0A0F1C]/30">
                    <div className="flex items-center justify-between py-12">
                        {/* gauche */}
                        <a href="#" className="uppercase tracking-[0.2em] text-[#F9F9F9] text-3xl xl:text-6xl">
                            Instagram
                        </a>

                        {/* étoile */}
                        <img src="/home/star.png" alt=""/>

                        {/* centre */}
                        <div className="text-center">
                            <button className="uppercase underline underline-offset-20 text-[#F9F9F9] font-semibold text-3xl xl:text-6xl">
                                Book une demo
                            </button>
                        </div>

                        {/* étoile */}
                        <img src="/home/star.png" alt=""/>

                        {/* droite */}
                        <a href="#" className="uppercase tracking-[0.2em] text-[#F9F9F9] text-3xl xl:text-6xl">
                            Linkedin
                        </a>
                    </div>
                </div>
            </section>

            {/*DEPOSITION*/}
            <Deposition />

            {/*CONTACT*/}
            <Contact />
        </>
    );
}

export default Home;