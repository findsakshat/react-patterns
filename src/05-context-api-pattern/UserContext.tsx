import { ReactNode, createContext, useEffect, useState } from "react";

type UserType = {
  name: string,
  username: string,
  email: string
}

export type UserContextType = {
  currentUser: UserType | { },
  isLoading: boolean
}

export const UserContext = createContext<UserContextType>({
  currentUser: {},
  isLoading: false
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserType | { }>({ });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {  
      setCurrentUser({ name: "foo", username: "foo123", email: "foo@something.com" });
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}