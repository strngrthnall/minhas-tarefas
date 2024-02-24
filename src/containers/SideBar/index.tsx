import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Button, Field } from '../../styles'
import FiltroCard from '../../components/FiltroCard'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(event) => dispatch(changeTerm(event.target.value))}
            />
            <S.Filters>
              <FiltroCard
                value={enums.Status.PENDENTE}
                criteria="status"
                subtitle="pendente"
              />
              <FiltroCard
                value={enums.Status.CONCLUIDA}
                criteria="status"
                subtitle="concluídas"
              />
              <FiltroCard
                value={enums.Priority.URGENTE}
                criteria="prioridade"
                subtitle="urgentes"
              />
              <FiltroCard
                value={enums.Priority.IMPORTANTE}
                criteria="prioridade"
                subtitle="importantes"
              />
              <FiltroCard
                value={enums.Priority.NORMAL}
                criteria="prioridade"
                subtitle="normal"
              />
              <FiltroCard criteria="todas" subtitle="todas" />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar à lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
