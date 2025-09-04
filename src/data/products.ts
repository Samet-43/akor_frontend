export interface ProductsData {
    id: number;
    type: string;
    title: string;
    image: string;
    description: string; // utilisé sur la Home
}

export const productsData: ProductsData[] = [
    {
        id: 1,
        type: "FACE ANALYSER",
        title: "Dermo Smart+",
        image: "/products/1.png",
        description:
            "Analyse cutanée et capillaire de haute précision grâce à des capteurs avancés et des algorithmes intelligents.",
    },
    {
        id: 2,
        type: "FACE ANALYSER",
        title: "SKIN/HAIR Kiosk 15 inch",
        image: "/products/2.png",
        description:
            "Un kiosque compact pour analyser la peau et les cheveux avec des résultats clairs et rapides.",
    },
    {
        id: 3,
        type: "FACE ANALYSER",
        title: "SKIN/HAIR Kiosk 21 inch",
        image: "/products/3.png",
        description:
            "Version grand écran pour une expérience immersive et des diagnostics détaillés de la peau et du cuir chevelu.",
    },
    {
        id: 4,
        type: "AESTHETIC DEVICE",
        title: "Sponge Device",
        image: "/products/4.png",
        description:
            "Nettoyage profond et hydratation de la peau grâce à des protocoles précis et non invasifs.",
    },
    {
        id: 5,
        type: "MEDICAL AESTHETIC DEVICE",
        title: "Deep Wave",
        image: "/products/5.png",
        description:
            "Technologie par ondes pour stimuler le derme et améliorer visiblement la fermeté et l’élasticité.",
    },
    {
        id: 6,
        type: "MEDICAL AESTHETIC DEVICE",
        title: "Plamon",
        image: "/products/6.png",
        description:
            "Analyse haute précision de la peau et du cuir chevelu avec diagnostic détaillé et recommandations personnalisées.",
    },
];
