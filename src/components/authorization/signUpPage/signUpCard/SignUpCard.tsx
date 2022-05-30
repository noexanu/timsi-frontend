import AuthController from 'controllers/authController';
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
  AuthorizationFormGoogleButton,
  AuthorizationFormChangeButton,
  AuthorizationFormErrorContainer,
} from 'components/authorization/authorization.styles';
import signUpFormFields from './SignUpForm';

function SignUpCard() {
  const [signUpForm, setFormFields] = useState(signUpFormFields);
  const navigate = useNavigate();

  const validateFormFields = () => {
    const updatedFormFields = signUpForm.map((formField) => {
      const { value, validationRules } = formField;
      const hasErrors = hasValidationErrors(validationRules, value);
      if (!hasErrors) return formField;
      const errors = getValidationErrors(validationRules, value);
      return { ...formField, errors };
    });

    const hasFormFieldsErrors = !!updatedFormFields.find(
      ({ errors }) => errors.length,
    );

    if (hasFormFieldsErrors) {
      setFormFields(updatedFormFields);
    } else {
      const formData = signUpForm.reduce((formFieldsData, formField) => (
        { ...formFieldsData, [formField.name]: formField.value }
      ), {});
      AuthController.signup(formData);
    }
  };

  const handleFormUpdate = (
    event: ChangeEvent<any>,
    formFieldProperties: FormFieldProperties,
  ) => {
    const { value } = event.target;
    const { name, validationRules } = formFieldProperties;
    const updatedFormFields = signUpForm.map((formField) => {
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
        Sign Up
      </AuthorizationCardMainSection>
      <AuthorizationForm>
        {renderFormFields(signUpForm)}
        <AuthorizationFormContinueButton
          type="button"
          value="SIGN UP"
          onClick={validateFormFields}
        />
        <AuthorizationCardMinorSection>
          or
        </AuthorizationCardMinorSection>
        <AuthorizationFormGithubButton
          type="button"
          value="Sign Up with GitHub"
          onClick={() => AuthController.github()}
        />
        <AuthorizationFormGoogleButton
          type="button"
          value="Sign Up with Google"
          onClick={() => AuthController.google()}
        />
        <AuthorizationFormChangeButton
          type="button"
          value="Sign In"
          onClick={() => navigate('/signin')}
        />
      </AuthorizationForm>
    </AuthorizationCardLayout>
  );
}

export default SignUpCard;
