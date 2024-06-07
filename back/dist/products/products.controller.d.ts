import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    remove(id: string): Promise<void>;
}
