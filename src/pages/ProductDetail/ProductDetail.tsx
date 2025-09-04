function ProductDetail() {
    return (
        <>

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

export default ProductDetail
