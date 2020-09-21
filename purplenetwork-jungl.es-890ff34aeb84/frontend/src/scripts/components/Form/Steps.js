/* eslint-disable */
export default class Steps {
  constructor({ app }) {
    return [
      {
        field: 'name',
        type: 'text',
        check: () => app.validator.checkName(),
        errors: {
          required: errMsgNameMandatory
        }
      },
      {
        field: 'email',
        type: 'email',
        check: () => app.validator.checkEmail(),
        errors: {
          required: errMsgEmailMandatory,
          invalid: errMsgEmailNotValid
        }
      },
      {
        field: 'phone',
        type: 'tel',
        check: () => app.validator.checkPhone(),
        errors: {
          required: errMsgPhoneMandatory,
          invalid: errMsgPhoneNotValid
        }
      },
      {
        field: 'message',
        type: 'textarea',
        check: () => app.validator.checkMessage(),
        errors: {
          required: errMsgMessageMandatory
        }
      },
      {
        field: 'privacy',
        type: 'checkbox',
        check: () => app.validator.checkLastStep(),
        errors: {
          required: errMsgPrivacyMandatory
        }
      }
    ]
  }
}
