export interface BusinessProps {
    id: string;
    name: string;
    description: string;
    phone: string;
    image: string;
    email: string;
    address: {
        number: string;
        street: string;
        zip: string;
        city: string;
        country: string;
    };
}

export const BusinessApiUrl = "https://api.jsonbin.io/b/6177e9399548541c29c8c0f5";



export const mockData = [
{
"id": "6758601439",
"name": "Zazio",
"description": "Drainage of Subdural Space with Drain Dev, Open Approach",
"phone": "609-306-3610",
"image": "https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000",
"email": "igowanlock0@networkadvertising.org",
"address": {
    "number": "84586",
    "street": "Straubel",
    "zip": "SG4",
    "city": "Manchester",
    "country": "United Kingdom"
    }
}]
