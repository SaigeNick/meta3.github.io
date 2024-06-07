"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
let CartService = class CartService {
    constructor(cartRepository) {
        this.cartRepository = cartRepository;
    }
    async addProduct(productId, quantity) {
        const cartItem = await this.cartRepository.findOne({
            where: { product: { id: productId } },
        });
        if (cartItem) {
            cartItem.quantity += quantity;
            return this.cartRepository.save(cartItem);
        }
        else {
            const newCartItem = new cart_entity_1.CartItem();
            newCartItem.product = { id: productId };
            newCartItem.quantity = quantity;
            return this.cartRepository.save(newCartItem);
        }
    }
    async findAll() {
        return this.cartRepository.find({ relations: ['product'] });
    }
    async increaseQuantity(cartItemId) {
        const cartItem = await this.cartRepository.findOne({
            where: { id: cartItemId },
            relations: ['product'],
        });
        if (!cartItem) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        cartItem.quantity += 1;
        return await this.cartRepository.save(cartItem);
    }
    async decreaseQuantity(cartItemId) {
        const cartItem = await this.cartRepository.findOne({
            where: { id: cartItemId },
            relations: ['product'],
        });
        if (!cartItem) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            return await this.cartRepository.save(cartItem);
        }
        else {
            await this.cartRepository.remove(cartItem);
            return null;
        }
    }
    async removeProduct(cartItemId) {
        const cartItem = await this.cartRepository.findOne({
            where: { id: cartItemId },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        await this.cartRepository.delete(cartItemId);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.CartItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CartService);
//# sourceMappingURL=cart.service.js.map