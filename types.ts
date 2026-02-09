
export enum Category {
  PAINTING = 'Painting',
  HANDICRAFT = 'Handicraft',
  SCULPTURE = 'Sculpture',
  POTTERY = 'Pottery',
  TEXTILES = 'Textiles'
}

export enum OrderStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export enum ApprovalStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export interface Artist {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  artType: string;
  story: string;
  profileImage: string;
  isVerified: boolean;
  approvalStatus: ApprovalStatus;
  rejectionReason?: string;
  joinedAt: string;
}

export interface Product {
  id: string;
  artistId: string;
  artistName: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  images: string[];
  dimensions: string;
  material: string;
  includesFrame: boolean;
  isReady: boolean; // true = ready, false = custom order
  estimatedDelivery: string;
  careInstructions: string;
  approvalStatus: ApprovalStatus;
  rejectionReason?: string;
  city: string;
}

export interface Order {
  id: string;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  items: {
    productId: string;
    title: string;
    price: number;
    artistId: string;
  }[];
  total: number;
  status: OrderStatus;
  paymentMethod: 'COD' | 'UPI';
  createdAt: string;
}

export interface AppState {
  artists: Artist[];
  products: Product[];
  orders: Order[];
  currentUser: {
    role: 'buyer' | 'artist' | 'admin';
    id?: string;
  };
}
