import toastStore from "../store/toast";
import { Alert } from "react-bootstrap";
const Toast = (params) => {
  const { showToast, ToastComponent, toastVariant, toggleToast } = toastStore(
    (state) => ({
      showToast: state.showToast,
      ToastComponent: state.component,
      toastVariant: state.variant,
      toggleToast: state.toggleToast,
    })
  );
  const closeToast = (e) => {
    toggleToast({
      showToast: false,
    });
  };
  if (showToast) {
    return (
      <Alert variant={toastVariant} className="notification">
        <ToastComponent />
        <button
          className="btn btn-link notification-close-btn"
          onClick={closeToast}
        >
          &times;
        </button>
      </Alert>
    );
  } else {
    return null;
  }
};

export default Toast;
