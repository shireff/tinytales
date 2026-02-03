export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    colors: string[];
    images: string[];
    category: string;
    rating: number;
    reviewCount: number;
}

export interface Review {
    id: string;
    userName: string;
    rating: number;
    date: string;
    comment: string;
}

export interface RatingStats {
    average: number;
    total: number;
    distribution: {
        stars: number;
        percentage: number;
    }[];
}
