import React from 'react'

export const Greeting = () => {
  let isMorning = (new Date()).getHours() < 12;
  let greetingHeader = isMorning
    ? <h3>Good Morning@</h3>
    : <h3>Good Evening</h3>;

  return (

    <>
      {greetingHeader}
      <p>You have 5 new messages</p>
    </>
  )
 

}

export default Greeting
