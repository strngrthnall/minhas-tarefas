import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({
  description: originalDescription,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdition() {
    setEditing(false)
    setDescription(originalDescription)
  }

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!editing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {editing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    title,
                    status,
                    priority
                  })
                )
                setEditing(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.CancelRemoveButton onClick={cancelEdition}>
              Cancelar
            </S.CancelRemoveButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
            <S.CancelRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.CancelRemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
