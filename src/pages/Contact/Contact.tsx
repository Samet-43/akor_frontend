function Contact() {
    return (
        <>
            <section className="w-full bg-[#f6f6f6] py-20 mt-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-2xl md:text-5xl text-[#0a0e17]">
                        Élevons ensemble<br />
                        votre excellence esthétique
                    </h2>
                </div>
            </section>

            <section className="w-full bg-[#f6f6f6]">
                <div className="mx-auto px-6">
                    {/* 2 colonnes qui prennent une hauteur un peu réduite */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch h-[90vh]">

                        {/* Image — même hauteur que le form */}
                        <div className="rounded-[2rem] overflow-hidden h-full">
                            <img
                                src="/contact/hero.jpg"
                                alt="Akor contact"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Form — occupe 100% de la hauteur disponible */}
                        <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm h-full flex">
                            <form className="space-y-6 w-full my-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#0a0e17]">
                                            Nom <span className="text-[#ff9f1c]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex : Dupont"
                                            className="mt-2 w-full rounded-full border border-gray-200 h-12 px-5 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#0a0e17]">
                                            Prénom <span className="text-[#ff9f1c]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex : Julien"
                                            className="mt-2 w-full rounded-full border border-gray-200 h-12 px-5 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0a0e17]">
                                        Email <span className="text-[#ff9f1c]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="mt-2 w-full rounded-full border border-gray-200 h-12 px-5 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#0a0e17]">
                                        Téléphone
                                    </label>
                                    <div className="mt-2 w-full rounded-full border border-gray-200 h-12 flex items-center px-4 gap-3">
                                        <span className="text-lg leading-none">🇧🇪</span>
                                        <span className="text-sm text-gray-600">+32</span>
                                        <input
                                            type="tel"
                                            placeholder="x XXX XXX XXX"
                                            className="flex-1 h-full outline-none px-2 bg-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-[#0a0e17]">
                                        Message <span className="text-[#ff9f1c]">*</span>
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Saisir votre message"
                                        className="mt-2 w-full rounded-2xl border border-gray-200 p-4 outline-none resize-none h-40"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-full bg-[#0a0e17] text-white text-sm font-medium"
                                >
                                    Envoyer le message
                                </button>

                                <div className="pt-2 text-xs text-gray-500 space-y-2">
                                    <p>
                                        Contactez-nous via
                                        <a href="mailto:contact@akor-aesthetics.com" className="underline ml-1">
                                            contact@akor-aesthetics.com
                                        </a>
                                    </p>
                                    <p>
                                        Ou appelez-nous sur{" "}
                                        <a href="tel:+326100200300" className="underline">
                                            +326100200300
                                        </a>
                                    </p>
                                </div>
                            </form>
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
        </>
    )
}

export default Contact
