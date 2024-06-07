import { CartService } from './cart.service';
import { CartItem } from './entities/cart.entity';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addProduct(productId: number, quantity: number): Promise<CartItem>;
    findAll(): Promise<CartItem[]>;
    increaseQuantity(id: string): Promise<CartItem>;
    decreaseQuantity(id: string): Promise<CartItem>;
    removeProduct(id: string): Promise<void>;
}
