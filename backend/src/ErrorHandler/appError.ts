class appError extends Error {
  statusCode;
  constructor(message: string, statuscode: number) {
    super(message);
    this.statusCode = statuscode;
  }
}
export default appError;
