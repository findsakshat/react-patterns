import { UserContextProvider } from "./UserContext";
import UserProfile from "./UserProfile";

export default function ContextAPIPatternExample() {

  return (
    <UserContextProvider>
      <UserProfile />
    </UserContextProvider>
  )
}