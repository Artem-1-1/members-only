import UnauthorizedError  from "./error.js";

export function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        next(new UnauthorizedError());
    }
}

export function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.member_status === "admin") {
        next();
    } else {
        next(new UnauthorizedError());
    }
}

export default { isAuth, isAdmin };