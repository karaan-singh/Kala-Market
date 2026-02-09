
import { Category, ApprovalStatus, Artist, Product, OrderStatus } from './types';

export const COLORS = {
  bg: '#FDFBF7',
  text: '#2D241E',
  accent: '#B45309', // Terracotta
  sage: '#606C38',
  sand: '#D4A373'
};

export const INITIAL_ARTISTS: Artist[] = [
  {
    id: 'a1',
    name: 'Anjali Sharma',
    email: 'anjali@example.com',
    phone: '+91 9876543210',
    city: 'Jaipur',
    state: 'Rajasthan',
    artType: 'Miniature Painting',
    story: 'Born into a family of traditional painters in Jaipur, I started holding a brush before I could properly hold a pencil. My work is an attempt to keep the intricate Mughal-style miniature art alive in a modern world.',
    profileImage: 'https://picsum.photos/seed/anjali/400/400',
    isVerified: true,
    approvalStatus: ApprovalStatus.APPROVED,
    joinedAt: '2024-01-15'
  },
  {
    id: 'a2',
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    phone: '+91 9876543211',
    city: 'Bastar',
    state: 'Chhattisgarh',
    artType: 'Dhokra Art',
    story: 'The lost-wax casting technique of Dhokra is as old as the Indus Valley Civilization. My hands craft stories of tribal life, spirits of the forest, and the simple joy of community.',
    profileImage: 'https://picsum.photos/seed/vikram/400/400',
    isVerified: true,
    approvalStatus: ApprovalStatus.APPROVED,
    joinedAt: '2024-02-10'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    artistId: 'a1',
    artistName: 'Anjali Sharma',
    title: 'The Blue City Dusk',
    description: 'A delicate miniature capturing the ethereal light of Jodhpur during sunset.',
    category: Category.PAINTING,
    price: 4500,
    images: ['https://picsum.photos/seed/art1/800/1000', 'https://picsum.photos/seed/art1b/800/1000'],
    dimensions: '10" x 12"',
    material: 'Natural pigments on handmade paper',
    includesFrame: true,
    isReady: true,
    estimatedDelivery: '5-7 business days',
    careInstructions: 'Avoid direct sunlight. Keep away from moisture.',
    approvalStatus: ApprovalStatus.APPROVED,
    city: 'Jaipur'
  },
  {
    id: 'p2',
    artistId: 'a2',
    artistName: 'Vikram Singh',
    title: 'Tribal Harvest Figurine',
    description: 'Solid brass sculpture representing the bountiful harvest festival of Bastar.',
    category: Category.SCULPTURE,
    price: 3200,
    images: ['https://picsum.photos/seed/art2/800/800'],
    dimensions: '6" height',
    material: 'Brass (Dhokra)',
    includesFrame: false,
    isReady: false,
    estimatedDelivery: '10-14 business days',
    careInstructions: 'Clean with a soft dry cloth. Do not use chemical cleaners.',
    approvalStatus: ApprovalStatus.APPROVED,
    city: 'Bastar'
  },
  {
    id: 'p3',
    artistId: 'a1',
    artistName: 'Anjali Sharma',
    title: 'Peacock in the Garden',
    description: 'Detailed gold-leaf work depicting a royal peacock.',
    category: Category.PAINTING,
    price: 12000,
    images: ['https://picsum.photos/seed/art3/800/1200'],
    dimensions: '18" x 24"',
    material: 'Canvas with 24K gold leaf detailing',
    includesFrame: true,
    isReady: true,
    estimatedDelivery: '7-10 business days',
    careInstructions: 'Handle with care. Best preserved under museum glass.',
    approvalStatus: ApprovalStatus.APPROVED,
    city: 'Jaipur'
  }
];
