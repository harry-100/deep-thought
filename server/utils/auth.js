const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRES_IN;

module.exports = {
    signToken: function({ username, email, _id}) {
        const payload = { username, email, _id };
        return jwt.sign({data: payload }, secret, { expiresIn: expiration });
    },
    authMiddleware: function({ req }){
        // allows token to be sent via req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
        // separate "Bearer from "<tokenvalue>"
        if(req.headers.authorization) {
            token = token
            .split(' ')
            .pop()
            .trim();
        }

        // if no token, return response (preventing access)
        if(!token) {
            return req;
        }
        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        }
        catch {
            cons
        }
        // return updated request object
        return req;
    }
}