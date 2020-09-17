import React from 'react'
import Accordion from './components/Accordion'

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

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
