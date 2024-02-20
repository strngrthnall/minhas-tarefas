import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  criteria: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const FiltroCard = ({ subtitle, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const isActive = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const countTasks = () => {
    if (criteria === 'todas') return tasks.itens.length
    if (criteria === 'prioridade') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filtrate = () => {
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }

  const active = isActive()
  const counter = countTasks()

  return (
    <S.Card active={active} onClick={filtrate}>
      <S.Contador>{counter}</S.Contador>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
