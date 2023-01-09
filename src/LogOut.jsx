import {publish} from "./pubSub";
import {UserLoginEvent} from "./UserLoginEvent";

export const LogOut = () => {
  const handleLogout = () => {
    publish( new UserLoginEvent({name: null}))
  }

  return (
    <button onClick={handleLogout}>logOut</button>
  )
}