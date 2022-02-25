import { FormFieldProperties } from 'types/Form.types';
import {
  isNotEmpty,
  doesNotContainsWhitespaceCharacters,
} from 'utils/validators/FormFieldsValidator';

export const DEFAULT_FORM_FIELD_PROPERTIES: FormFieldProperties = {
  name: '',
  value: '',
  errors: [],
  type: 'text',
  placeholder: '',
  validationRules: [isNotEmpty, doesNotContainsWhitespaceCharacters],
};

export const MINIMUM_PASSWORD_LENGTH = 8;
export const MAXIMUM_PASSWORD_LENGTH = 32;
