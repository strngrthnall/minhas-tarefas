import { useSelector } from 'react-redux'

import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let filteredTasks = itens

    if (term !== undefined) {
      filteredTasks = filteredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (criteria === 'prioridade') {
        filteredTasks = filteredTasks.filter((item) => item.priority === value)
      } else if (criteria === 'status') {
        filteredTasks = filteredTasks.filter((item) => item.status === value)
      }
      return filteredTasks
    } else {
      return itens
    }
  }

  const showFilterResult = (amount: number) => {
    let messenge = ''

    const complement =
      term !== undefined && term?.length > 0 ? `e busca por: "${term}"` : ''

    const plural = amount > 1 || amount == 0 ? 's' : ''

    if (criteria === 'todas') {
      messenge = `${amount} tarefa${plural} encontrada${plural} como: "todas", ${complement}`
    } else {
      messenge = `${amount} tarefa${plural} encontrada${plural} com ${`${criteria}: "${value}`}", ${complement}`
    }

    return messenge
  }

  const tasks = filterTasks()
  const messenge = showFilterResult(tasks.length)

  return (
    <S.Container>
      <S.Result>{messenge}</S.Result>
      <ul>
        {tasks.map((i) => (
          <li key={i.title}>
            <Task
              id={i.id}
              title={i.title}
              priority={i.priority}
              status={i.status}
              description={i.description}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ToDoList
