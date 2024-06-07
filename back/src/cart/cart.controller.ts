import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from './entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addProduct(
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ): Promise<CartItem> {
    return this.cartService.addProduct(productId, quantity);
  }

  @Get()
  findAll(): Promise<CartItem[]> {
    return this.cartService.findAll();
  }

  @Put(':id/increase')
  increaseQuantity(@Param('id') id: string): Promise<CartItem> {
    return this.cartService.increaseQuantity(+id);
  }

  @Put(':id/decrease')
  decreaseQuantity(@Param('id') id: string): Promise<CartItem> {
    return this.cartService.decreaseQuantity(+id);
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string): Promise<void> {
    return this.cartService.removeProduct(+id);
  }
}
