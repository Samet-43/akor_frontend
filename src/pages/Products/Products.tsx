import { Link } from "react-router-dom";
import { productsData } from "../../data/products.ts";
import Contact from "../../components/shared/contact/Contact.tsx"

function Products() {
    return (
        <>
            <section className="relative w-full">
                {/* Fond */}
                <img
                    src="/products/bg-text.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
                />

                {/* Contenu centré */}
                <div className="relative flex flex-col items-center justify-center px-6 lg:px-12 xl:px-40 py-16 lg:py-24 xl:py-28 min-h-[50vh] lg:min-h-[60vh]">
                    <div className="text-center">
                        {/* Ligne 1 (gris) */}
                        <p className="font-[Montserrat] text-gray-500 tracking-[-0.02em]
                                    text-2xl lg:text-4xl xl:text-5xl leading-tight">
                            Découvrez notre gamme
                        </p>

                        {/* Ligne 2 (foncé) */}
                        <p className="font-[Montserrat] text-[#0A0F1C] tracking-[-0.02em]
                                    text-3xl lg:text-5xl xl:text-6xl leading-tight">
                            d’équipements esthétiques
                        </p>

                        {/* Ligne 3 (gris + image inline) */}
                        <p className="font-[Montserrat] text-gray-500 tracking-[-0.02em]
                                    text-2xl lg:text-4xl xl:text-5xl leading-tight mt-1">
                            innovants{" "}
                            <img
                                src="/products/image-text.png"
                                alt=""
                                className="inline-block align-middle h-8 lg:h-10 xl:h-12 rounded-full ml-2"
                            />
                        </p>
                    </div>

                    {/* Boutons en dessous */}
                    <div className="flex flex-wrap gap-4 mt-20">
                        <button className="px-6 py-2 border border-[#0A0F1C] rounded-full text-[#0A0F1C]">
                            Médecin
                        </button>
                        <button className="px-6 py-2 border border-[#0A0F1C] rounded-full text-[#0A0F1C]">
                            Centre Esthétique/Spa
                        </button>
                        <button className="px-6 py-2 border border-[#0A0F1C] rounded-full text-[#0A0F1C]">
                            Magasin/Pharmacie
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full mb-32">
                {/* 40px entre chaque produit */}
                <div className="px-6 lg:px-12 xl:px-20 space-y-10">
                    {productsData.map((p) => (
                        <article
                            key={p.id}
                            // align-items haut, pas centré verticalement
                            className="grid xl:grid-cols-2 gap-8 xl:gap-16 items-start pt-8 xl:pt-12"
                        >
                            {/* Colonne gauche : type + titre + flèche */}
                            <div className="order-2 xl:order-1">
                                {/* Types en badges */}
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

                                {/* 1 mot par ligne */}
                                <h3 className="text-[#0A0F1C] text-4xl lg:text-5xl xl:text-[56px] leading-tight mb-6 max-w-[50%]">
                                    {p.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#0A0F1C]/70 mb-8 max-w-xl leading-relaxed">
                                    {p.description}
                                </p>

                                <Link
                                    to={`/products/${p.id}`}
                                    className="inline-flex rounded-full"
                                    aria-label={`Voir ${p.title}`}
                                >
                                    <img src="/home/link.svg" alt="" className="h-10 w-10" />
                                </Link>
                            </div>

                            {/* Colonne droite : image avec fond arrondi, poussée vers la droite */}
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
                        </article>
                    ))}
                </div>
            </section>

            <Contact />
        </>
    )
}

export default Products
