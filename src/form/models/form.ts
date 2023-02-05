import { FormRequest } from '../interfaces/formInterface';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import {
  IsAgeCoherentWithDateOfBirth,
  IsMarriageValid,
} from '../validators/validators';
import { Type } from 'class-transformer';

export class UpdateFormRequest implements FormRequest {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(150)
  age: number;

  @IsOptional()
  @IsMarriageValid({
    message: 'if age is less than 18 then marrital status should be single',
  })
  married?: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @IsAgeCoherentWithDateOfBirth({
    message: 'age and date of birth should be coherent',
  })
  dob: Date;
}
