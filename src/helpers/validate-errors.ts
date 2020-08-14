interface errorStatus {
  status: Number
}

const validateError = (error: errorStatus) => {
  switch (error.status) {
    case 404:
      return { errorMessage: 'Nothing Found' };
    case 500:
      return { errorMessage: 'Internal Error' };
    case 503:
      return { errorMessage: 'Connection Issue with the API' }
    default:
      return { errorMessage: 'Unkown error' };
  }
}

export default validateError;