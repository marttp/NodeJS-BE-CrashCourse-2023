import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import UserModel from '../domain/user/user.schema.js';
import { JWT_OPTIONS } from './config.js';

function cookieExtractor(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies[JWT_OPTIONS.jwtCookieName];
  }
  return token;
}

const opts = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: JWT_OPTIONS.publicKey,
  issuer: JWT_OPTIONS.issuer,
  algorithms: JWT_OPTIONS.algorithm,
};

const strategy = new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await UserModel.findOne({ username: jwt_payload.sub });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(err, false);
  }
});

passport.use(strategy);
