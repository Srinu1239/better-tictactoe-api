import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/interfaces';
import { FormRequest } from './interfaces/formInterface';
import { UpdateFormRequest } from './models/form';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class FormService {
  async validateInfo(rawData: FormRequest): Promise<BaseResponse> {
    const data = plainToClass(UpdateFormRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }
}
