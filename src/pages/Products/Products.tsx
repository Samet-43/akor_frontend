import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../data/products.ts";
import Contact from "../../components/shared/contact/Contact.tsx"

function Products() {

    const [activeList, setActiveList] = useState<"list1" | "list2">("list1");

    // Les deux listes
    const lists = useMemo(
        () => ({
            list1: [
                "Analyse cutanée et capillaire",
                "Machine esthétique",
            ],
            list2: [
                "Centres esthétiques",
                "Marques",
                "Hôtels & Spa",
                "Magasins spécialisés",
                "Pharmacies / Parapharmacies",
                "Salons de coiffure",
                "Événementiel",
                "Autres",
            ],
        }),
        []
    );

    return (
        <>
            {/*HERO*/}
            <section className="relative w-full ">
                {/* Fond */}
                <img
                    src="/products/bg-text.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full opacity-40 pointer-events-none select-none"
                />

                {/* Contenu centré */}
                <div className="relative flex flex-col items-center justify-center px-6 lg:px-12 xl:px-40 py-16 lg:py-24 xl:py-28 min-h-[50vh] lg:min-h-[60vh]">
                    <div className="text-center font-medium">
                        {/* Ligne 1 (gris) */}
                        <p className="text-[#0A0F1C]/50 tracking-[-0.02em]
                                      text-2xl lg:text-4xl xl:text-5xl leading-tight">
                            Découvrez notre gamme
                        </p>

                        {/* Ligne 2 (foncé) */}
                        <p className="text-[#0A0F1C] tracking-[-0.02em]
                                      text-2xl lg:text-4xl xl:text-5xl leading-tight">
                            d’équipements esthétiques
                        </p>

                        {/* Ligne 3 (gris + image inline) */}
                        <p className="text-[#0A0F1C]/50 tracking-[-0.02em]
                                      text-2xl lg:text-4xl xl:text-5xl leading-tight mt-1">
                            innovants{" "}
                            <img
                                src="/products/image-text.png"
                                alt=""
                                className="inline-block align-middle h-8 lg:h-10 xl:h-12 rounded-full ml-2"
                            />
                        </p>
                    </div>

                    <div className="mt-20 mb-10">
                        <button
                            onClick={() =>
                                setActiveList(activeList === "list1" ? "list2" : "list1")
                        }
                            className="px-4 py-2 border border-[#0A0F1C] rounded-full text-[#0A0F1C] hover:bg-[#0A0F1C] hover:text-white transition"
                        >
                            ⇆
                        </button>
                    </div>

                    <div className="space-y-8">
                        {/* Bouton switch ⇆ */}

                        {/* Liste affichée */}
                        <div className="flex flex-wrap gap-4">
                            {lists[activeList].map((item, i) => (
                                <button
                                    key={i}
                                    className="px-6 py-2 border border-[#0A0F1C] rounded-full text-[#0A0F1C]"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*LISTE DES PRODUITS*/}
            <section className="w-full mb-32">
                {/* 40px entre chaque produit */}
                <div className="px-6 lg:px-12 xl:px-20 space-y-20">
                    {productsData.map((p) => (
                        <Link
                            key={p.id}
                            to={`/products/${p.id}`}
                            className="grid xl:grid-cols-2 gap-8 xl:gap-16 items-start pt-8 xl:pt-12 group"
                        >
                            {/* Colonne gauche */}
                            <div className="order-2 xl:order-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.types.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 border border-[#0A0F1C]/50 rounded-full text-sm text-[#0A0F1C]/70"
                                        >
                                          {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-[#0A0F1C] text-4xl lg:text-5xl xl:text-[56px] leading-tight mb-6 max-w-[50%] group-hover:underline">
                                    {p.title}
                                </h3>

                                <p className="text-[#0A0F1C]/70 mb-8 max-w-xl leading-relaxed">
                                    {p.description}
                                </p>

                                <img src="/home/link.svg" alt="" className="h-10 w-10" />
                            </div>

                            {/* Colonne droite */}
                            <figure className="order-1 xl:order-2 ml-auto">
                                <div className="rounded-[2rem] bg-[#efefef]">
                                    <div className="w-full aspect-[4/3] flex items-center justify-center">
                                        <img
                                            src={`/products/${p.id}.png`}
                                            alt={p.title}
                                            className="max-h-full max-w-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </figure>
                        </Link>

                    ))}
                </div>
            </section>

            <Contact />
        </>
    )
}

export default Products
