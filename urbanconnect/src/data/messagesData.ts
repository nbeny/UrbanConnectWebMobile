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

export const mockConversations: Conversation[] = [
  {
    id: 1,
    userId: 101,
    userName: "Sophie Martin",
    userAvatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Parfait ! Je serai là à 15h",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 1000), // 5 min ago
    unreadCount: 2,
    online: true,
  },
  {
    id: 2,
    userId: 102,
    userName: "Thomas Dubois",
    userAvatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Le vélo est toujours disponible ?",
    lastMessageTime: new Date(Date.now() - 30 * 60 * 1000), // 30 min ago
    unreadCount: 0,
    online: true,
  },
  {
    id: 3,
    userId: 103,
    userName: "Marie Laurent",
    userAvatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Merci pour l'info ! 🙏",
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2h ago
    unreadCount: 0,
    online: false,
  },
  {
    id: 4,
    userId: 104,
    userName: "Lucas Bernard",
    userAvatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "Je peux passer demain matin",
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5h ago
    unreadCount: 1,
    online: false,
  },
  {
    id: 5,
    userId: 105,
    userName: "Emma Petit",
    userAvatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Super idée pour le marché bio !",
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    unreadCount: 0,
    online: false,
  },
  {
    id: 6,
    userId: 106,
    userName: "Paul Richard",
    userAvatar: "https://i.pravatar.cc/150?img=6",
    lastMessage: "D'accord, à bientôt",
    lastMessageTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    unreadCount: 0,
    online: false,
  },
];

export const mockMessages: { [conversationId: number]: Message[] } = {
  1: [
    {
      id: 1,
      senderId: 101,
      receiverId: 1,
      content: "Bonjour ! Je suis intéressée par le vélo électrique",
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      read: true,
    },
    {
      id: 2,
      senderId: 1,
      receiverId: 101,
      content: "Bonjour Sophie ! Il est toujours disponible. Voulez-vous venir le voir ?",
      timestamp: new Date(Date.now() - 50 * 60 * 1000),
      read: true,
    },
    {
      id: 3,
      senderId: 101,
      receiverId: 1,
      content: "Oui avec plaisir ! Quand êtes-vous disponible ?",
      timestamp: new Date(Date.now() - 40 * 60 * 1000),
      read: true,
    },
    {
      id: 4,
      senderId: 1,
      receiverId: 101,
      content: "Je peux aujourd'hui après-midi vers 15h si ça vous convient",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: true,
    },
    {
      id: 5,
      senderId: 101,
      receiverId: 1,
      content: "Parfait ! Je serai là à 15h",
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
    },
  ],
  2: [
    {
      id: 6,
      senderId: 102,
      receiverId: 1,
      content: "Salut ! Le vélo est toujours disponible ?",
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: true,
    },
  ],
  3: [
    {
      id: 7,
      senderId: 1,
      receiverId: 103,
      content: "Bonjour, le kit de jardinage que vous cherchez est en stock",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 8,
      senderId: 103,
      receiverId: 1,
      content: "Merci pour l'info ! 🙏",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
    },
  ],
  4: [
    {
      id: 9,
      senderId: 104,
      receiverId: 1,
      content: "Bonjour, je voudrais réserver le service de réparation",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 10,
      senderId: 1,
      receiverId: 104,
      content: "Bien sûr ! Quand souhaitez-vous la réparation ?",
      timestamp: new Date(Date.now() - 5.5 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 11,
      senderId: 104,
      receiverId: 1,
      content: "Je peux passer demain matin",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      read: false,
    },
  ],
  5: [
    {
      id: 12,
      senderId: 105,
      receiverId: 1,
      content: "Vous participez au marché bio ce samedi ?",
      timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 13,
      senderId: 1,
      receiverId: 105,
      content: "Oui absolument ! On aura un stand avec nos produits",
      timestamp: new Date(Date.now() - 24.5 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 14,
      senderId: 105,
      receiverId: 1,
      content: "Super idée pour le marché bio !",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
    },
  ],
  6: [
    {
      id: 15,
      senderId: 106,
      receiverId: 1,
      content: "Merci pour les conseils !",
      timestamp: new Date(Date.now() - 2.5 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 16,
      senderId: 1,
      receiverId: 106,
      content: "De rien, n'hésitez pas si vous avez d'autres questions",
      timestamp: new Date(Date.now() - 2.2 * 24 * 60 * 60 * 1000),
      read: true,
    },
    {
      id: 17,
      senderId: 106,
      receiverId: 1,
      content: "D'accord, à bientôt",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true,
    },
  ],
};
