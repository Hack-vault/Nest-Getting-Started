import {
  Post,
  Controller,
  Get,
  HttpCode,
  Header,
  Redirect,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

class dogsTypes {
  name: string;
  age: number;
  breed: string;
}

@Controller('dogs')
export class DogsController {
  @Post()
  postDogs(): string {
    return `Posted scobby dooby do`;
  }

  @Get()
  getDogs() {
    return `scobby dooby do`;
  }

  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }

  //   @Get('redirect')
  //   @Redirect('https://docs.nestjs.com', 302)

  @Get(':id')
  findParam(@Param() param: any): string {
    return `idk ${param.id} yo`;
  }

  @Get('idk/:id')
  findParam2(@Param('id') id: string): string {
    return `idk ${id} bruh`;
  }

  @Post('customHttpCode')
  @HttpCode(203)
  @Header('dog', 'scobby dooby do')
  customHttpCode() {
    return 'This route uses a custom http code';
  }

  @Post('addDog')
  async addDog(@Body() dog: dogsTypes) {
    return `name:${dog.name}  age:${dog.age}  breed:${dog.breed}`;
  }

  @Put('updateDog/:id')
  async updateDog(@Param('id') id: string) {
    return `dog updated ${id}`;
  }

  @Delete('deleteDog/:id')
  async deleteDog(@Param('id') id: string) {
    return `dog deleted ${id}`;
  }
}
