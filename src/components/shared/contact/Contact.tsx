function Contact() {
    return (
        <>
            <section className="w-full flex justify-center mt-64 mb-32">
                <div className="w-[90vw] mx-auto">
                    <div className="mx-auto max-w-[56rem] rounded-[1.5rem] bg-[#FEFEFE] p-6 sm:p-8 lg:p-12 shadow-[0_12px_40px_rgba(8,15,28,0.06)] ring-1 ring-black/5">
                        {/* Titre */}
                        <div className="text-[#0A0F1C]">
                            <div className="text-xl xl:text-4xl font-medium">
                                <span className="text-[#0A0F1C]/50">Vous avez une idée, un projet, un rêve à concrétiser,</span>
                                <span> parlons-en dès aujourd’hui et avançons ensemble.</span>
                                <img src="/home/image-text-4.png" alt="" className="inline-block px-2"/>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="mt-8 space-y-6">
                            {/* Nom / Prénom */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                                <div>
                                    <label className="block font-medium text-lg xl:text-xl text-[#0A0F1C] mb-2">Nom *</label>
                                    <input
                                        required
                                        placeholder="Ex : Dupont"
                                        className="w-full h-11 rounded-full bg-white ring-1 ring-black/10 px-4 text-lg xl:text-xl outline-none focus:ring-2 focus:ring-[#0B1524]"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium text-lg xl:text-xl text-[#0A0F1C] mb-2">Prénom *</label>
                                    <input
                                        required
                                        placeholder="Ex : Julien"
                                        className="w-full h-11 rounded-full bg-white ring-1 ring-black/10 px-4 text-lg xl:text-xl outline-none focus:ring-2 focus:ring-[#0B1524]"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-medium text-lg xl:text-xl text-[#0A0F1C] mb-2">Email *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="votre@email.com"
                                    className="w-full h-11 rounded-full bg-white ring-1 ring-black/10 px-4 text-lg xl:text-xl outline-none focus:ring-2 focus:ring-[#0B1524]"
                                />
                            </div>

                            {/* Téléphone */}
                            <div>
                                <label className="block font-medium text-lg xl:text-xl text-[#0A0F1C] mb-2">Téléphone</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center gap-2 text-lg xl:text-xl text-[#0A0F1C]/70">
                                      <span className="text-base xl:text-lg">🇧🇪</span>
                                      <span className="text-[#0A0F1C]">+32</span>
                                    </span>
                                    <input
                                        placeholder="X XXX XXX XXX"
                                        className="w-full h-11 rounded-full bg-white ring-1 ring-black/10 pl-20 pr-4 text-lg xl:text-xl outline-none focus:ring-2 focus:ring-[#0B1524]"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-medium text-lg xl:text-xl text-[#0A0F1C] mb-2">Message *</label>
                                <textarea
                                    required
                                    placeholder="Saisir votre message"
                                    className="w-full min-h-[9rem] rounded-[1rem] bg-white ring-1 ring-black/10 p-4 text-lg xl:text-xl outline-none resize-y focus:ring-2 focus:ring-[#0B1524]"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full h-12 rounded-full bg-[#0B1524] text-white text-lg xl:text-xl hover:brightness-110 transition"
                            >
                                Envoyer le message
                            </button>

                            {/* Infos contact */}
                            <div className="text-xs xl:text-sm text-[#0A0F1C]/70 space-y-1">
                                <div>
                                    Contactez-nous à tout moment via{" "}
                                    <a href="mailto:contact@akor-aesthetics.com" className="underline font-medium">
                                        contact@akor-aesthetics.com
                                    </a>
                                </div>
                                <div>
                                    Ou appelez-nous sur{" "}
                                    <a href="tel:+326100200300" className="underline font-medium">
                                        +32 610 020 300
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
