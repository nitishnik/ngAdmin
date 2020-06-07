import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PATTERN, NUMERIC_CONSTANTS } from './validation-constant';

export const VALIDATION = {
    name: [
        Validators.required,
        Validators.minLength(NUMERIC_CONSTANTS.nameMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.nameMaxLength),
        Validators.pattern(PATTERN.name)
    ],
    price: [
        Validators.required,
        Validators.pattern(PATTERN.price),
        Validators.minLength(NUMERIC_CONSTANTS.priceMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.priceMaxLength),
        Validators.min(0)
    ],
    email: [
        Validators.required,
        Validators.pattern(PATTERN.email),
        Validators.maxLength(NUMERIC_CONSTANTS.emailMaxLength)
    ],
    description: [
        Validators.required,
        Validators.pattern(PATTERN.name),
        Validators.minLength(NUMERIC_CONSTANTS.locationMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.locationMaxLength)
    ],
    message: [
        Validators.required,
        Validators.minLength(NUMERIC_CONSTANTS.locationMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.locationMaxLength)
    ],
    heading: [
        Validators.required,
        Validators.minLength(NUMERIC_CONSTANTS.locationMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.headingMaxLength)
    ],
    password: [
        Validators.required,
        // Validators.pattern(PATTERN.password),
        Validators.minLength(NUMERIC_CONSTANTS.passwordMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.passwordMaxLength)
    ],
    pwd: [
        Validators.required,
        Validators.minLength(NUMERIC_CONSTANTS.passwordMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.passwordMaxLength),
        Validators.pattern(PATTERN.PASSWORD),
    ],
    confirmPassword: [
        Validators.required
    ],
    phone: [
        Validators.required,
        Validators.pattern(PATTERN.phone),
        Validators.minLength(NUMERIC_CONSTANTS.phoneMinLength),
        Validators.maxLength(NUMERIC_CONSTANTS.phoneMaxLength)
    ],
    url: [
        Validators.pattern(PATTERN.url),
    ],
    dropdown: [],
    checkbox: [],

    userType :[
        Validators.required,
    ]
}


// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
