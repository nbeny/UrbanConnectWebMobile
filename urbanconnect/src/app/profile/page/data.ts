// src/app/profile/data.ts
export type UserType = {
    fullName: string;
    username: string;
    email: string;
    location: string;
    avatar: string;
    plan: string;
    accountStatus: string;
    personalStatus: string;
    description: string;
    badges?: string[];
    socialLinks?: Record<string, string>;
    tags?: string[];
};

export type EntrepriseType = {
    nomEntreprise: string;
    adresseEntreprise: string;
    statusJuridique: string;
    professionalStatus: string;
    iban: string;
    bic: string;
    bankName: string;
};

export type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string; // ajout de category
};

export type ServiceType = {
    id: number;
    name: string;
    price: number;
    duration: string;
    image: string;
    category: string; // ajout de category
};

export type ActivityType = {
    id: number;
    type: string;
    content: string;
    date: string;
};

export type Profile = {
    id: string;
    profileName?: string;
    isNew?: boolean;
    user?: UserType;
    entreprise?: EntrepriseType;
    products?: ProductType[];
    services?: ServiceType[];
    activity?: ActivityType[];
};

// ======= PROFILS EXEMPLES =======
export const profilesData: Profile[] = [
    {
        id: "profile-1",
        profileName: "Profil Personnel",
        user: {
            fullName: "Sophie Martin",
            username: "sophie.martin",
            email: "sophie.martin@example.com",
            location: "Paris, France",
            avatar: "SM",
            plan: "monthly",
            accountStatus: "Actif",
            personalStatus: "Disponible",
            description: "Designer freelance passionnée par les projets créatifs et innovants.",
            badges: ["Premium", "Verified"],
            socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
            tags: ["Design", "Artisanat", "Créatif"]
        },
        entreprise: {
            nomEntreprise: "CréaDesign SASU",
            adresseEntreprise: "12 Rue de Rivoli, 75001 Paris",
            statusJuridique: "SAS/SASU",
            professionalStatus: "Active",
            iban: "FR76 1234 5678 9012 3456 7890 123",
            bic: "PSSTFRPPPAR",
            bankName: "Banque Populaire"
        },
        products: [
            { id: 1, name: "Vase Céramique", price: 45, image: "https://via.placeholder.com/100", category: "Décoration" },
            { id: 2, name: "Lampe Artisanale", price: 89, image: "https://via.placeholder.com/100", category: "Décoration" }
        ],
        services: [
            { id: 1, name: "Atelier Créatif", price: 120, duration: "2h", image: "https://via.placeholder.com/100", category: "Création" },
            { id: 2, name: "Coaching Design", price: 200, duration: "1h", image: "https://via.placeholder.com/100", category: "Formation" }
        ],
        activity: [
            { id: 1, type: "post", content: "Nouveau design publié sur mon portfolio", date: "2025-10-01" },
            { id: 2, type: "interaction", content: "Réponse reçue sur votre atelier créatif", date: "2025-10-05" }
        ]
    },
    {
        id: "profile-2",
        profileName: "Profil Business",
        user: {
            fullName: "Sophie Martin",
            username: "sophie.business",
            email: "sophie.business@example.com",
            location: "Paris, France",
            avatar: "SM",
            plan: "yearly",
            accountStatus: "Actif",
            personalStatus: "Occupée",
            description: "Consultante spécialisée en stratégie et formation d'entreprise.",
            badges: ["Premium", "Verified", "Pro"],
            socialLinks: { facebook: "#", linkedin: "#", twitter: "#" },
            tags: ["Business", "Formation", "Coaching"]
        },
        entreprise: {
            nomEntreprise: "Consulting Pro SASU",
            adresseEntreprise: "5 Avenue Montaigne, 75008 Paris",
            statusJuridique: "SAS/SASU",
            professionalStatus: "Active",
            iban: "FR76 9876 5432 1098 7654 3210 987",
            bic: "PSSTFRPPPAR",
            bankName: "Crédit Agricole"
        },
        products: [
            { id: 3, name: "Kit Formation", price: 199, image: "https://via.placeholder.com/100", category: "Formation" },
            { id: 4, name: "Pack Cloud", price: 499, image: "https://via.placeholder.com/100", category: "Technologie" }
        ],
        services: [
            { id: 3, name: "Coaching Individuel", price: 150, duration: "1h", image: "https://via.placeholder.com/100", category: "Coaching" },
            { id: 4, name: "Formation Entreprise", price: 500, duration: "1 jour", image: "https://via.placeholder.com/100", category: "Formation" }
        ],
        activity: [
            { id: 3, type: "post", content: "Nouvelle formation lancée", date: "2025-09-28" },
            { id: 4, type: "interaction", content: "Avis reçu sur coaching individuel", date: "2025-10-02" }
        ]
    },
    { id: "create-new", isNew: true }
];
