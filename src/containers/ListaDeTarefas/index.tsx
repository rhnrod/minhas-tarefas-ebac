import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar JS',
    descricao: 'Ver aula 1',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Estudar Vue',
    descricao: 'Ver aula 12',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como &ldquo;categoria&rdquo; e &ldquo;termo&rdquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
