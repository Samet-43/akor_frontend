import { useParams, Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { productDetailData } from "../../data/productDetails";

import Deposition from "../../components/shared/deposition/Deposition.tsx";
import Contact from "../../components/shared/contact/Contact.tsx"

function ProductDetail() {

    const { id } = useParams(); // récupère l'id de l'URL (string)
    const productId = Number(id); // converti en nombre

    // Trouver le produit correspondant
    const product = productDetailData.find((p) => p.id === productId);

    if (!product) {
        return <p>Produit introuvable</p>;
    }

    return (
        <>
            {/*PRODUCT*/}
            <section className="relative w-full">
                {/* Fond */}
                <img
                    src="/productDetail/background-1.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Contenu */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 xl:px-32 py-10 lg:py-20 gap-10">

                    {/* Colonne gauche : texte */}
                    <div className="text-[#FCF8F1] max-w-xl">

                        <p className="text-white text-sm pb-20 font-light">✨ Le produit le plus avancé pour les professionnels de l’esthétique</p>

                        <h1 className="text-3xl xl:text-5xl font-bold mb-6">
                            {product?.title}
                            <span className="font-light text-[#FCF8F1]/70 mb-8">
                                ,{product?.description}
                            </span>
                        </h1>

                        {/* Boutons */}
                        <div className="flex flex-wrap gap-4 pb-20">
                            <button className="px-6 py-3 rounded-full bg-white text-[#0A0F1C] font-medium hover:bg-gray-100 transition">
                                Réserver un démo
                            </button>
                            <button className="px-6 py-3 rounded-full border border-white font-medium hover:bg-white hover:text-[#0A0F1C] transition">
                                Calcul de rentabilité
                            </button>
                        </div>

                        {/* Image rate */}
                        <img
                            src="/productDetail/reviews.png"
                            alt="Avis clients"
                        />
                    </div>

                    {/* Colonne droite : image produit */}
                    <div className="flex justify-center w-full lg:w-1/2">
                        <img
                            src={`/productDetail/${id}/hero-1.png`}
                            alt={product?.title}
                            className="max-h-[300px] lg:max-h-[400px] xl:max-h-[600px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/*EXPLANATION*/}
            <section className="relative w-full">
                {/* Fond */}
                <img
                    src="/productDetail/background-2.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Contenu */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 xl:px-32 py-16 gap-10">

                    {/* Texte gauche */}
                    <div className="text-center lg:text-left max-w-md">
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                            {product?.subDescriptions.first.title}
                        </h2>
                        <p className="text-gray-700">
                            {product?.subDescriptions.first.description}
                        </p>
                    </div>

                    {/* Image milieu */}
                    <div className="flex justify-center w-full lg:w-1/3">
                        <img
                            src={`/productDetail/${id}/hero-2.png`}
                            alt={product?.title}
                            className="max-h-[300px] lg:max-h-[400px] xl:max-h-[500px] object-contain"
                        />
                    </div>

                    {/* Texte droite */}
                    <div className="text-center lg:text-left max-w-md">
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4">
                            {product?.subDescriptions.second.title}
                        </h2>
                        <p className="text-gray-700">
                            {product?.subDescriptions.second.description}
                        </p>
                    </div>
                </div>

                {/* Image en dessous */}
                <div className="relative flex justify-center pb-20">
                    <img
                        src="/productDetail/techno.png"
                        alt="Technologie"
                        className="max-w-full h-auto"
                    />
                </div>

            </section>

            {/*EXPLANATION 2*/}
            <section className="relative w-full">
                {/* Texte centré */}
                <div className="text-center max-w-3xl mx-auto my-20">
                    <p className="text-lg xl:text-xl text-[#0A0F1C] leading-relaxed">
                        {product?.explanation}
                    </p>
                </div>

                {/* Image hero-3 */}
                <div className="flex justify-center mb-32">
                    <img
                        src={`/productDetail/${id}/hero-3.png`}
                        alt={product?.title}
                        className="w-[95vw]"
                    />
                </div>
            </section>

            {/*TECHNOLOGY*/}
            <section className="relative w-full mt-64">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image gauche */}
                    <div className="flex justify-center xl:w-1/2 ">
                        <img
                            src={`/productDetail/${id}/hero-4.png`}
                            alt={product?.title}
                        />
                    </div>

                    {/* Texte + items droite */}
                    <div className="xl:w-1/2 xl:max-w-[35vw] flex flex-row gap-4 p-6 xl:flex-col xl:gap-0 xl:px-0 space-y-6 ">
                        <h2 className="font-semibold text-2xl xl:text-4xl leading-snug mb-20">
                            {product?.technology.title}
                            <span className="text-gray-500"> {product?.technology.description}</span>
                        </h2>

                        <div className="space-y-10 text-lg xl:text-xl">
                            {/* First */}
                            <div className="flex items-start gap-4">
                                <img src={product?.technology.first.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.technology.first.title}</h3>
                                    <p className="text-gray-600">{product?.technology.first.description}</p>
                                </div>
                            </div>

                            {/* Second */}
                            <div className="flex items-start gap-4">
                                <img src={product?.technology.second.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.technology.second.title}</h3>
                                    <p className="text-gray-600">{product?.technology.second.description}</p>
                                </div>
                            </div>

                            {/* Third */}
                            <div className="flex items-start gap-4">
                                <img src={product?.technology.third.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.technology.third.title}</h3>
                                    <p className="text-gray-600">{product?.technology.third.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/*ASSET*/}
            <section className="relative w-full mt-64">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-12">

                    {/* Texte + items gauche */}
                    <div className="xl:w-1/2 xl:max-w-[35vw] flex flex-row gap-4 p-6 xl:flex-col xl:gap-0 xl:px-0 space-y-6 ">
                        <h2 className="font-semibold text-2xl xl:text-4xl leading-snug mb-20">
                            {product?.asset.title}
                            <span className="text-gray-500"> {product?.asset.description}</span>
                        </h2>

                        <div className="space-y-10 text-lg xl:text-xl">
                            {/* First */}
                            <div className="flex items-start gap-4">
                                <img src={product?.asset.first.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.asset.first.title}</h3>
                                    <p className="text-gray-600">{product?.asset.first.description}</p>
                                </div>
                            </div>

                            {/* Second */}
                            <div className="flex items-start gap-4">
                                <img src={product?.asset.second.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.asset.second.title}</h3>
                                    <p className="text-gray-600">{product?.asset.second.description}</p>
                                </div>
                            </div>

                            {/* Third */}
                            <div className="flex items-start gap-4">
                                <img src={product?.asset.third.image} alt="" />
                                <div>
                                    <h3 className="font-semibold">{product?.asset.third.title}</h3>
                                    <p className="text-gray-600">{product?.asset.third.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image droite */}
                    <div className="flex justify-center xl:w-1/2">
                        <img
                            src={`/productDetail/${id}/hero-5.png`}
                            alt={product?.title}
                        />
                    </div>

                </div>
            </section>

            {/*GAINS*/}
            <section className="relative w-full py-20 mt-64 bg-[#C3CED5]">

                <div className="w-screen flex justify-center text-center mb-32">
                    <h2 className="text-[#0A0F1C] text-2xl xl:text-3xl leading-snug max-w-[36%]">
                        Estimez vos gains potentiels
                        <span className="text-[#0A0F1C]/50">
                            {" "}et le temps nécessaire pour amortir votre investissement.
                        </span>
                    </h2>
                </div>
                <div className="px-6 xl:px-20 flex flex-col xl:flex-row justify-between items-center gap-16">

                    {/* Partie gauche : Liste des avantages */}
                    <div className="text-[#0A0F1C] space-y-6 max-w-[50%]">
                        <ul className="list-disc list-inside space-y-4 text-xl">
                            <li>Innovant, grâce à la technologie avancée de l'IA et de la RA</li>
                            <li>Conseils de beauté personnalisés en quelques minutes</li>
                            <li>Conversions plus élevées, entraînant une augmentation des ventes</li>
                            <li>Expérience en magasin innovante</li>
                            <li>Visibilité accrue de votre marque</li>
                            <li>Mise en œuvre flexible</li>
                        </ul>
                    </div>

                    {/* Partie droite : Bloc central gains */}
                    <div className="bg-[#0A0F1C]/80 text-white rounded-[3rem] p-8 py-16 max-w-2xl w-full space-y-6">

                        {/* Ligne 1 */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-light text-lg">Prix d’une analyse</p>
                            <div className="flex items-center justify-between bg-[#575C65] rounded-full px-4 py-4">
                                <span className="text-xl xl:text-3xl pl-6">30</span>
                                <span className="text-lg xl:text-2xl font-light pr-6">Euros</span>
                            </div>
                        </div>

                        {/* Ligne 2 */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-light text-lg">Nombre moyen d’analyses</p>
                            <div className="flex items-center justify-between bg-[#575C65] rounded-full px-4 py-4">
                                <span className="text-xl xl:text-3xl pl-6">4</span>
                                <span className="text-lg xl:text-2xl font-light pr-6">Par jour</span>
                            </div>
                        </div>

                        <hr className="border-gray-600 my-10" />

                        {/* Ligne 3 */}
                        <div className="grid grid-cols-2 items-center">
                            <p className="font-light text-xl">Revenus journaliers</p>
                            <div className="flex justify-end items-center gap-4">
                                <span className="font-medium text-2xl xl:text-4xl">120</span>
                                <span className="text-xl font-light px-12">Euros</span>
                            </div>
                        </div>

                        {/* Ligne 4 */}
                        <div className="grid grid-cols-2 items-center">
                            <div className="text-xl">
                                <p className="font-semibold">Revenus mensuels</p>
                                <p className="text-sm font-light">(sur 22 jours ouvrés)</p>
                            </div>
                            <div className="flex justify-end items-center gap-4">
                                <span className="font-medium text-2xl xl:text-4xl">2.640</span>
                                <span className="text-xl font-light px-12">Euros</span>
                            </div>
                        </div>

                        <hr className="border-gray-600" />

                        {/* Résultat */}
                        <p className="font-light">
                            <span className="font-semibold">Résultat ✨:</span>
                            <span className="font-medium"> En moins de 2 mois,</span> votre investissement dans le DermoSmart est amorti, et vous générez ensuite un bénéfice net.
                        </p>
                    </div>

                </div>
            </section>

            {/*Q&A*/}
            <section className="relative w-full mt-64">
                <div className="px-6 xl:px-10 flex xl:flex-row justify-between items-start gap-12">

                    {/* Partie gauche */}
                    <div className="max-w-[30vw] xl:max-w-[25vw] flex flex-col justify-start space-y-6">
                        <h2 className="text-[#0A0F1C] text-xl xl:text-2xl">
                            <span>Des questions sur DermoSmart ? </span>
                            <span className="text-gray-500">
                              Notre équipe est à votre disposition pour vous informer et vous accompagner.
                            </span>
                        </h2>
                        <Link
                            to="/contact"
                            className="w-fit px-6 py-3 rounded-full bg-[#0A0F1C] text-white font-medium"
                        >
                            Contactez-nous →
                        </Link>
                    </div>

                    {/* Partie droite : FAQ */}
                    <div className="w-1/2 space-y-4">
                        {[
                            "Le DermoSmart est-il facile à utiliser ?",
                            "Quels types de peau et de cheveux peut-il analyser ?",
                            "Peut-on exporter les rapports pour les clients ?",
                            "Nécessite-t-il un abonnement logiciel ?",
                            "Quelle est la garantie de l’appareil ?",
                        ].map((question, i) => (
                            <Disclosure key={i}>
                                {({ open }) => (
                                    <div className="bg-[#EFEEEE] rounded-lg">
                                        <DisclosureButton className="flex w-full justify-between items-center px-6 py-6 font-medium">
                                            {question}
                                            <ChevronDownIcon
                                                className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-6 pb-4 text-gray-600 text-sm">
                                            Réponse à la question "{question}" (à remplir).
                                        </DisclosurePanel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </section>


            {/*TECHNICAL SHEET*/}
            <section className="relative w-full mt-32">
                <div className="px-6 lg:px-20 xl:px-32">
                    <h2 className="text-3xl xl:text-4xl font-semibold mb-32">
                        Fiche techniques
                    </h2>

                    <div className="grid grid-cols-[1.5fr_1fr_2fr] gap-x-8 gap-y-20 text-sm xl:text-base">
                        {/* Technologie */}
                        <div className="text-[#0A0F1C] text-lg font-medium">
                            {product?.technicalSheet.technologie.title}
                        </div>
                        <div className="col-span-2 divide-y divide-gray-200">
                            {Object.values(product?.technicalSheet.technologie.details || {}).map((item, i) => (
                                <div key={i} className="grid grid-cols-[1fr_2fr] gap-x-6 py-3">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-gray-600">{item.description}</span>
                                </div>
                            ))}
                        </div>

                        {/* Paramètres mesurés */}
                        <div className="text-[#0A0F1C] text-lg font-medium">
                            {product?.technicalSheet.parametres.title}
                        </div>
                        <div className="col-span-2 divide-y divide-gray-200">
                            {Object.values(product?.technicalSheet.parametres.details || {}).map((item, i) => (
                                <div key={i} className="grid grid-cols-[1fr_2fr] gap-x-6 py-3">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-gray-600">{item.description}</span>
                                </div>
                            ))}
                        </div>

                        {/* Interface & Connectivité — cachée par défaut */}
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <DisclosurePanel className="contents">
                                        <div className="text-[#0A0F1C] text-lg font-medium">
                                            {product?.technicalSheet.interface.title}
                                        </div>
                                        <div className="col-span-2 divide-y divide-gray-200">
                                            {Object.values(product?.technicalSheet.interface.details || {}).map((item, i) => (
                                                <div key={i} className="grid grid-cols-[1fr_2fr] gap-x-6 py-3">
                                                    <span className="font-medium">{item.title}</span>
                                                    <span className="text-gray-600">{item.description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>

                                    {/* Bouton voir plus */}
                                    <div className="col-span-3 flex justify-center mt-6">
                                        <DisclosureButton className="px-6 py-2 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                                            {open ? "Voir moins" : "Voir plus"}
                                        </DisclosureButton>
                                    </div>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </section>

            <Deposition />

            <Contact />
        </>
    )
}

export default ProductDetail
