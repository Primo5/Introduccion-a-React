import { useState } from 'react'

const FormComponents = () => {
  const [task, setTask] = useState({ id: '', name: 'fdsfd', done: false })
  const { name } = task
  const [todo, setTodo] = useState([])

  const handlerChange = ({ target }) => {
    const { value } = target
    setTask({ ...task, id: new Date().getTime(), name: value, done: false })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    setTodo([...todo, task])
    setTask({ ...task, name: '' })
  }

  const removeTask = (id) => {
    const newList = todo.filter((data) => data.id !== id)
    setTodo(newList)
  }
  console.log(todo)
  return (
    <div>
      <ol>
        {todo.map((data) => (
          <li key={data.id}>
            {data.name}{' '}
            <button
              onClick={() => {
                removeTask(data.id)
              }}
            >
              eliminar
            </button>
          </li>
        ))}
      </ol>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={name} onChange={handlerChange} />
        <button>Añadir</button>
      </form>
    </div>
  )
}
export default FormComponents
