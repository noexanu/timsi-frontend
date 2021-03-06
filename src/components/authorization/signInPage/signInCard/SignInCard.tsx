import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormFieldProperties } from 'types/Form.types';
import {
  hasValidationErrors,
  getValidationErrors,
} from 'utils/validators/FormFieldsValidator';
import {
  AuthorizationCardLayout,
  AuthorizationForm,
  AuthorizationCardMainSection,
  AuthorizationCardMinorSection,
  AuthorizationFormInput,
  AuthorizationFormContinueButton,
  AuthorizationFormGithubButton,
  AuthorizationFormChangeButton,
  AuthorizationFormErrorContainer,
} from 'components/authorization/authorization.styles';
import signInFormFields from './SignInForm';

function SignInCard() {
  const [signInForm, setFormFields] = useState(signInFormFields);
  const navigate = useNavigate();

  const validateFormFields = () => {
    const updatedFormFields = signInForm.map((formField) => {
      const { value, validationRules } = formField;
      const hasErrors = hasValidationErrors(validationRules, value);
      if (!hasErrors) return formField;
      const errors = getValidationErrors(validationRules, value);
      return { ...formField, errors };
    });

    const hasFormFieldsErrors = !!updatedFormFields.find(
      ({ errors }) => errors.length,
    );
    if (hasFormFieldsErrors) setFormFields(updatedFormFields);
  };

  const handleFormUpdate = (
    event: ChangeEvent<any>,
    formFieldProperties: FormFieldProperties,
  ) => {
    const { value } = event.target;
    const { name, validationRules } = formFieldProperties;
    const updatedFormFields = signInForm.map((formField) => {
      if (formField.name === name) {
        const hasErrors = hasValidationErrors(validationRules, value);
        const errors = hasErrors
          ? getValidationErrors(validationRules, value)
          : [];
        return { ...formField, value, errors };
      }
      return formField;
    });
    setFormFields(updatedFormFields);
  };

  const renderFormFields = (formFields: FormFieldProperties[]) => (
    formFields.reduce((formEntries, formFieldProperties) => {
      const {
        name, value, type, placeholder, errors,
      } = formFieldProperties;
      const hasErrors = !!errors.length;
      const formField = (
        <AuthorizationFormInput
          {...{
            name,
            value,
            type,
            placeholder,
            className: hasErrors ? 'error' : '',
            onChange: (event) => handleFormUpdate(event, formFieldProperties),
          }}
        />
      );
      if (!hasErrors) return [...formEntries, formField];
      const formFieldError = (
        <AuthorizationFormErrorContainer>
          {...errors}
        </AuthorizationFormErrorContainer>
      );
      return [...formEntries, formField, formFieldError];
    }, [] as JSX.Element[]));

  return (
    <AuthorizationCardLayout>
      <AuthorizationCardMainSection>
        Sign In
      </AuthorizationCardMainSection>
      <AuthorizationForm>
        {renderFormFields(signInForm)}
        <AuthorizationFormContinueButton
          type="button"
          value="SIGN IN"
          onClick={validateFormFields}
        />
        <AuthorizationCardMinorSection>
          or
        </AuthorizationCardMinorSection>
        <AuthorizationFormGithubButton
          type="button"
          value="Sign In with GitHub"
          onClick={() => {}}
        />
        <AuthorizationFormChangeButton
          type="button"
          value="Sign Up"
          onClick={() => navigate('/signup')}
        />
      </AuthorizationForm>
    </AuthorizationCardLayout>
  );
}

export default SignInCard;
