export default class UnauthorizedError extends Error {
    constructor() {
        super("You're not authorized to access this page!");
        this.statusCode = 401;
    }
}