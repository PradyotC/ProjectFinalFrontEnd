export interface Products{
    name: string,
    image: string,
    description: string,
    price: number,
    offerPrice: number,
    isAvailable: boolean,
    isTodayOffer: boolean,
    Category: string,
    subCategory: string,
    isAdmin?: boolean
}