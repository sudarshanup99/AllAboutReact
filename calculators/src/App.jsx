import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './Container/ButtonsContainer'
import Display from './Container/Display'


function App() {
  let [calVal,setCalVal]=useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")
    }
    else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result)
    }
    else {
      const newValue = calVal + buttonText
      setCalVal(newValue)
    }
  }
  
  return <div className={styles.calculator}>
    <h1>Calculator</h1>
    <Display calVal={calVal} />
    <hr />
    <ButtonsContainer clickButton={onButtonClick}/>
    
 </div>
  
}

export default App
