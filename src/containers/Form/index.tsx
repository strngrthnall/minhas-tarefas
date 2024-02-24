import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Field, MainContainer, SaveButton, Title } from '../../styles'
import * as S from './styles'

import * as enums from '../../utils/enums/Task'
import { createNew } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const saveNewTask = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      createNew({
        title,
        priority,
        description,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <S.Form onSubmit={saveNewTask}>
        <Field
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descriçãoo da Tarefa"
        />
        <S.Options>
          <p>Prioridade</p>
          <div>
            {Object.values(enums.Priority).map((priority) => (
              <S.Option key={priority}>
                <input
                  value={priority}
                  name="priority"
                  type="radio"
                  onChange={({ target }) =>
                    setPriority(target.value as enums.Priority)
                  }
                  id={priority}
                  defaultChecked={priority === enums.Priority.NORMAL}
                />
                <label htmlFor={priority}>{priority}</label>
              </S.Option>
            ))}
          </div>
        </S.Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </S.Form>
    </MainContainer>
  )
}

export default Form
