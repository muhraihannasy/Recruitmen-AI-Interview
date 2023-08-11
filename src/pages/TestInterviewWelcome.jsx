import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Route
import ROUTE from "../routes/Route";

// Icons
import {
  BsFillPlayFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { HiWifi } from "react-icons/hi";

// Components
import { Button } from "../components";

// Image
import Logo from "/Logo.png";
import Speaker from "/speaker.png";

const TestInterviewWelcome = () => {
  const navigate = useNavigate();

  const style = {
    parent:
      "grid lg:grid-cols-2 md:grid-cols-1 h-full lg:h-[100vh] max-[943px]:flex-col max-[943px]:px-4 max-w-[1350px] mx-auto lg:pb-0 pb-[6em]",

    col1: {
      parent:
        "flex items-center flex-col lg:pt-[5em]  lg:pl-[5em] pl-0 lg:order-1 order-2 lg:mb-0 mb-[1.25em]",
      heading: "font-semibold text-[2.625em] text-white max-[943px]:text-[1em]",
    },

    col2: {
      parent:
        "flex flex-col  pt-[4em] pb-[2em] lg:px-[1.5em] max-[943px]:w-full lg:pb-0 lg:order-2 order-1",
      name_applicant: "w-full font-semibold text-white",
      wrapperInfoJob: "flex items-center gap-[1.25em] mt-[1.25em] ",
    },
  };

  const Laptop = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 944 });
    return isLaptop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 943 });
    return isTablet ? children : null;
  };

  return (
    <section className={style.parent}>
      <div className={style.col1.parent}>
        <div>
          <Laptop>
            <h2 className={style.col2.name_applicant}>
              Peserta: <span className="text-primary">Muhammad Raihan</span>
            </h2>
          </Laptop>

          <div className={style.col2.wrapperInfoJob}>
            <div className="w-[2.6875em] h-[2.6875em] rounded-[0.625em] bg-soft-grey"></div>
            <h2 className="font-semibold text-primary">
              Senior IT - PT INDOGUNA PERKASA
            </h2>
          </div>

          <div className="rounded-[0.675em] mt-[1em]">
            <h2 className="font-semibold text-white">
              Berikut adalah ketentuan dalam mengikuti tes ujian:
            </h2>
            <ol className="pl-5 list-decimal font-medium text-white text-[0.875em] mt-[0.3em] leading-relaxed">
              <li>Ujian membutuhkan koneksi internet</li>
              <li>
                Durasi pengerjaan adalah 45 menit. Dimulai sejak anda klik
                tombol ‘Mulai Ujian’
              </li>
              <li>Pertanyaan berupa essay yang harus diisi secara manual</li>
              <li>
                Tidak diizinkan untuk melakukan copy-paste dalam pengisian
                jawaban
              </li>
              <li>Jawaban yang disimpan tidak dapat di edit</li>
            </ol>
          </div>

          <Laptop>
            <div className="mt-[4em]">
              <Button
                size="md"
                variant="primary"
                onClick={() => navigate(ROUTE.test_exam)}
              >
                <BsFillPlayFill className="text-[1.7em]" />
                Mulai Interview
              </Button>
              <h4 className="flex items-center mt-[2em] font-medium text-[0.8em] text-[#8A8A8A] gap-[0.3em]">
                Powered By{" "}
                <img src={Logo} alt="Logo Rekruitmen AI" className="w-[8em]" />
              </h4>
            </div>
          </Laptop>
        </div>
      </div>

      <div className={style.col2.parent}>
        <Tablet>
          <h4 className="flex items-center justify-center font-medium text-[0.8em] text-[#8A8A8A] gap-[0.3em] mb-[1em]">
            Powered By{" "}
            <img src={Logo} alt="Logo Rekruitmen AI" className="w-[8em]" />
          </h4>
          <div className="font-medium text-white text-center mb-[1.23em]">
            <h2>Selamat datang di Halaman Interview</h2>
            <h2 className="text-[0.875em]">Peserta: Muhammad Raihan</h2>
          </div>
        </Tablet>

        <Laptop>
          <div className="flex items-center justify-end gap-[0.5em] mb-[0.6em]">
            <HiWifi className="text-[#3A943D] text-[1.25em]" />
            <h2 className="text-white">Koneksi Bagus</h2>
          </div>
        </Laptop>

        <div className="lg:bg-[#3E3939] rounded-[0.675em] max-w-[700px] mx-auto lg:pb-[1.4em]">
          <div className="w-full h-[20.6875em] bg-orange-200 rounded-[0.675em] overflow-hidden">
            <img src={Speaker} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex max-[943px]:flex-col max-[943px]:items-center gap-[1em] pt-[1em] justify-center text-white px-4 pt-3.5">
            <div className="flex gap-[0.6em]">
              <div className="flex items-center justify-center rounded-full w-[1.5em] h-[1.5em] bg-red">
                <BiSolidMicrophoneOff className="text-md" />
              </div>
              <h4 className="flex-1 ">Tidak dapat mengakses Microphone</h4>
            </div>
            <div className="flex gap-[0.6em]">
              <div className="flex items-center justify-center rounded-full w-[1.5em] h-[1.5em] bg-red">
                <BsFillCameraVideoOffFill className="text-sm" />
              </div>
              <h4 className="flex-1 ">Tidak dapat mengakses Kamera</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom If Screen Tablet >  */}
      <Tablet>
        <div className="fixed bottom-[1em] left-[50%] translate-x-[-50%]  w-[95%]">
          <div className="grid grid-cols-1 mx-2">
            <Button
              size="md"
              variant="primary"
              onClick={() => navigate(ROUTE.test_exam)}
            >
              Mulai Interview
            </Button>
          </div>
        </div>
      </Tablet>
    </section>
  );
};

export default TestInterviewWelcome;
