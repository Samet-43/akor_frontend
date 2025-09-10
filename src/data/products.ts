export interface ProductsData {
    id: number;
    types: string[];
    title: string;
    image: string;
    description: string;
}

export const productsData: ProductsData[] = [
    {
        id: 1,
        types: ["Analyseur de peau", "Soin de peau"],
        title: "Dermo Smart+",
        image: "/products/1.png",
        description:
            "Le Demo Smart+ allie performance et fiabilité, permettant aux professionnels de l’esthétique d’offrir des soins précis tout en optimisant leur temps et leur efficacité.",
    },
    {
        id: 2,
        types: ["Analyseur de peau", "Soin de peau"],
        title: "SKIN/HAIR Kiosk 15 inch",
        image: "/products/2.png",
        description:
            "Le SKIN/HAIR Kiosk 15 inch offre aux professionnels un diagnostic précis et rapide, facilitant la personnalisation des soins et l’optimisation de l’expérience client.",
    },
    {
        id: 3,
        types: ["Analyseur de peau", "Soin de peau"],
        title: "SKIN/HAIR Kiosk 21 inch",
        image: "/products/3.png",
        description:
            "Le SKIN/HAIR Kiosk 21 inch combine grand écran et technologie avancée pour un diagnostic encore plus détaillé, renforçant l’efficacité et la satisfaction client.",
    },
    {
        id: 4,
        types: ["Soin visage"],
        title: "Sponge Device",
        image: "/products/4.png",
        description:
            "Le Sponge Device permet des soins ciblés et délicats, assurant une application optimale tout en respectant la sensibilité de la peau.",
    },
    {
        id: 5,
        types: ["Soin corps", "Objectif minceur"],
        title: "DeepWave",
        image: "/products/5.png",
        description:
            "Le DeepWave utilise des technologies de pointe pour stimuler en profondeur les tissus, offrant des résultats visibles et durables pour les traitements esthétiques.",
    },
    {
        id: 6,
        types: ["Soin visage"],
        title: "Plamon",
        image: "/products/6.png",
        description:
            "Le Plamon est conçu pour fournir des soins professionnels précis, alliant sécurité, performance et confort pour le praticien et le client.",
    },
];
