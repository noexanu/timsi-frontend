import { FormFieldProperties } from 'types/Form.types';
import {
  DEFAULT_FORM_FIELD_PROPERTIES,
  MAXIMUM_PASSWORD_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
} from 'constants/Form.values';
import {
  isNotEmpty,
  isValidEmailAdress,
  doesNotContainsWhitespaceCharacters,
  containsDifferentLetterCasing,
  containsNumbers,
  isValidLength,
} from 'utils/validators/FormFieldsValidator';

const signUpFormFields: FormFieldProperties[] = [
  {
    ...DEFAULT_FORM_FIELD_PROPERTIES,
    name: 'name',
    placeholder: 'Name',
  },
  {
    ...DEFAULT_FORM_FIELD_PROPERTIES,
    name: 'surname',
    placeholder: 'Surname',
  },
  {
    ...DEFAULT_FORM_FIELD_PROPERTIES,
    name: 'email',
    placeholder: 'Email adress',
    validationRules: [
      isNotEmpty,
      isValidEmailAdress,
      doesNotContainsWhitespaceCharacters,
    ],
  },
  {
    ...DEFAULT_FORM_FIELD_PROPERTIES,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    validationRules: [
      doesNotContainsWhitespaceCharacters,
      containsDifferentLetterCasing,
      containsNumbers,
      isValidLength(MINIMUM_PASSWORD_LENGTH, MAXIMUM_PASSWORD_LENGTH),
    ],
  },
];

export default signUpFormFields;
