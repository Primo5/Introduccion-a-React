import { useState } from 'react'

const CounterComponents = () => {
  const [counter, setCounter] = useState(10)
  const [person, setPerson] = useState({
    name: 'Primo',
    age: 25,
  })

  const sumar = () => {
    setCounter(counter + 1)
  }

  const restar = () => {
    setCounter(counter - 1)
  }
  const addEdad = () => {
    const { age } = person
    setPerson({ ...person, age: age + 1 })
  }

  const resEdad = () => {
    const { age } = person
    setPerson({ ...person, age: age - 1 })
  }
  return (
    <div>
      {counter}
      <button onClick={sumar}>sumar 1</button>
      <button onClick={restar}>restar -1</button>

      {JSON.stringify(person)}
      <button onClick={resEdad}>Restar age</button>
      <button onClick={addEdad}>sumar age</button>
    </div>
  )
}
export default CounterComponents
