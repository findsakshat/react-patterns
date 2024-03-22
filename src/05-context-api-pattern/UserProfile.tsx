import { useContext } from "react"
import { UserContext, UserContextType } from "./UserContext"

export default function UserProfile() {
  const { isLoading, currentUser } = useContext<UserContextType>(UserContext);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && currentUser && (
        <div className="border p-6 shadow-sm rounded-md">
          {JSON.stringify(currentUser)}
        </div>
      )}
    </div>
  )
}