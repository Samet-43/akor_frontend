import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { useMemo } from "react";

function Deposition() {
    const testimonials = useMemo(
        () => ({
            col1: [
                {
                    id: 1,
                    logo: "/deposition/logo/image-1.png",
                    quote:
                        "Demo Smart+ nous permet de réaliser des diagnostics cutanés précis et rapides pour mieux servir nos clients.",
                    profile: "/deposition/profile/image-1.png",
                },
                {
                    id: 2,
                    logo: "/deposition/logo/image-2.png",
                    quote:
                        "Les machines Akor optimisent notre temps et permettent de nous concentrer pleinement sur nos patients.",
                    profile: "/deposition/profile/image-2.png",
                },
                {
                    id: 3,
                    logo: "/deposition/logo/image-3.png",
                    quote:
                        "DermoSmart simplifie nos analyses capillaires et cutanées, améliorant la qualité de chaque soin délivré.",
                    profile: "/deposition/profile/image-3.png",
                },
            ],
            col2: [
                {
                    id: 4,
                    logo: "/deposition/logo/image-4.png",
                    quote:
                        "L’installation et la formation sont rapides, et l’équipe Akor reste toujours disponible pour nous aider.",
                    profile: "/deposition/profile/image-4.png",
                },
                {
                    id: 5,
                    logo: "/deposition/logo/image-5.png",
                    quote:
                        "Nos clients remarquent la différence grâce à la performance et la qualité exceptionnelle de chaque machine.",
                    profile: "/deposition/profile/image-5.png",
                },
                {
                    id: 6,
                    logo: "/deposition/logo/image-6.png",
                    quote:
                        "Chaque appareil est intuitif et fiable, rendant nos procédures quotidiennes plus fluides et efficaces.",
                    profile: "/deposition/profile/image-6.png",
                },
            ],
            col3: [
                {
                    id: 7,
                    logo: "/deposition/logo/image-7.png",
                    quote:
                        "Chaque équipement nous aide à offrir de meilleurs résultats tout en simplifiant notre organisation quotidienne.",
                    profile: "/deposition/profile/image-7.png",
                },
                {
                    id: 8,
                    logo: "/deposition/logo/image-8.png",
                    quote:
                        "Le service après-vente est réactif et efficace, ce qui nous rassure dans notre pratique quotidienne.",
                    profile: "/deposition/profile/image-8.png",
                },
                {
                    id: 9,
                    logo: "/deposition/logo/image-9.png",
                    quote:
                        "Grâce à Akor, nous restons à la pointe de l’innovation avec des machines fiables et performantes.",
                    profile: "/deposition/profile/image-9.png",
                },
            ],
        }),
        []
    );

    return (
        <section className="w-full flex justify-center mt-64">
            <div className="w-[90vw] mx-auto flex flex-col items-center">
                {/* Texte au-dessus */}
                <div className="text-center max-w-[48rem] mb-16">
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#0A0F1C] flex items-center justify-center gap-2">
                        Témoignages de professionnels
                        <img src="/deposition/image-text-1.png" alt="icon" />
                    </h3>
                    <p className="mt-2 text-xl md:text-2xl xl:text-3xl font-semibold text-[#0A0F1C]/50">
                        qui ont fait le choix de l’excellence et de la performance
                    </p>
                </div>

                {/* Version desktop (grille) */}
                <div className="hidden xl:grid w-full grid-cols-3 gap-12 mt-8">
                    {Object.values(testimonials).map((col, colIdx) => (
                        <div
                            key={colIdx}
                            className={`space-y-8 ${colIdx !== 1 ? "xl:mt-12" : ""}`}
                        >
                            {col.map((item) => (
                                <article
                                    key={item.id}
                                    className="bg-[#ffffff]/80 rounded-2xl p-8"
                                >
                                    <img src={item.logo} alt="" />
                                    <p className="text-base md:text-lg text-[#535862] leading-relaxed mt-6 mb-10">
                                        “{item.quote}”
                                    </p>
                                    <div className="flex items-center">
                                        <img src={item.profile} alt="" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Version mobile (Disclosure) */}
                <div className="block xl:hidden w-full mt-8 space-y-4">
                    {Object.values(testimonials).flat().map((item) => (
                        <Disclosure key={item.id}>
                            {({ open }) => (
                                <div className="border border-gray-400 rounded-xl">
                                    <DisclosureButton className="flex justify-between items-center w-full px-4 py-3 font-semibold text-[#0A0F1C]">
                                        <span>
                                          <img src={item.logo} alt="" className="h-6 inline-block mr-2" />
                                          Témoignage #{item.id}
                                        </span>
                                        <span>{open ? "-" : "+"}</span>
                                    </DisclosureButton>
                                    <DisclosurePanel className="px-4 py-3">
                                        <p className="text-sm text-[#535862] leading-relaxed mb-6">
                                            “{item.quote}”
                                        </p>
                                        <img src={item.profile} alt="" />
                                    </DisclosurePanel>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Deposition;
