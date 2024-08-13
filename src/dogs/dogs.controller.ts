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
  Inject,
} from '@nestjs/common';
import { DogsService } from './dogs.service';

export interface dogsTypes {
  name: string;
  age: number;
  breed: string;
}

@Controller('dogs')
export class DogsController {
  // Dependency Injection
  // giving the program the tools it needs to complete the job automatically
  // instead of you having to hand them over every time.

  @Inject(DogsService)
  private dogsService: DogsService;

  // constructor(private dogsService: DogsService) {}

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

  @Post()
  postDogs(): string {
    return `Posted scobby dooby do`;
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

  // using services
  @Post('create/createDog')
  async create(@Body() dog: dogsTypes) {
    this.dogsService.create(dog);
  }

  @Get('get/getDog')
  async get() {
    this.dogsService.get();
  }
}
