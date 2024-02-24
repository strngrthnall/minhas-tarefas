import Form from '../../containers/Form'
import SideBar from '../../containers/SideBar'

const NewTask = () => {
  return (
    <>
      {/*barra lateral*/}
      <SideBar showFilters={false} />
      <Form />
    </>
  )
}

export default NewTask
