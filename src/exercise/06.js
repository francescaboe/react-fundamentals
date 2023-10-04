// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

    //const inputRef = React.useRef() // extra credit 1.a solution

    //const [error, SetError] = React.useState(null)
    const [myUsernameValue, SetMyUsernameValue] = React.useState('') // extra credit 3.a

    const handleChange = (e) => { // extra credit 3.b
        const val = e.target.value // here the evetns refers to the input specifically, not the entire form
        SetMyUsernameValue(val.toLowerCase())
        /*const isValid = val === val.toLowerCase()
        SetError(isValid ? null : 'Username must be lower case')*/
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitUsername(e.target.elements.username.value) // get elements by id from the form
        console.dir(e.target) // displays the form as an object
        // onSubmitUsername(inputRef.current.value) // extra credit 1.b solution
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleChange} value={myUsernameValue} />
      </div>
      <button type="submit">Submit</button>
      {/*<button type="submit" disabled={Boolean(error)}>Submit</button>*/}
       {/* <div role="alert">{error}</div>*/}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
