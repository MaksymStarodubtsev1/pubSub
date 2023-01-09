import {UserLoginEvent} from "./UserLoginEvent";
import {Greeting} from "./Greating";
import {useEffect, useState} from "react";
import {Login} from "./Login";
import {subscribe} from "./pubSub";
import {LogOut} from "./LogOut";

function App() {

  const [showLogin, setShowLogin] = useState(true)
  console.log('showLogin', showLogin)
  useEffect(() => {
    const handle = subscribe(UserLoginEvent, () => setShowLogin(!showLogin))

    return () => {handle.unsubscribe()}
  })

  return (
    <div>
      <header>
        <Greeting />
        {showLogin ? <Login /> : <LogOut />}
      </header>
    </div>
  );
}

export default App;
