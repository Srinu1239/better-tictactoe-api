import { Module } from '@nestjs/common';
import { InfoModule } from './info/info.module';
//import { FormController } from './form/form.controller';
import { FormModule } from './form/form.module';

@Module({
  imports: [InfoModule, FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
