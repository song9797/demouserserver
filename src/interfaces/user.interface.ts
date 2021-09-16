export interface Buyer{
    userId: string;
    name: string;
    password: string;
    address: string;
    phonenumber: string;
}
export interface Seller{
    userId: string;
    name: string;
    password: string;
    phonenumber: string;
    business_number: string;
    account_number: number;
}