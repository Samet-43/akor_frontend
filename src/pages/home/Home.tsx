import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {

    const items = useMemo(
        () => [
            {
                n: "04",
                title: "Sponge Device",
                desc:
                    "Nettoyage profond et hydratation de la peau grâce à des protocoles précis et non invasifs.",
                to: "/product/sponge",
            },
            {
                n: "05",
                title: "DeepWave",
                desc:
                    "Technologie par ondes pour stimuler le derme et améliorer visiblement la fermeté.",
                to: "/product/deepwave",
            },
            {
                n: "06",
                title: "Plamon",
                desc:
                    "Analyse haute précision de la peau et du cuir chevelu avec diagnostic détaillé et recommandations personnalisées.",
                to: "/product/plamon",
            },
        ],
        []
    );

    const [index, setIndex] = useState(2); // 06 Plamon par défaut (comme la maquette)
    const hoverRef = useRef(false);

    // Auto-rotation (pause au survol)
    useEffect(() => {
        const id = setInterval(() => {
            if (!hoverRef.current) {
                setIndex((i) => (i + 1) % items.length);
            }
        }, 3000);
        return () => clearInterval(id);
    }, [items.length]);

    const active = items[index];


    return (
        <>
            <section className="relative w-full flex justify-center">
                {/* Image hero */}
                <img
                    src="/home/hero-1.png"
                    alt="Machine esthétique"
                    className="w-[95%] h-auto"
                />

                {/* Assombrissement léger pour mobile uniquement (lisibilité) */}
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

            <section className="w-full flex justify-center my-32">
                <div className="w-[97%] mx-auto">
                    {/* Bloc texte centré */}
                    <div className="text-center">
                        <h2
                            className="
                                        font-[Montserrat] font-normal
                                        text-[26px] leading-[40.32px] tracking-[-0.03em]
                                        text-[#0A0F1C]
                                      "
                        >
                            Innovation, expertise et service sur mesure
                        </h2>

                        <p
                            className="
                                        mt-2 font-[Montserrat] font-normal
                                        text-[26px] leading-[40.32px] tracking-[-0.03em]
                                        text-[#0A0F1C]/70
                                      "
                        >
                            bien plus qu'un équipement{" "}
                            <img
                                src="/home/image-text-1.png"
                                alt=""
                                className="inline-block px-2"
                            />

                        </p>

                        <p
                            className="
                                        font-[Montserrat] font-normal
                                        text-[26px] leading-[40.32px] tracking-[-0.03em]
                                        text-[#0A0F1C]/70
                                      "
                        >
                            un partenariat pour{" "}
                            <img
                                src="/home/image-text-2.png"
                                alt=""
                                className="inline-block px-2"
                            />
                            vos projets esthétiques.
                        </p>
                    </div>

                    {/* Espace de 128px */}
                    <div className="mt-32"></div>

                    {/* Cartes */}
                    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
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
                </div>
            </section>

            <section className="w-full flex justify-center mt-64">
                <div className="w-[95%] mx-auto">
                    {/* En-tête */}
                    <header className="mb-10 flex items-start justify-between gap-6">
                        <div className="max-w-[40rem]">
                            <h3 className="font-[Montserrat] font-medium text-[28px] leading-[1.25] text-[#0A0F1C]">
                                Découvrez des dispositifs esthétiques et médicaux
                            </h3>
                            <p className="mt-2 text-[#0A0F1C]/70">
                                Découvrez des dispositifs esthétiques et médicaux de pointe, alliant innovation,
                                fiabilité et expertise professionnelle pour des résultats d’exception
                            </p>
                        </div>

                        <Link
                            to="/product"
                            className="self-start mt-1 inline-flex items-center gap-2 text-[#0A0F1C] text-sm hover:opacity-80"
                        >
                            VOIR PLUS
                            <img src="/home/link.svg" alt="" className="h-5 w-5" />
                        </Link>
                    </header>

                    {/* Carte visuelle */}
                    <div
                        className="relative overflow-hidden rounded-[1.5rem]"
                        // Hover actif seulement en desktop
                        onMouseEnter={() => { if (window.innerWidth >= 1024) hoverRef.current = true; }}
                        onMouseLeave={() => { if (window.innerWidth >= 1024) hoverRef.current = false; }}
                    >
                        {/* Image */}
                        <img src="/home/hero-2.png" alt="" className="w-full h-auto object-cover" />

                        {/* Dégradé */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0F1C]/60 via-[#0A0F1C]/35 to-transparent" />

                        {/* Contenu superposé */}
                        <div className="absolute inset-0 px-10 lg:px-14 pt-14 pb-14">
                            {/* LISTE visible uniquement en desktop */}
                            <ul className="space-y-4 hidden lg:block">
                                {items.map((it, i) => {
                                    const isActive = i === index;
                                    return (
                                        <li key={it.n}>
                                            <button
                                                type="button"
                                                onClick={() => setIndex(i)}
                                                className={[
                                                    "w-full text-left transition flex items-center gap-5",
                                                    isActive ? "opacity-100" : "opacity-60 hover:opacity-80",
                                                ].join(" ")}
                                            >
                                                <span className="text-[#C7D3DA]/80 tabular-nums">{it.n}</span>
                                                <span className="font-[Montserrat] text-[20px] text-white">
                    {it.title}
                  </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Bloc actif (visible partout) */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.title}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="mt-20"
                                >
                                    <h4 className="text-white font-[Montserrat] font-medium text-[3rem] leading-[1.2]">
                                        {active.title}
                                    </h4>

                                    <p className="mt-5 max-w-[18rem] text-white/80 text-[14px] leading-[2]">
                                        {active.desc}
                                    </p>

                                    <Link
                                        to={active.to}
                                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-[13px] font-medium text-black hover:bg-white transition"
                                    >
                                        Découvrir <span aria-hidden className="ml-2">→</span>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center mt-64">
                <div className="w-[95%] mx-auto">
                    {/* Titre unique (début en gras) */}
                    <p className="text-center text-[#0A0F1C] font-[Montserrat] text-[22px] sm:text-[24px] leading-[1.5] max-w-[48rem] mx-auto">
                        <span className="font-medium">Nous vous accompagnons avec expertise</span> et conseils personnalisés, de la sélection de matériels innovants à la formation et au support
                    </p>

                    {/* Grille de cartes — largeur contenue + images moins hautes */}
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
                        {/* Carte 1 */}
                        <article className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                            <div className="h-[180px] md:h-[200px] lg:h-[210px]">
                                <img
                                    src="/home/image-3.png"
                                    alt="Conseil personnalisé"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="font-[Montserrat] font-medium text-[16px] sm:text-[17px] text-[#0A0F1C]">
                                    Conseil personnalisé
                                </h4>
                                <p className="mt-2 text-[14px] leading-relaxed text-[#0A0F1C]/70">
                                    Analyse précise de vos besoins pour vous recommander les solutions
                                    esthétiques les mieux adaptées.
                                </p>
                            </div>
                        </article>

                        {/* Carte 2 */}
                        <article className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                            <div className="h-[180px] md:h-[200px] lg:h-[210px]">
                                <img
                                    src="/home/image-4.png"
                                    alt="Accompagnement complet"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="font-[Montserrat] font-medium text-[16px] sm:text-[17px] text-[#0A0F1C]">
                                    Accompagnement complet
                                </h4>
                                <p className="mt-2 text-[14px] leading-relaxed text-[#0A0F1C]/70">
                                    Nous vous offrons un accompagnement complet, alliant expertise
                                    technique et conseil personnalisé.
                                </p>
                            </div>
                        </article>

                        {/* Carte 3 */}
                        <article className="bg-white rounded-[1.25rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                            <div className="h-[180px] md:h-[200px] lg:h-[210px]">
                                <img
                                    src="/home/image-5.png"
                                    alt="Service Après-Vente"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <h4 className="font-[Montserrat] font-medium text-[16px] sm:text-[17px] text-[#0A0F1C]">
                                    Service Après-Vente
                                </h4>
                                <p className="mt-2 text-[14px] leading-relaxed text-[#0A0F1C]/70">
                                    Intervention rapide et suivi dédié pour assurer la pérennité et la
                                    performance de vos appareils.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center mt-64">
                <div className="w-[95%] mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
                    {/* Colonne gauche : titres + texte + CTA */}
                    <div className="max-w-[44rem]">
                        <h3 className="font-[Montserrat] text-[28px] leading-[1.35] text-[#0A0F1C]">
                            <span className="font-medium">
                              AKOR Aesthetics redéfinit la technologie esthétique et élève les standards du soin.
                            </span>{" "}
                            <span className="font-normal text-[#0A0F1C]/65">
                              Nous concevons des solutions intelligentes qui allient innovation et performance terrain.
                            </span>
                        </h3>

                        <p className="mt-10 text-[15px] leading-[1.8] text-[#0A0F1C]/70 max-w-[40rem]">
                            Notre mission est de créer des dispositifs intelligents, performants et durables, au
                            service d’une expérience client réinventée — que ce soit en cabinet médical ou en
                            centre de beauté.
                        </p>

                        <button
                            className="mt-10 inline-flex items-center justify-center rounded-full px-6 py-3
                                        bg-[#0B1524] text-white text-sm font-medium hover:brightness-110 transition"
                        >
                            En savoir plus
                        </button>
                    </div>

                    {/* Colonne droite : image arrondie */}
                    <div className="rounded-[1.5rem] overflow-hidden">
                        <img
                            src="/home/image-6.png"
                            alt="Accueil AKOR Aesthetics"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full flex justify-center mb-32 mt-64">
                <div className="relative w-[95%] rounded-[1.5rem] overflow-hidden">
                    {/* Image */}
                    <img
                        src="/home/hero-3.png"
                        alt="Médecins"
                        className="w-full h-auto object-cover"
                    />

                    {/* Texte superposé */}
                    <div className="absolute inset-0 flex items-center justify-end pr-10">
                        <div className="text-right max-w-md">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
                                Boostez votre activité avec
                                <br /> nos solutions intelligentes.
                            </h2>

                            <button
                                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-gray-100 transition"
                            >
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
