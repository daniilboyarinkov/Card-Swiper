import { useState } from 'react'
import { useTransition, animated } from 'react-spring'

import { Deck } from './Components/Deck'
import { Table } from './Components/Table'
import { Layout } from './Components/Layout'
import { CardInfo } from './Components/CardInfo'

import './App.css'

function App() {
  const [layoutActive, setLayoutActive] = useState(false)
  const [cardInfoActive, setCardInfoActive] = useState(false)

  const cardInfoTransition = useTransition(cardInfoActive, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div className='App'>
      <Layout toggle={layoutActive} />
      <Deck setLayoutActive={setLayoutActive} showCardInfo={() => setCardInfoActive(true)} />
      <Table />

      {cardInfoTransition(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <CardInfo closeCardInfo={() => setCardInfoActive(false)} />
            </animated.div>
          )
      )}
    </div>
  )
}

export default App
