import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setCurrentModal("");
  };

  const value = {
    isModalOpen,
    currentModal,
    openModal: openModal,
    closeModal: closeModal,
    setCurrentModal: setCurrentModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
