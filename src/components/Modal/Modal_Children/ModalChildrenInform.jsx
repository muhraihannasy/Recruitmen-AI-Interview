import { Modal } from "rsuite";

// Context
import { useModal } from "../../../context/ModalContext";

// Components
import { Button } from "../../index";

const ModalChildrenInform = () => {
  const { closeModal } = useModal();

  const style = {
    text: "font-medium text-[0.875px]",
  };

  return (
    <>
      <Modal.Body>
        <p className="text-center">
          Waktu pengerjaan soal sudah habis. Soal akan dilewati
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="grid grid-cols-1 gap-[0.875em]">
          <Button onClick={closeModal} size="md" variant="outline-1">
            Mengerti
          </Button>
        </div>
      </Modal.Footer>
    </>
  );
};

export default ModalChildrenInform;
