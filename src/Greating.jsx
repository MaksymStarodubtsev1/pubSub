import {useEffect, useState} from "react";
import {subscribe} from "./pubSub";
import {UserLoginEvent} from "./UserLoginEvent";

export const Greeting = () => {
  const [greetings, setGreetings] = useState('')
  
  useEffect(() => {
    const handle = subscribe(UserLoginEvent, (user) => {
      setGreetings(user.name)
    })

    return () => {
      handle.unsubscribe()
    }

  })
  return (
    <h1>{greetings?.length > 0 ? greetings : 'Hello there'}</h1>
  )
}