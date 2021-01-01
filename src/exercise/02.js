import * as React from 'react'
import {Switch} from '../switch'

// pass in children props default
function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // react children map just maps over components
  return React.Children.map(children, (child) => {
    /*
    React.cloneElement(
      element,
      [props],
      [...children]
    )
    */
    // clone element takes in component and the props
    return React.cloneElement(child, {on, toggle})
  })
}

const ToggleOn = ({children, on}) => on ? children : null

const ToggleOff = ({children, on}) => on ? null : children

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
