export interface toursInterface {
    id?: string;
    name: string;
    image: string;
    destination: string;
    description: string;
    price: number;
    hotels: string[];
}

export interface TourResponse{
    message:string
}