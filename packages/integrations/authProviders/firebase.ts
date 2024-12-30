import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (options: { email: string; password: string }) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    options.email,
    options.password
  );
  return userCredential.user;
};
