import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartRepository: Repository<CartItem>,
  ) {}

  async addProduct(productId: number, quantity: number): Promise<CartItem> {
    const cartItem = await this.cartRepository.findOne({
      where: { product: { id: productId } },
    });
    if (cartItem) {
      cartItem.quantity += quantity;
      return this.cartRepository.save(cartItem);
    } else {
      const newCartItem = new CartItem();
      newCartItem.product = { id: productId } as Product;
      newCartItem.quantity = quantity;
      return this.cartRepository.save(newCartItem);
    }
  }

  async findAll(): Promise<CartItem[]> {
    return this.cartRepository.find({ relations: ['product'] });
  }

  async increaseQuantity(cartItemId: number): Promise<CartItem> {
    const cartItem = await this.cartRepository.findOne({
      where: { id: cartItemId },
      relations: ['product'],
    });
    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }
    cartItem.quantity += 1;
    return await this.cartRepository.save(cartItem);
  }

  async decreaseQuantity(cartItemId: number): Promise<CartItem> {
    const cartItem = await this.cartRepository.findOne({
      where: { id: cartItemId },
      relations: ['product'],
    });
    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      return await this.cartRepository.save(cartItem);
    } else {
      await this.cartRepository.remove(cartItem);
      return null;
    }
  }

  async removeProduct(cartItemId: number): Promise<void> {
    const cartItem = await this.cartRepository.findOne({
      where: { id: cartItemId },
    });
    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }
    await this.cartRepository.delete(cartItemId);
  }
}
