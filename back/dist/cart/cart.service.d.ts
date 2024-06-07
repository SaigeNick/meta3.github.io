import { Repository } from 'typeorm';
import { CartItem } from './entities/cart.entity';
export declare class CartService {
    private cartRepository;
    constructor(cartRepository: Repository<CartItem>);
    addProduct(productId: number, quantity: number): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    increaseQuantity(cartItemId: number): Promise<CartItem>;
    decreaseQuantity(cartItemId: number): Promise<CartItem>;
    removeProduct(cartItemId: number): Promise<void>;
}
