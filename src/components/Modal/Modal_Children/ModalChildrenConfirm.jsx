import { Modal } from "rsuite";

// Context
import { useModal } from "../../../context/ModalContext";

// Components
import { Button } from "../../index";

const ModalChildrenConfirm = () => {
  const { closeModal } = useModal();

  return (
    <>
      <Modal.Body>
        <p className="text-center">
          Melewatkan pertanyaan ini akan mengurangi bobot penilaian tes ujian
          Anda, Yakin ingin lewati?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="grid grid-cols-2 gap-[0.875em]">
          <Button onClick={closeModal} size="md" variant="outline-4">
            Jawab Soal
          </Button>
          <Button onClick={closeModal} size="md" variant="red">
            Lewati
          </Button>
        </div>
      </Modal.Footer>
    </>
  );
};

export default ModalChildrenConfirm;
