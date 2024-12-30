import { Auth0Client } from "@auth0/auth0-spa-js";

export const signIn = async (options: { domain: string; clientId: string }) => {
  const auth0 = new Auth0Client(options);
  await auth0.loginWithPopup();
  return await auth0.getUser();
};
