import { Modal as ModalRSuite } from "rsuite";

// Context
import { useModal } from "../../context/ModalContext";

const Modal = ({ title, children }) => {
  const { closeModal, isModalOpen } = useModal();

  return (
    <ModalRSuite size="xs" open={isModalOpen} onClose={closeModal}>
      <ModalRSuite.Header>
        <ModalRSuite.Title>
          <h2 className="text-primary">{title}</h2>
        </ModalRSuite.Title>
      </ModalRSuite.Header>

      {children}
    </ModalRSuite>
  );
};

export default Modal;
