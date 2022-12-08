import { TechProvider } from "./TechContext";
import { UserContext, UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};
