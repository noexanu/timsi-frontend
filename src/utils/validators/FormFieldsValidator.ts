export interface ValidationRule {
  regex: RegExp;
  errorMessage: string;
}

export const isNotEmpty = {
  regex: /^.{1,}$/,
  errorMessage: 'Field is required. ',
};

export const isValidEmailAdress = {
  regex: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
  errorMessage: 'Email adress is invalid. ',
};

export const doesNotContainsWhitespaceCharacters = {
  regex: /^\S*$/,
  errorMessage: 'Field contains a whitespace characters. ',
};

export const containsDifferentLetterCasing = {
  regex: /(?=.*[a-z])(?=.*[A-Z]).*/,
  errorMessage: 'Field must contain upper and lower case letters. ',
};

export const containsNumbers = {
  regex: /[0-9]/,
  errorMessage: 'Field must contain numbers. ',
};

export const isValidLength = (minLenght: number, maxLength: number) => ({
  regex: new RegExp(`^.{${minLenght},${maxLength}}$`),
  errorMessage: `Field must be ${minLenght}-${maxLength} characters long. `,
});

export const hasValidationErrors = (validationRules: ValidationRule[], value: string) => (
  !!validationRules.find(({ regex }) => !value.match(regex))
);

export const getValidationErrors = (validationRules: ValidationRule[], value: string) => (
  validationRules.reduce((errorMessages, { regex, errorMessage }) => (
    !value.match(regex)
      ? [...errorMessages, errorMessage]
      : errorMessages), [] as string[])
);
