import BarraLateral from '../../containers/BarraLateral'

const Cadastro = () => (
  <>
    <BarraLateral />
    <form>
      <input type="text" placeholder="Título" />
      <textarea placeholder="Descrição da tarefa"></textarea>
      <input type="radio" name="prioridade" id="urgente" />{' '}
      <label htmlFor="urgente">Urgente</label>
      <input type="radio" name="prioridade" id="importante" />{' '}
      <label htmlFor="importante">Importante</label>
      <input type="radio" name="prioridade" id="normal" />{' '}
      <label htmlFor="normal">Normal</label>
    </form>
  </>
)

export default Cadastro
