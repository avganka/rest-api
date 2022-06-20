class ApiErrors extends Error {
  constructor (status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiErrors(400, message)
  }

  static internalServerError(message) {
    return new ApiErrors(500, message)
  }
}

export default ApiErrors;