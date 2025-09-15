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
        }, 3000);
        return () => clearInterval(id);
    }, [esthetiqueItems.length]);

    // Auto-rotation Analyse
    useEffect(() => {
        const id = setInterval(() => {
            if (!hoverRef.current && analyseItems.length > 0) {
                setIndexAnalyse((i) => (i + 1) % analyseItems.length);
            }
        }, 3000);
        return () => clearInterval(id);
    }, [analyseItems.length]);

    const activeEsthetique = esthetiqueItems[indexEsthetique];
    const activeAnalyse = analyseItems[indexAnalyse];

    return (
        <>
            {/*HERO*/}
            <section className="relative w-full flex justify-center">
                {/* Image hero */}
                <img
                    src="/home/hero-1.png"
                    alt="Machine esthétique"
                    className="w-[95%] h-auto"
                />

                {/* Assombrissement léger pour mobile uniquement */}
                <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black/30 to-transparent pointer-events-none rounded-[1rem]"></div>

                {/* Texte superposé */}
                <div
                    className="
                                absolute left-[5%]
                                top-6 md:top-1/2
                                translate-y-0 md:-translate-y-1/2
                                max-w-[19rem] sm:max-w-[22rem] md:max-w-md
                              "
                >
                    <h1
                        className="
                                  font-[Montserrat] font-medium
                                  text-2xl sm:text-3xl md:text-5xl lg:text-[64px]
                                  leading-snug md:leading-tight lg:leading-[79px]
                                  tracking-[-0.02em] text-[#FCF8F1]
                                "
                    >
                        L’esthétique
                        <br /> de la nouvelle
                        <br /> génération
                    </h1>

                    <p
                        className="
                                  mt-3 sm:mt-4 md:mt-6
                                  font-[Quicksand] font-medium
                                  text-xs sm:text-sm md:text-base
                                  leading-[1.4] tracking-[-0.01em] text-[#F6F6F6]
                                  pr-6
                                "
                    >
                        Des machines conçues pour les professionnels exigeants, alliant
                        efficacité, rentabilité et design.
                    </p>

                    <Link
                        to="/product"
                        className="
                                  inline-flex items-center justify-center
                                  mt-5 sm:mt-6 md:mt-12
                                  rounded-full bg-white px-4 sm:px-5 md:px-6 py-2.5 md:py-3
                                  text-xs sm:text-sm font-medium text-black
                                  hover:bg-gray-100 transition
                                "
                    >
                        Nos technologies
                        <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                </div>
            </section>

            {/*MACHINA*/}
            <section className="w-full flex justify-center mt-64">
                <div className="w-[90vw] mx-auto grid grid-cols-4 grid-rows-2 gap-6 xl:h-[40rem] h-[34rem]">
                    {/* Images */}
                    <div className="rounded-[3rem] overflow-hidden">
                        <img src="/home/machina/image-1.png" alt="Image 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-[3rem] overflow-hidden col-start-1 row-start-2">
                        <img src="/home/machina/image-2.png" alt="Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="row-span-2 col-start-2 row-start-1 rounded-[3rem] overflow-hidden">
                        <img src="/home/machina/image-3.png" alt="Image 3" className="w-full h-full object-cover" />
                    </div>

                    {/* Texte */}
                    <div className="col-span-2 row-span-2 col-start-3 row-start-1 flex items-center justify-center h-full">
                        <div className="max-w-xl space-y-6">
                            <div className="font-semibold text-3xl xl:text-4xl leading-snug text-[#0A0F1C]">
                                Des machines conçues pour l’excellence
                            </div>
                            <div className="text-base xl:text-lg leading-relaxed text-[#0A0F1C]/70 my-12">
                                Découvrez une sélection de nos équipements haut de gamme, conçus pour allier performance,
                                innovation et rentabilité.
                            </div>
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#0B1524] text-white text-base font-medium hover:brightness-110 transition"
                            >
                                Voir nos machines
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*DEMO*/}
            <section className="w-full flex justify-center mt-64">
                <div className="w-[90%] mx-auto">
                    {/* En-tête */}
                    <header className="mb-10 flex items-start justify-between gap-6">
                        <div className="max-w-[40rem]">
                            <p className="font-[Montserrat] text-2xl leading-9 text-[#0A0F1C]">
                                Découvrez des dispositifs esthétiques et médicaux <br/>
                                <span className="text-[#0A0F1C]/50">
                                    de pointe, alliant innovation, fiabilité et expertise professionnelle
                                </span>
                            </p>
                        </div>
                        <Link
                            to="/product"
                            className="self-center mt-1 inline-flex items-center gap-2 text-[#0A0F1C] text-lg hover:opacity-80"
                        >
                            VOIR PLUS
                            <img src="/home/link.svg" alt=""/>
                        </Link>
                    </header>

                    {/* Carte visuelle Esthétique */}
                    <div className="relative overflow-hidden rounded-[1.5rem]">
                        <img src="/home/hero-2.png" alt="" className="w-full h-auto object-cover" />
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeEsthetique?.image}
                                src={activeEsthetique?.image}
                                alt={activeEsthetique?.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute top-1/2 left-1/2 translate-y-[-30%] translate-x-[20%] max-h-[60%] max-w-[50%] w-auto object-contain pointer-events-none z-20"
                            />
                        </AnimatePresence>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/60 via-[#0A0F1C]/35 to-transparent" />
                        <div className="absolute inset-0 px-10 xl:px-14 xl:pt-14 pb-14">
                            <ul className="space-y-4 hidden xl:block">
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
                                                <span className="font-[Montserrat] text-[20px] text-white">{it.title}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeEsthetique?.title}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="mt-20"
                                >
                                    <h4 className="text-white font-[Montserrat] font-medium text-[3rem] leading-[1.2]">
                                        {activeEsthetique?.title}
                                    </h4>
                                    <p className="mt-5 max-w-[18rem] text-white/80 text-[14px] leading-[2]">
                                        {activeEsthetique?.desc}
                                    </p>
                                    <Link
                                        to={activeEsthetique?.to || "#"}
                                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-[13px] font-medium text-black hover:bg-white transition"
                                    >
                                        Découvrir →
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Carte visuelle Analyse */}
                    <div className="relative overflow-hidden rounded-[1.5rem] mt-32">
                        <img src="/home/hero-2.png" alt="" className="w-full h-auto object-cover" />
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeAnalyse?.image}
                                src={activeAnalyse?.image}
                                alt={activeAnalyse?.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute top-1/2 left-1/2 translate-y-[-30%] translate-x-[20%] max-h-[60%] max-w-[50%] w-auto object-contain pointer-events-none z-20"
                            />
                        </AnimatePresence>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/60 via-[#0A0F1C]/35 to-transparent" />
                        <div className="absolute inset-0 px-10 xl:px-14 xl:pt-14 pb-14">
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
                                                <span className="font-[Montserrat] text-[20px] text-white">{it.title}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeAnalyse?.title}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="mt-20"
                                >
                                    <h4 className="text-white font-[Montserrat] font-medium text-[3rem] leading-[1.2]">
                                        {activeAnalyse?.title}
                                    </h4>
                                    <p className="mt-5 max-w-[18rem] text-white/80 text-[14px] leading-[2]">
                                        {activeAnalyse?.desc}
                                    </p>
                                    <Link
                                        to={activeAnalyse?.to || "#"}
                                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-[13px] font-medium text-black hover:bg-white transition"
                                    >
                                        Découvrir →
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
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
