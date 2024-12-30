import { useState } from "react";

interface PlaidConfig {
  clientId: string;
  secret: string;
}

export const usePlaid = (config: PlaidConfig) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialize = async () => {
    setIsLoading(true);
    try {
      // Example Plaid initialization
      console.log("Initializing Plaid with config:", config);
      // Replace with Plaid client setup logic
    } catch (error) {
      console.error("Plaid initialization failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { initialize, isLoading };
};
