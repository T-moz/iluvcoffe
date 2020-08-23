import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavores')
  findAll() {
    return 'This action return all coffes';
  }
}
