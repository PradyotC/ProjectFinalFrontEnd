export interface CartItem
{
    prodId:string,
    quantity:number
}

export interface UserCart{
    userId?:string,
    cartItems:CartItem[]
}