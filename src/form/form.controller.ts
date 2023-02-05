import { Controller } from '@nestjs/common';
import { FormService } from './form.service';
import { Post, Body } from '@nestjs/common';
import { FormRequest } from './interfaces/formInterface';
import { BaseResponse } from 'src/interfaces';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('/validate')
  getConfig(@Body() bodyRequest: FormRequest): Promise<BaseResponse> {
    return this.formService.validateInfo(bodyRequest);
  }
}
