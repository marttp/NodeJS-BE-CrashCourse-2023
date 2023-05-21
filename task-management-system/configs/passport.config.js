import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_OPTIONS } from './config.js';
import UserModel from '../domain/user/user.schema.js';

function generateJwtOption() {
  const key = JWT_OPTIONS.public;
  const opts = {};
  opts.jwtFromRequest = cookieExtractor;
  opts.secretOrKey = key;
  opts.issuer = JWT_OPTIONS.issuer;
  opts.algorithms = [JWT_OPTIONS.algorithm];
  return opts;
}

const cookieExtractor = (req) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies[JWT_OPTIONS.jwtCookieName];
  }
  return jwt;
};

passport.use('jwt',
  new JwtStrategy(generateJwtOption(), async (jwt_payload, done) => {
    try {
      const user = await UserModel.findOne({ username: jwt_payload.sub });

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      console.error(error);
      return done(err, false);
    }
  })
);
