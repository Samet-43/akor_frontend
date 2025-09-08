function AboutUs() {
    return (
        <>
            <section className="relative w-full bg-[#f6f6f6]">
                {/* Image */}
                <img
                    src="/about-us/hero-1.png"
                    alt="About us hero"
                    className="w-full h-auto"
                />

                {/* Texte superposé */}
                <div className="absolute inset-0 flex items-center px-6 md:px-12">
                    <div className="max-w-xl text-left">
                        <h1 className="text-3xl md:text-5xl font-medium text-[#0a0e17] leading-tight">
                            Leader des équipements esthétiques en Europe
                        </h1>

                        <p className="mt-5 text-sm md:text-base text-[#0a0e17]/80">
                            Tout pour aider les professionnels de l’esthétique à se concentrer sur ce qui
                            compte le plus : leurs clients. Et nous en sommes fiers.
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex h-11 px-6 mt-7 rounded-full bg-[#0a0e17] text-white text-sm items-center justify-center"
                        >
                            Contactez-nous
                        </a>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#F6F6F6] py-10 md:py-14">
                <div className="mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 items-stretch">

                        {/* Bloc texte */}
                        <div className="bg-[#EFEEEE] rounded-[2rem] p-6 md:p-8 lg:p-10 flex items-center">
                            <div className="max-w-[70%]">

                                <h2 className="text-xl md:text-2xl font-medium text-[#0a0e17]">
                                    AKOR Aesthetics redéfinit la technologie
                                    esthétique et élève les standards du soin.
                                </h2>

                                <ul className="space-y-5 md:space-y-6 text-base text-[#0a0e17]/80 leading-relaxed">
                                    <li className="flex gap-4">
                                        {/* icône 1 */}
                                        <span className="shrink-0 mt-1">

                                        <img src="/about-us/circle.svg" alt=""/>
                                    </span>
                                        <p>
                                            Notre mission est d’accompagner les professionnels de l’esthétique
                                            avec des équipements performants, fiables et simples d’utilisation.
                                        </p>
                                    </li>

                                    <li className="flex gap-4">
                                        {/* icône 2 */}
                                        <span className="shrink-0 mt-1">

                                        <img src="/about-us/eye.svg" alt=""/>
                                    </span>
                                        <p>
                                            Nous visons à transformer chaque diagnostic et traitement en une
                                            expérience précise, personnalisée et durable, pour sublimer la confiance
                                            et le bien-être de leurs patients.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image droite (remplace le src si besoin) */}
                        <div className="rounded-[2rem] overflow-hidden">
                            <img
                                src="/about-us/hero-2.png"
                                alt="Équipement esthétique"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>


            <section className="w-full bg-[#f6f6f6] py-20 mt-32 mb-32">
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center px-6">

                    <div>
                        <p className="text-3xl font-semibold text-[#0a0e17]">+1k</p>
                        <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                            Machines installées<br />avec succès
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-semibold text-[#0a0e17]">+97%</p>
                        <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                            Des pro constatent un<br />retour sur investissement rapide
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-semibold text-[#0a0e17]">+15</p>
                        <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                            D’expertise dans la<br />technologie esthétique
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-semibold text-[#0a0e17]">+500</p>
                        <p className="mt-2 text-sm uppercase tracking-wide text-gray-600">
                            Cliniques & instituts –<br />équipés par Akor
                        </p>
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#F6F6F6] py-10 md:py-14">
                <div className="mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 items-stretch">

                        {/* Bloc texte */}
                        <div className="bg-[#EFEEEE] rounded-[2rem] p-6 md:p-8 lg:p-10 flex items-center">
                            <div className="max-w-[70%]">

                                <h2 className="text-xl md:text-2xl font-medium text-[#0a0e17]">
                                    Tout pour aider les professionnels de l’esthétique à se concentrer sur ce qui compte le plus : leurs clients.
                                </h2>

                                <ul className="space-y-5 md:space-y-6 text-base text-[#0a0e17]/80 leading-relaxed mt-20">
                                    <li className="flex gap-4">
                                        <p>
                                            Chez AKOR, nous savons que la priorité des professionnels de l’esthétique est de
                                            délivrer des soins de qualité et de bâtir une relation de confiance avec leurs clients.

                                        </p>
                                    </li>

                                    <li className="flex gap-4">
                                        {/* icône 2 */}
                                        <p>
                                            C’est pourquoi nous proposons des équipements esthétiques performants,
                                            fiables et simples d’utilisation, afin de vous libérer des contraintes
                                            techniques et vous permettre de vous concentrer sur l’essentiel :
                                            l’expérience et la satisfaction de vos patients.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image droite (remplace le src si besoin) */}
                        <div className="rounded-[2rem] overflow-hidden">
                            <img
                                src="/about-us/hero-3.png"
                                alt="Équipement esthétique"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full bg-[#f6f6f6] mt-32 mb-32 flex justify-center">
                <img src="/about-us/partners.png" alt="" style={{ width: '100%' }} />
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
    )
}

export default AboutUs
