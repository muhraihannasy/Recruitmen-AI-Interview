import { useMediaQuery } from "react-responsive";

// Context
import { useModal } from "../context/ModalContext";

// Component
import {
  Button,
  Modal,
  ModalChildrenConfirm,
  ModalChildrenInform,
} from "../components/index";

// Image
import Logo from "/Logo2.png";

const TestExam = () => {
  const { openModal, currentModal, isModalOpen, setCurrentModal } = useModal();

  const handleClickSkip = () => {
    setCurrentModal("confirmation");
    openModal();
  };

  const Laptop = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 944 });
    return isLaptop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 943 });
    return isTablet ? children : null;
  };

  const renderModal = () => {
    if (currentModal == "confirmation") {
      return (
        <Modal title="Konfirmasi">
          <ModalChildrenConfirm />
        </Modal>
      );
    }

    if (currentModal == "information") {
      return (
        <Modal title="Informasi">
          <ModalChildrenInform />
        </Modal>
      );
    }
  };

  console.log(isModalOpen);

  const style = {
    parent:
      "max-[943px]:h-[45em] h-[100vh] flex items-center max-[943px]:items-start justify-center max-[943px]:pt-[1.5em] overflow-y-auto",
    wrapperInfoJob: "flex items-center gap-[1.25em] mt-[1.25em] mb-[1.25em]",
  };

  return (
    <>
      {renderModal()}

      <section className={style.parent}>
        <div className="max-[945px]:w-[90%] w-[38.0625em]">
          <div className={style.wrapperInfoJob}>
            <div className="w-[2.6875em] h-[2.6875em] rounded-[0.625em] bg-primary"></div>
            <h2 className="font-semibold">Senior IT - PT INDOGUNA PERKASA</h2>
          </div>

          <div className="max-[945px]:h-full h-[4.375em] max-[945px]:py-5 max-[945px]:px-6  grid grid-cols-2 px-[1.25em] bg-soft-green rounded-[0.675em] mb-[1.25em]">
            <div className="flex items-center gap-[1.25em] max-[945px]:flex-col max-[945px]:items-start max-[945px]:gap-[0.675em] ">
              <h2 className="font-medium max-[945px]:text-[0.875em]">
                Pertanyaan 1
              </h2>

              <div className="w-[9.1875em] max-[945px]:w-[7.5em] h-[0.875em] bg-soft-grey2 rounded-full relative overflow-hidden before:absolute before:left-0 before:top-0 before:w-[20%] before:h-full before:bg-primary"></div>
            </div>

            <div className="flex items-center justify-end max-[945px]:flex-col max-[945px]:items-start gap-[0.675em] max-[943px]:pt-[0.5em]">
              <h2 className="font-medium text-[0.875em] max-[943px]:self-end">
                Waktu Pengerjaan
              </h2>

              <div className="flex items-center justify-end max-[943px]:w-full gap-[0.675em] w-max">
                <p className="text-[#8A8A8A] font-medium text-[0.75em]">
                  44:39
                </p>

                <div className="w-[0.975em] h-[0.975em] border-4 border-primary rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[0.675em] p-[1.25em]">
            <h2 className="font-semibold">
              Menurutmu apa yang dimaksud dengan micromanage?
            </h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-[175px] border rounded-[0.675em] mt-[1em] p-[1.25em]  max-[943px]:text-[0.675em] font-medium focus:outline-none text-[#8A8A8A]"
              value="Isi Jawaban"
            />

            <Laptop>
              <div className="grid grid-cols-2 gap-[1.25em] mt-[1.25em]">
                <Button
                  onClick={() => handleClickSkip()}
                  size="md"
                  variant="outline-3"
                >
                  Lewati
                </Button>
                <Button onClick={() => {}} size="md" variant="disabled">
                  Simpan Jawaban
                </Button>
              </div>
            </Laptop>
          </div>

          <div className="flex flex-col items-center mt-[1.25em]">
            <p className="text-[0.9em] max-[943px]:text-[0.75em] text-[#8A8A8A] text-center">
              NB: Melewatkan waktu menjawab dapat mengurangi bobot nilai tes
              ujian anda
            </p>

            <h4 className="flex items-center justify-center font-medium text-[0.90em] mt-[1.25em]">
              Powered By{" "}
              <img src={Logo} alt="Logo Rekruitmen AI" className="w-[7em]" />
            </h4>
          </div>

          <Tablet>
            <div className="fixed w-full bottom-0 py-[1em] left-[50%] translate-x-[-50%]  grid grid-cols-2 gap-[1.25em] mt-[1.25em] px-[1em] bg-white shadow-xl">
              <Button
                onClick={() => handleClickSkip()}
                size="md"
                variant="outline-3"
              >
                Lewati
              </Button>
              <Button onClick={() => {}} size="md" variant="disabled">
                Simpan Jawaban
              </Button>
            </div>
          </Tablet>
        </div>
      </section>
    </>
  );
};

export default TestExam;
