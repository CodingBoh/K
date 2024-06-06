export class Cart{
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number,
        public image: string,
        public favorites: boolean
    ){
        
    }
}