import Contact from "../../components/shared/contact/Contact.tsx"
import Deposition from "../../components/shared/deposition/Deposition.tsx"

function AboutUs() {
    return (
        <>
            <section className="relative w-full">
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

            <section className="w-full py-10 md:py-14">
                <div className="mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 items-stretch">

                        {/* Bloc texte */}
                        <div className="bg-[#EFEEEE] rounded-[2rem] p-6 md:p-8 lg:p-10 flex items-center">
                            <div className="max-w-[70%]">

                                <h2 className="text-xl md:text-2xl font-medium text-[#0a0e17] mb-20">
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

            <section className="w-full py-20 mt-20 mb-20">
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

            <section className="w-full py-16 lg:py-24">
                <div className="px-6 lg:px-12 xl:px-40 text-center">

                    {/* Conteneur vidéo responsif */}
                    <div className="relative w-full max-w-7xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/vaNSulW1_l8?si=v2XgjV6vIsbtni73"
                            title="Présentation produit"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>


            <section className="w-full py-10 md:py-14">
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

            <section className="w-full mt-32 mb-32 flex justify-center">
                <img src="/about-us/partners.png" alt="" style={{ width: '100%' }} />
            </section>

            <section className="w-full mt-32 mb-32 flex justify-center">
                <img src="/about-us/world.png" alt="" style={{ width: '100%' }} />
            </section>

            <section className="w-full">
                <div>
                    <div className="grid xl:grid-cols-2 gap-10 items-center rounded-[2rem] p-8 lg:p-12">

                            <img
                                src="/about-us/hero-4.png"
                                alt="Clients accompagnés par AKOR"
                                className="w-full h-full object-cover"
                            />

                        <div className="bg-[#EFEEEE] rounded-[2.5rem] h-full flex flex-col justify-center p-8 lg:p-12">
                            <h2 className="text-[#0A0F1C] text-2xl lg:text-3xl font-semibold mb-6">
                                Nos axes d’excellence : Découvrez comment AKOR accompagne ses clients à chaque étape
                            </h2>
                            <p className="text-[#0A0F1C]/70 leading-relaxed mb-4 mt-8">
                                Chez AKOR, nous mettons l’accent sur deux axes essentiels pour garantir votre
                                satisfaction. Marketing : nous vous aidons à valoriser vos services et à promouvoir vos
                                soins grâce à des solutions adaptées et efficaces.
                            </p>
                            <p className="text-[#0A0F1C]/70 leading-relaxed">
                                SAV / Garantie : nous assurons un suivi complet et une assistance technique rapide pour
                                que vos équipements restent performants et fiables à long terme.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Deposition />
            <Contact />
        </>
    )
}

export default AboutUs
