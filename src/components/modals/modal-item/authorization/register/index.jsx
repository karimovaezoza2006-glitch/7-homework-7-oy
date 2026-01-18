import {Modal} from "antd"
import { useReduxDispatch, useReduxSelektor } from "../../../../../hooks/useRedux"
import { setAuthorizationModalVisiblity } from "../../../../../redux/modal-store"

const AuthorizationModal = () => {
    const{ authorizationModalVisiblity} = useReduxSelektor(state => state.modalSlice)
    const dispatch = useReduxDispatch()
  return (
    <Modal 
    open={authorizationModalVisiblity}
    footer={false} 
    onCancel={()=>dispatch(setAuthorizationModalVisiblity())} >
    <div className="mt-10">
        <div className="flex items-center justify-center gap-4">
            <div className="text-xl"> Login</div>
            <div className="bg-[#3D3D3D] w-[1px] h-5"></div>
            <div className="text-xl" > Register </div>
        </div>
    </div>

    </Modal>
  )
}

export default AuthorizationModal