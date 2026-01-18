import { useReduxSelektor } from "../../hooks/useRedux"
import AuthorizationModal from "./modal-item/authorization/register"

const Modals = () => {
     const{ authorizationModalVisiblity} = useReduxSelektor(state => state.modalSlice)
  return (
    <>
    {authorizationModalVisiblity && <AuthorizationModal />}
    </>
  )
}

export default Modals