import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./modal-item/authorization";

const Modals = () => {
  const { authorizationModalVisibility } = useReduxSelector(
    (state) => state.modalSlice,
  );
  return <>{authorizationModalVisibility && <AuthorizationModal />}</>;
};

export default Modals;