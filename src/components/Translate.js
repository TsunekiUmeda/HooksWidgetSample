import React, { useState } from 'react'
import DropDown from './DropDown'

const options = [
  { label: 'Africaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
]

const Translate = () => {
  const [language, setlanguage] = useState(options[0])
  const [text, settext] = useState('')
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={e => settext(e.target.value)} />
        </div>
      </div>

      <DropDown
        label='select a Language'
        selected={language}
        onSelectedChange={setlanguage}
        options={options}
      />
    </div>
  )
}

export default Translate
