interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'xos9C2pkg8JCJFS9U6T2JL8iaOKPXLxp',
  domain: 'dev-cloudapi.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
