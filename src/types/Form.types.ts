import { ValidationRule } from 'utils/validators/FormFieldsValidator';

export interface FormFieldProperties {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  errors: string[];
  validationRules: ValidationRule[];
}
