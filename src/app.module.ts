import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { DogsController } from './dogs/dogs.controller';
import { DynamicHostRoutingModule } from './dynamic-host-routing/dynamic-host-routing.module';


@Module({
  imports: [DogsModule, DynamicHostRoutingModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
