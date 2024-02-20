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

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{criteria}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filterTasks().map((i) => (
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
