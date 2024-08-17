import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerProductsService } from './customer-products.service';
import { CreateCustomerProductDto } from './dto/create-customer-product.dto';

@Controller('customer-products')
export class CustomerProductsController {
  constructor(
    private readonly customerProductsService: CustomerProductsService,
  ) {}

  @Post()
  create(@Body() createCustomerProductDto: CreateCustomerProductDto) {
    return this.customerProductsService.create(createCustomerProductDto);
  }

  @Get()
  findAll() {
    return this.customerProductsService.findAllProductInstances();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerProductsService.findOne(+id);
  }

  @Get('customer/:id')
  findProductInstancesByClientId(@Param('id') id: number) {
    return this.customerProductsService.findProductInstancesByClientId(+id);
  }

  @Get('product/:id')
  findProductInstancesByProductId(@Param('id') id: number) {
    return this.customerProductsService.findProductInstancesByProductId(+id);
  }
}
