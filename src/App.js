import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import DropDown from './components/DropDown'

const items = [
  {
    title: 'What is react',
    content: 'React is a from end javascript framework',
  },
  {
    title: 'Why use react',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How od you use react',
    content: 'You use React by creating components',
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Golor Green',
    value: 'green',
  },
  {
    label: 'Shade of Blue',
    value: 'blue',
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}
