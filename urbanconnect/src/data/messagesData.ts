export interface Message {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  online: boolean;
}

const baseConversations: Conversation[] = [
  {
    id: 1,
    userId: 101,
    userName: "Sophie Martin",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Parfait ! Je serai là à 15h",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 1000),
    unreadCount: 2,
    online: true,
  },
  {
    id: 2,
    userId: 102,
    userName: "Thomas Dubois",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Le vélo est toujours disponible ?",
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000),
    unreadCount: 0,
    online: true,
  },
  {
    id: 3,
    userId: 103,
    userName: "Marie Laurent",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Merci pour l'info ! 🙏",
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
    unreadCount: 0,
    online: false,
  },
  {
    id: 4,
    userId: 104,
    userName: "Lucas Bernard",
    userAvatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "Je peux passer demain matin",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000),
    unreadCount: 1,
    online: false,
  },
  {
    id: 5,
    userId: 105,
    userName: "Emma Petit",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Super idée pour le marché bio !",
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
    unreadCount: 0,
    online: false,
  },
  {
    id: 6,
    userId: 106,
    userName: "Paul Richard",
    userAvatar: "https://i.pravatar.cc/150?img=6",
    lastMessage: "D'accord, à bientôt",
    lastMessageTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    unreadCount: 0,
    online: false,
  },
];

// Générer plus de conversations
const firstNames = [
  "Antoine", "Céline", "David", "Élodie", "François", "Gisèle", "Hugo", "Isabelle",
  "Julien", "Karine", "Laurent", "Morgane", "Nicolas", "Olivia", "Philippe", "Quentin",
  "Raphaël", "Sabrina", "Thierry", "Valérie", "William", "Xavier", "Yasmine", "Zoé",
  "Alexandre", "Béatrice", "Christophe", "Delphine", "Étienne", "Fabienne"
];

const lastNames = [
  "Dupont", "Lefebvre", "Moreau", "Girard", "Roux", "Fournier", "Morel", "Simon",
  "Michel", "Leroy", "Garcia", "David", "Bertrand", "Robert", "Durand", "Lemoine",
  "Rousseau", "Vincent", "Fontaine", "Chevalier", "Gauthier", "Perrin", "Robin", "Clement"
];

const messages = [
  "À tout à l'heure !",
  "Merci pour l'information",
  "C'est parfait pour moi",
  "Je te confirme demain",
  "Super, merci beaucoup !",
  "Pas de problème",
  "D'accord, à bientôt",
  "Je reviens vers vous rapidement",
  "Entendu !",
  "Parfait, je prends note",
  "Oui, ça me convient",
  "Merci de votre réponse",
  "Excellente nouvelle !",
  "Je suis intéressé(e)",
  "Pouvez-vous me donner plus de détails ?",
  "C'est toujours d'actualité ?",
  "Je vous recontacte très vite",
  "Merci pour votre aide",
  "À quelle heure on se voit ?",
  "Rendez-vous confirmé ?"
];

// Générer les conversations supplémentaires
for (let i = 7; i <= 50; i++) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];
  const avatarId = (i % 70) + 1;
  const hoursAgo = Math.floor(Math.random() * 720); // 0 à 30 jours
  const unread = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;
  const isOnline = Math.random() > 0.8;

  baseConversations.push({
    id: i,
    userId: 100 + i,
    userName: `${firstName} ${lastName}`,
    userAvatar: `https://i.pravatar.cc/150?img=${avatarId}`,
    lastMessage: message,
    lastMessageTime: new Date(Date.now() - hoursAgo * 60 * 60 * 1000),
    unreadCount: unread,
    online: isOnline,
  });
}

export const mockConversations: Conversation[] = baseConversations;

// Générer des messages pour chaque conversation
const generateMessages = (conversationId: number, count: number): Message[] => {
  const messages: Message[] = [];
  const userId = 100 + conversationId;
  
  const sampleMessages = [
    "Bonjour !",
    "Comment allez-vous ?",
    "Je suis intéressé(e) par votre annonce",
    "C'est toujours disponible ?",
    "Quel est le prix ?",
    "Pouvez-vous m'envoyer plus de photos ?",
    "Où êtes-vous situé(e) ?",
    "Je peux passer voir ça quand ?",
    "Merci pour votre réponse",
    "D'accord, ça me convient",
    "À quelle heure on peut se voir ?",
    "Je confirme pour demain",
    "Parfait, merci beaucoup !",
    "C'est en bon état ?",
    "Depuis combien de temps vous l'avez ?",
    "Il y a des défauts à signaler ?",
    "Je peux venir cet après-midi",
    "Quelle est votre adresse exacte ?",
    "Je prends !",
    "On se voit demain alors",
    "Super, à bientôt !",
    "Merci pour les infos",
    "Je vous recontacte très vite",
    "Ça marche pour moi",
    "Entendu !",
    "Je suis d'accord",
    "Pas de problème",
    "Excellente nouvelle",
    "Je vous envoie un message demain",
    "À tout à l'heure"
  ];

  for (let i = 0; i < count; i++) {
    const isFromUser = i % 2 === 0;
    messages.push({
      id: i + 1,
      senderId: isFromUser ? userId : 1,
      receiverId: isFromUser ? 1 : userId,
      content: sampleMessages[i % sampleMessages.length],
      timestamp: new Date(Date.now() - (count - i) * 15 * 60 * 1000),
      read: i < count - 2,
    });
  }

  return messages;
};

export const mockMessages: { [conversationId: number]: Message[] } = {
  1: generateMessages(1, 35),
  2: generateMessages(2, 25),
  3: generateMessages(3, 18),
  4: generateMessages(4, 42),
  5: generateMessages(5, 30),
  6: generateMessages(6, 15),
  7: generateMessages(7, 28),
  8: generateMessages(8, 22),
  9: generateMessages(9, 38),
  10: generateMessages(10, 31),
  11: generateMessages(11, 19),
  12: generateMessages(12, 26),
  13: generateMessages(13, 33),
  14: generateMessages(14, 21),
  15: generateMessages(15, 29),
  16: generateMessages(16, 24),
  17: generateMessages(17, 36),
  18: generateMessages(18, 27),
  19: generateMessages(19, 20),
  20: generateMessages(20, 34),
};
