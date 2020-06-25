
export const FormRequestCreation = (handleClose) => {
  const formDefinition = {
    name: 'app.RequestCreation',
    component: 'Form',
    fields: [
      {
        name: 'listEntityCode',
        component: 'TextField',
        label: 'List Entity Code',
        required: false,
        block: false
      },
      {
        name: 'search',
        component: 'ButtonField',
        label: 'Search',
        block: false
      },
      {
        name: 'totalEntities',
        component: 'TextField',
        label: 'Total Entities',
        block: false
      },
      {
        name: 'view',
        component: 'ButtonField',
        label: 'View',
        block: false
      },
      {
        name: 'tissueType',
        component: 'StateField',
        label: 'Tissue Type',
        help: 'Select one',
        // required: false,
        blankString: 'None',
        // multiline: true,
        // fullWidth: true,
        options: null,
        block: false
      },
      {
        name: 'crop',
        component: 'StateField',
        label: 'Crop',
        help: 'Select one',
        // required: false,
        blankString: 'None',
        // multiline: true,
        // fullWidth: true,
        options: null,
        block: false
      },
      {
        name: 'program',
        component: 'StateField',
        label: 'Program',
        help: 'Select one',
        // required: false,
        blankString: 'None',
        // multiline: true,
        // fullWidth: true,
        options: null,
      },
      {
        name: 'requester',
        component: 'TextField',
        label: 'Requester',
        block: false,
        value: localStorage.getItem('userProfile')?localStorage.getItem('userProfile').name:'Salvador Ortega'
      },
      {
        name: 'requesterMail',
        component: 'EmailField',
        label: 'Requester Email',
        block: false,
        value: localStorage.getItem('userProfile')?localStorage.getItem('userProfile').name:'s.ortega@cimmyt.org'
      },
      {
        name: 'contact',
        component: 'TextField',
        label: 'Contact',
        block: false
      },
      {
        name: 'adminEmail',
        component: 'EmailField',
        label: 'Admin Email',
      },
      {
        name: 'changeAccount',
        component: 'TextField',
        label: 'Change Account',
        block: false
      },
      {
        name: 'submitionDate',
        component: 'DateField',
        label: 'Submition Date',
        help: 'Click to open',
        // includeTime: true,
        minDate: '2018-01-01T23:07:28.157Z',
        maxDate: '2022-01-01T23:07:28.157Z',
        block: false
      },
      {
        name: 'completeBy',
        component: 'DateField',
        label: 'Complete By',
        help: 'Click to open',
        // includeTime: true,
        minDate: '2018-01-01T23:07:28.157Z',
        maxDate: '2022-01-01T23:07:28.157Z',
      },
      {
        name: 'service',
        component: 'StateField',
        label: 'Service',
        help: 'Select one',
        // required: false,
        blankString: 'None',
        // multiline: true,
        // fullWidth: true,
        options: null,
        block: false
      },
      {
        name: 'serviceProvider',
        component: 'StateField',
        label: 'Service Provider',
        help: 'Select one',
        blankString: 'None',
        options: null,
        block: false
      },
      {
        name: 'purpose',
        component: 'StateField',
        label: 'Purpose',
        help: 'Select one',
        blankString: 'None',
        options: null,
        block: false
      },
      {
        name: 'objective',
        component: 'StateField',
        label: 'Objective',
        help: 'Select one',
        blankString: 'None',
        options: null,
        block: false
      },
      {
        name: 'textField',
        component: 'TextField',
        label: 'TextField',
        help: 'Example help',
      },
      {
        name: 'submit',
        component: 'ButtonField',
        label: 'Send',
        icon: 'CheckCircle'
      },
      {
        name: 'cancel',
        component: 'ButtonField',
        label: 'Cancel',
        icon: 'CancelCircle'
      }
    ]
  }
  return formDefinition
}
export default FormRequestCreation