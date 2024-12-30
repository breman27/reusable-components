import { useState } from "react";

// Define supported tools
type AuthTool = "firebase" | "auth0" | "clerk";

interface AuthConfig {
  tool: AuthTool;
  options?: Record<string, any>; // Additional options for the tool
}

export const useAuthentication = (config: AuthConfig) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const initializeAuth = async () => {
    try {
      switch (config.tool) {
        case "firebase":
          const firebase = await import("./authProviders/firebase");
          setUser(await firebase.signIn(config.options));
          break;

        case "auth0":
          const auth0 = await import("./authProviders/auth0");
          setUser(await auth0.signIn(config.options));
          break;

        case "clerk":
          const clerk = await import("./authProviders/clerk");
          setUser(await clerk.signIn(config.options));
          break;

        default:
          throw new Error("Unsupported authentication tool");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during authentication");
    }
  };

  return { user, error, initializeAuth };
};
