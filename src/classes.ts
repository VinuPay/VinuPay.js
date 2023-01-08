import colors from 'colors';
// Errors
interface IError {
    message: string;
}

class ValidationError extends Error implements IError {
  constructor(message: string) {
    super(colors.red.bold(message));
    this.name = colors.red.underline('ValidationError');
  }
}
class InvalidSeedError extends Error implements IError {
    constructor(message: string) {
        super(colors.red.bold(message));
        this.name = colors.red.underline('InvalidSeedError');
    }
}
class NodeError extends Error implements IError {
    constructor(message: string) {
        super(colors.red.bold(message));
        this.name = colors.red.underline('NodeError');
    }
}

class NotFoundError extends Error implements IError {
    constructor(message: string) {
        super(colors.red.bold(message));
        this.name = colors.red.underline('NotFoundError');
    }
}


export { ValidationError, NodeError, NotFoundError, InvalidSeedError};