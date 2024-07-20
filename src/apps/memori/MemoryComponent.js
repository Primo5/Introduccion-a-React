import React, { useEffect, useState } from 'react'
import { CardComponent } from './CardComponent'
import { createBoard } from './createBoard'
import './styles.css'
let list = []
let twice = []
export const MemoryComponent = () => {
  useEffect(() => {
    list = createBoard(30)
    setStateBoard(list)
    console.log(list)
  }, [])

  const [stateBoard, setStateBoard] = useState(list)

  const handlerClick = ({ id }) => {
    console.log('fdfffff', twice)
    if (twice.length == 2) {
      console.log('aqui se resetea')
      twice = []
    }

    const item = stateBoard.find((item) => item.id === id)
    console.log(item)
    if (twice.length == 0) {
      console.log('entro')
      twice = [...twice, item]
    } else if (twice.length == 1) {
      console.log('no entrar')
      twice = [...twice, item]
      const [item1] = twice
      console.log(twice)
      if (item1.key !== item.key) {
        console.log('son diferentes')
        setTimeout(() => {
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false
              item.styles = 'item'
            }
            return item
          })
          setStateBoard(newStateBoard)
        }, 1000)
      } else {
        const [item1, item2] = twice
        const newStateBoard = stateBoard.map((item) => {
          if (item.id === item1.id || item.id === item2.id) {
            item.done = true
          }
          return item
        })
        setStateBoard(newStateBoard)
      }
    }
    console.log('ultimo', twice)

    const newStateBoard = stateBoard.map((item) => {
      if (item.id === id) {
        item.state = true
        item.styles = 'itemColor'
      }
      return item
    })
    setStateBoard(newStateBoard)
  }
  return (
    <div>
      <h1>Memory app</h1>
      <hr />
      <div className="container">
        {stateBoard.map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            handlerClick={handlerClick}
          />
        ))}
      </div>
    </div>
  )
}
