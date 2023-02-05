import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { FormRequest } from '../interfaces/formInterface';

////this validator checks if age less than 18 and marrital status is single s or not.
export function IsMarriageValid(validationOptions?: ValidationOptions) {
  return function (object1: FormRequest, propertyName: string) {
    registerDecorator({
      name: 'isMarriageValid',
      target: object1.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const object2 = args.object as any;
          if (object2.age < 18 && value == 'Married') {
            return false;
          }
          return true;
        },
      },
    });
  };
}

//this validator checks that age and date of birth are coherent or not.
export function IsAgeCoherentWithDateOfBirth(
  validationOptions?: ValidationOptions,
) {
  return function (object3: FormRequest, propertyName: string) {
    registerDecorator({
      name: 'isAgeCoherentWithDateOfBirth',
      target: object3.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const object4 = args.object as any;
          const age = object4.age;
          const dateOfBirth = object4.dob;
          if (age && dateOfBirth) {
            const currentYear = new Date().getFullYear();
            const calculatedAge = currentYear - dateOfBirth.getFullYear();
            if (calculatedAge !== age) {
              return false;
            }
          }
          return true;
        },
      },
    });
  };
}
