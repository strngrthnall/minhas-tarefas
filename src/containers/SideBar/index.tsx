import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'

import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <S.Filtros>
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
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default SideBar
