import { useState } from 'react'

const ListComponets = () => {
  const first = [
    {
      name: 'GOku',
      age: 23,
    },
    {
      name: 'Vegueta',
      age: 24,
    },
  ]
  const [list, setList] = useState(first)

  const add = () => {
    const newList = [...list, { name: 'Primo', age: 20 }]
    setList(newList)
  }

  return (
    <div>
      <ol>
        {list.map((data) => (
          <li>{data.name}</li>
        ))}
      </ol>
      <button onClick={add}>Añadir</button>
    </div>
  )
}
export default ListComponets
