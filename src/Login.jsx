import {publish} from "./pubSub";
import {UserLoginEvent} from "./UserLoginEvent";

export const Login = () => {
  function handleLogin() {
    publish( new UserLoginEvent({name: "mr. Houdini"}))
  }

  return (
    <button onClick={handleLogin}>Login</button>
  )
}