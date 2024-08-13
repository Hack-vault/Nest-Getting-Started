import { Injectable } from '@nestjs/common';
import { dogsTypes } from './dogs.controller';

@Injectable()
export class DogsService {
  private dogs: dogsTypes[] = [];
  create(dog: dogsTypes) {
    return this.dogs.push(dog);
  }

  get() {
    return `yooo ${this.dogs}`;
  }
}
