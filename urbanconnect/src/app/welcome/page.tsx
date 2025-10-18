// pages/index.js
import Image from "next/image";
import TopBarMobileUrbanConnect from "@/app/components/Topbar/MobileUrbanConnect";
import urbanBackground from "@/assets/urbanconnectBackground.png";
import BottomBarMobileUrbanConnect from "../components/BottomBar/MobileUrbanConnect";
import TopBarTranspartUrbanConnect from "../components/Topbar/TranspartUrbanConnect";

export default function Home() {
    const cards = [
        {
            id: 1,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwRF5zq_D8ka_2R8GM_kLTtnna4W1SlaPuNGuMG2XiQa00V6xAEyF6i0TV4pZAG9aPwKZTx-6-DrGag2nqs96FEjEiyy8dxqxRgMDsmKSDldnCMjc_o7K7C8rZIcC8Ny1O3YxW9ZAX3vzlvhznGl8duGY3kXl1pp1FMuZQoeWCwzmnuKxXx83TkHvukHk13d_sQMb12sEb2qcYjUNl4SePgenxHmChs11kgrnRJmtploAR1X2dDSYr9VkawSjYicF3ZB62Eh0Ii_M",
            name: "John Appleseed",
            time: "2h ago",
            type: "Article",
            title: "The Future of Urban Mobility",
            desc: "Exploring the latest trends in sustainable transportation and how they are reshaping our cities.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsmVlaxXqpyuR-HQCyhcvw_vqc6nuMFq5cfDv1I1vHd14FrPieJsPMpQNQ5m7-zE7lMe8KuvMhVeA_286Mt0yMN4SZMymFqPEG38jyTy42DlVIi32ZTTVKi3Al2dRV59prok4Ad3OHS82BmhMd-o8xOlHRWDPufMu0YchIPrz4BONJE5VaHS39WHsGqNZtPppu05-sub_TJw_L2LMwhGtqm7YqJV4qCWQb4m0E6D6Oq8Pn-T-dRMHn1-CWjjeNrqc6dJqls_gFpuY",
            likes: "1.2k",
            comments: "345",
        },
        {
            id: 2,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTRfu2G9yh_zJtFMU1scDdXX4OLJ5460seL0ya4sNu1981vG-Q0z8HZ5Dg3u0hzhjXyyMh_0a0rKWTm1P_t3dMpoee9tzuAoEOj-D9PRxsH55tP8VfEE89n_MAfgz3dM8sXObPd6wX0CUKY5iZsyQPR2OEn9-oXEyi_cJH1vrqFG0XlR7OhirjUl3666DAOtV92KlssTZh6utf74bEgKP7SmSJ-qwo8opbQ4B88oSZPOf7J5VR9s1psiA3GvbUpHYdYo0KCkHUDgM",
            name: "Jane Doe",
            time: "5h ago",
            type: "Post",
            title: "Just had a great meeting with a potential partner!",
            desc: "Exciting things are coming soon. Stay tuned for a big announcement next week!",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43ccGtEUO-UIUuRIzy8QcJCJdfBnyQdfes1c579oDQ9C1PFA5mHUE28D_V0SEMxRUxTm4aR2UklvTR41n89ZMSdH3v7oQTgWdvFWvLP7zzDTkGCJnf8gqIXr4KJZeqsDy9JkCcluVdzK9MZR8AM7zYt1fHasWauxgaE8bK_9ESWpwtAfzomPeeEB-832lrkv-wYMBm-Y6hJX72Vrz9HOTgn1hmpMVNJjq-ra5DKHTztHwVLYNq2VZFMVzkSzRfDD8bzgyHvIPtUQ",
            likes: "89",
            comments: "12",
        },
        {
            id: 3,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTRfu2G9yh_zJtFMU1scDdXX4OLJ5460seL0ya4sNu1981vG-Q0z8HZ5Dg3u0hzhjXyyMh_0a0rKWTm1P_t3dMpoee9tzuAoEOj-D9PRxsH55tP8VfEE89n_MAfgz3dM8sXObPd6wX0CUKY5iZsyQPR2OEn9-oXEyi_cJH1vrqFG0XlR7OhirjUl3666DAOtV92KlssTZh6utf74bEgKP7SmSJ-qwo8opbQ4B88oSZPOf7J5VR9s1psiA3GvbUpHYdYo0KCkHUDgM",
            name: "Jane Doe",
            time: "5h ago",
            type: "Post",
            title: "Just had a great meeting with a potential partner!",
            desc: "Exciting things are coming soon. Stay tuned for a big announcement next week!",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43ccGtEUO-UIUuRIzy8QcJCJdfBnyQdfes1c579oDQ9C1PFA5mHUE28D_V0SEMxRUxTm4aR2UklvTR41n89ZMSdH3v7oQTgWdvFWvLP7zzDTkGCJnf8gqIXr4KJZeqsDy9JkCcluVdzK9MZR8AM7zYt1fHasWauxgaE8bK_9ESWpwtAfzomPeeEB-832lrkv-wYMBm-Y6hJX72Vrz9HOTgn1hmpMVNJjq-ra5DKHTztHwVLYNq2VZFMVzkSzRfDD8bzgyHvIPtUQ",
            likes: "89",
            comments: "12",
        },
        {
            id: 4,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTRfu2G9yh_zJtFMU1scDdXX4OLJ5460seL0ya4sNu1981vG-Q0z8HZ5Dg3u0hzhjXyyMh_0a0rKWTm1P_t3dMpoee9tzuAoEOj-D9PRxsH55tP8VfEE89n_MAfgz3dM8sXObPd6wX0CUKY5iZsyQPR2OEn9-oXEyi_cJH1vrqFG0XlR7OhirjUl3666DAOtV92KlssTZh6utf74bEgKP7SmSJ-qwo8opbQ4B88oSZPOf7J5VR9s1psiA3GvbUpHYdYo0KCkHUDgM",
            name: "Jane Doe",
            time: "5h ago",
            type: "Post",
            title: "Just had a great meeting with a potential partner!",
            desc: "Exciting things are coming soon. Stay tuned for a big announcement next week!",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43ccGtEUO-UIUuRIzy8QcJCJdfBnyQdfes1c579oDQ9C1PFA5mHUE28D_V0SEMxRUxTm4aR2UklvTR41n89ZMSdH3v7oQTgWdvFWvLP7zzDTkGCJnf8gqIXr4KJZeqsDy9JkCcluVdzK9MZR8AM7zYt1fHasWauxgaE8bK_9ESWpwtAfzomPeeEB-832lrkv-wYMBm-Y6hJX72Vrz9HOTgn1hmpMVNJjq-ra5DKHTztHwVLYNq2VZFMVzkSzRfDD8bzgyHvIPtUQ",
            likes: "89",
            comments: "12",
        },
    ];

    return (
        <div className="relative w-full min-h-screen bg-white overflow-auto text-gray-900 pt-20 md:pt-24">
            {/* Background ville */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image src={urbanBackground} alt="Urban Connect Background" fill className="object-cover" />
            </div>

            <div className="relative z-10">
                <TopBarTranspartUrbanConnect />

                <div className="flex flex-col items-center mt-16">
                    {/* Categories */}
                    <div className="flex gap-2 px-4 pb-4 overflow-x-auto w-full max-w-4xl">
                        {["All", "Articles", "Posts", "Businesses", "Nearby"].map((cat, idx) => (
                            <span
                                key={idx}
                                className={`flex-shrink-0 px-4 py-1 rounded-full text-sm font-medium ${idx === 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Cards */}
                    <main className="flex flex-col items-center gap-6 px-4 pb-24 w-full max-w-4xl">
                        {cards.map(card => (
                            <div
                                key={card.id}
                                className="bg-white rounded-xl shadow-lg w-full flex flex-col md:flex-row overflow-hidden"
                            >
                                {/* Image */}
                                <div className="w-full md:w-1/3 h-48 md:h-auto">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Contenu */}
                                <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <img src={card.avatar} alt={card.name} className="w-8 h-8 rounded-full" />
                                            <div>
                                                <p className="font-semibold text-sm">{card.name}</p>
                                                <p className="text-gray-500 text-xs">{card.time}</p>
                                            </div>
                                        </div>
                                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">{card.type}</span>
                                        <h2 className="font-bold text-md mt-2">{card.title}</h2>
                                        <p className="text-gray-600 mt-1 text-sm">{card.desc}</p>
                                    </div>
                                    <div className="flex gap-4 mt-3 text-gray-500 text-sm">
                                        <button className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">thumb_up</span>
                                            {card.likes}
                                        </button>
                                        <button className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">chat_bubble_outline</span>
                                            {card.comments}
                                        </button>
                                        <button className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </main>

                    {/* Floating Add Button */}
                    <button className="fixed bottom-24 right-4 bg-primary text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-3xl">?</span>
                    </button>

                    {/* Bottom Bar */}
                    <BottomBarMobileUrbanConnect />
                </div>
            </div>
        </div>
    );
}
