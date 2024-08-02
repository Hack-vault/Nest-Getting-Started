import { Module } from '@nestjs/common';
import { DynamicHostRoutingController } from './dynamic-host-routing.controller';

@Module({
  controllers: [DynamicHostRoutingController]
})
export class DynamicHostRoutingModule {}
