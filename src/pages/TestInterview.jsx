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

// Icon
import { BsArrowRepeat, BsArrowRightShort } from "react-icons/bs";

// Image
import Logo from "/Logo.png";
import { HiWifi } from "react-icons/hi";

const TestInterview = () => {
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
      "max-[943px]:h-[45em] pb-[4em] max-w-[1350px] mx-auto lg:p-[1.25em]",
    wrapperInfoJob: "flex items-center gap-[1.25em]  text-white ",
  };

  return (
    <>
      {renderModal()}

      <header className="grid grid-cols-2 p-[1.25em] justify-between max-w-[1350px] mx-auto mt-[1.875em] max-[943px]:grid-cols-1 max-[943px]:gap-y-[1.5em]">
        <div className={style.wrapperInfoJob}>
          <div className="w-[2.6875em] h-[2.6875em] rounded-[0.625em] bg-primary"></div>
          <h2 className="font-semibold">Senior IT - PT INDOGUNA PERKASA</h2>
        </div>

        <div className="flex items-center gap-[1.5em] max-[945px]:h-full h-[4.375em] max-[945px]:py-5 max-[945px]:px-6 px-[1.25em] bg-[#3E3939] rounded-[0.675em] text-white justify-between">
          <div className="w-max flex items-center gap-[1.25em] max-[945px]:gap-[0.675em] max-[434px]:items-start max-[434px]:flex-col">
            <h2 className="font-medium max-[945px]:text-[0.875em] whitespace-nowrap">
              Pertanyaan 1
            </h2>

            <div className="w-[9.1875em] max-[945px]:w-[7.5em] h-[0.875em] bg-soft-grey2 rounded-full relative overflow-hidden before:absolute before:left-0 before:top-0 before:w-[20%] before:h-full before:bg-primary"></div>
          </div>

          <div className="flex items-center justify-end gap-[1em]">
            <h2 className="font-medium text-[0.875em]">
              <span>Waktu</span>{" "}
              <span className="absolute invisible min-[1077px]:visible min-[1077px]:relative">
                Pengerjaan
              </span>
            </h2>

            <div className="flex items-center justify-end gap-[0.675em] w-max">
              <p className="font-medium text-[0.75em]">44:39</p>

              <div className="w-[0.975em] h-[0.975em] border-4 border-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <section className={style.parent}>
        {/* ============ For Large Screen ============ */}
        <Laptop>
          <div className="w-full grid grid-cols-2 bg-[#3E3939] p-[1.25em] rounded-[0.675em] gap-[1.25em]">
            <div className="">
              <div className="h-[35.4375em] bg-orange-200 rounded-[0.275em]"></div>
              <div className="flex items-center justify-center mt-[1.25em]">
                <Button size="md" variant="outline-2">
                  <BsArrowRepeat className="text-lg" />
                  Ulangi Pertanyaan
                </Button>
              </div>
            </div>

            <div className="">
              <div className="h-[35.4375em] bg-orange-300 rounded-[0.275em]"></div>
              <div className="flex items-center justify-center gap-[1.25em] mt-[1.25em]">
                <Button size="md" variant="outline-3">
                  Lewati
                </Button>
                <Button size="md" variant="whitelab">
                  Rekam Jawaban
                </Button>
              </div>
            </div>
          </div>
        </Laptop>

        {/* ============ For Large Screen ============ */}

        {/* ============ For Small Screen ============ */}

        <Tablet>
          <div className="w-full grid grid-cols-1 bg-[#3E3939] rounded-[0.675em]">
            <div className="relative">
              <div className="h-[18.6875em] bg-orange-200 rounded-tl-[0.675em] rounded-tr-[0.675em]"></div>
              <div className="flex items-center justify-center mt-[1.25em] absolute bottom-[1.5em] left-[50%] translate-x-[-50%]">
                <Button size="md" variant="outline-2">
                  <BsArrowRepeat className="text-lg" />
                  Ulangi Pertanyaan
                </Button>
              </div>
            </div>

            <div>
              <div className="h-[18.6875em] bg-orange-300 rounded-bl-[0.675em] rounded-br-[0.675em]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[1.25em] mt-[1.25em] p-[1.25em]">
            <button className="h-[40px] flex items-center rounded-[0.675em] overflow-hidden">
              <div className="flex items-center justify-center bg-[#000000] text-white font-medium w-max px-4 h-full">
                00:01
              </div>
              <div className="flex items-center justify-center flex-1 h-full pl-4 pr-2 pr-6 font-medium text-center text-white bg-primary">
                Simpan dan Lanjutkan{" "}
                <BsArrowRightShort className="text-[1.7em]" />
              </div>
            </button>
            <Button size="md" variant="whitelab">
              Rekam Jawaban
            </Button>
            <Button size="md" variant="outline-3">
              Lewati
            </Button>
          </div>
        </Tablet>

        {/* ============ For Small Screen ============ */}

        <div className="flex flex-col items-center justify-centermb-[0.6em] mt-[1.70em] text-white max-[943px]:pb-[2.5em]">
          <p className="text-center text-[0.95em] px-4">
            NB: Melewatkan waktu menjawab dapat mengurangi bobot nilai tes ujian
            anda
          </p>
          <div className="flex items-center gap-[0.5em] my-[1.25em]">
            <HiWifi className="text-[#3A943D] text-[1.25em]" />
            <h2 className="text-white">Koneksi Bagus</h2>
          </div>
          <h4 className="flex items-center justify-center text-[0.90em] mt-[1.25em] gap-[0.5em]">
            Powered By{" "}
            <img src={Logo} alt="Logo Rekruitmen AI" className="w-[8em]" />
          </h4>
        </div>
      </section>
    </>
  );
};

export default TestInterview;
