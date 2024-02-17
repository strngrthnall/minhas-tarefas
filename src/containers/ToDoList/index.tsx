import Task from '../../components/Task'

import * as S from './styles'

const tasks = [
  {
    title: 'Estudar Typescript',
    description: 'Ver aula 3 da EBAC',
    priority: 'importante',
    stats: 'pendente'
  },
  {
    title: 'Pagar conta da Internet',
    description: 'Baixar fatura no  email',
    priority: 'urgente',
    stats: 'concluida'
  },
  {
    title: 'Ir para academia',
    description: 'Fazer treino B',
    priority: 'importante',
    stats: 'pendente'
  }
]

const ToDoList = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            title={t.description}
            priority={t.priority}
            stats={t.stats}
            description={t.description}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default ToDoList
