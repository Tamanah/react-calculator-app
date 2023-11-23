import React from 'react'
import Button from './component/Button'
import Input from './component/Input'
import { useState } from 'react'
import {evaluate} from "mathjs"
import * as math from 'mathjs'

const App = () => {

  const [text,setText] = useState("");
  const [result,setResult] = useState("")

 
  const addToText = (val) => { 
    setText((text) => [...text,val + " "])
  }

  const resetInput = () => { 
    setResult("")
    setText("")
  }
  const calculateResult = () => { 
    const input = text.join("") //remove comma

    setResult(math.evaluate(input))
  }
  return (
    <div className='app'>
      <div className='calc-wrapper'>
        <Input text={text} result={result}/>

      <div className='row'>
        <Button symbol = '7' btnHandler={addToText} />
        <Button symbol = '8' btnHandler={addToText} />
        <Button symbol = '9' btnHandler={addToText} />
        <Button symbol = '/' color="#f2a33c" btnHandler={addToText} />
      </div>
      <div className='row'>
        <Button symbol = '4' btnHandler={addToText} />
        <Button symbol = '5' btnHandler={addToText} />
        <Button symbol = '6' btnHandler={addToText} />
        <Button symbol = '*' color="#f2a33c" btnHandler={addToText} />
      </div>
      <div className='row'>
        <Button symbol = '1' btnHandler={addToText} />
        <Button symbol = '2' btnHandler={addToText} />
        <Button symbol = '3' btnHandler={addToText} />
        <Button symbol = '+' color="#f2a33c" btnHandler={addToText} />
      </div>
      <div className='row'>
        <Button symbol = '0' btnHandler={addToText} />
        <Button symbol = '.' btnHandler={addToText} />
        <Button symbol = '=' btnHandler={calculateResult} />
        <Button symbol = '-' color="#f2a33c" btnHandler={addToText} />
      </div>

      <Button symbol = 'clear' color= 'red' btnHandler={resetInput} />
      
      </div>
      

     </div>
  )
}

export default App;
