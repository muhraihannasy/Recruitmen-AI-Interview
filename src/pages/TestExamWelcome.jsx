import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Components
import { Button } from "../components";

// Image
import Logo from "/Logo2.png";
import ROUTE from "../routes/Route";

const TestExamWelcome = () => {
  const navigate = useNavigate();

  const style = {
    parent: "flex h-[100vh] max-[943px]:flex-col",

    col1: {
      parent:
        "flex-1 flex items-center flex-col bg-orange-200 pt-[5em] max-[943px]:pt-[2em]",
      heading: "font-semibold text-[2.625em] text-white max-[943px]:text-[1em]",
    },

    col2: {
      parent:
        "w-[31.25em] flex flex-col  justify-between pt-[5em] pb-[2em] px-[1.5em] max-[943px]:w-full",
      name_applicant:
        "border-b w-full pb-4 font-semibold text-center text-[#8A8A8A]",
      wrapperInfoJob:
        "flex items-center justify-center gap-[1.25em] mt-[1.25em] ",
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
        <Tablet>
          <h4 className="flex items-center justify-center font-medium text-white text-[0.75em]">
            Powered By{" "}
            <img src={Logo} alt="Logo Rekruitmen AI" className="w-[7em]" />
          </h4>
        </Tablet>

        <Tablet>
          <h1 className={style.col1.heading}>
            Selamat datang di Halaman Tes Ujian
          </h1>
        </Tablet>

        <Laptop>
          <h1 className={style.col1.heading}>Selamat datang di</h1>
          <h1 className={style.col1.heading}>Halaman Tes Ujian</h1>
        </Laptop>
      </div>

      <div className={style.col2.parent}>
        <Laptop>
          <div>
            <h2 className={style.col2.name_applicant}>
              Peserta: <span className="text-primary">Muhammad Raihan</span>
            </h2>

            <div className={style.col2.wrapperInfoJob}>
              <div className="w-[2.6875em] h-[2.6875em] rounded-[0.625em] bg-soft-grey"></div>
              <h2 className="font-semibold">Senior IT - PT INDOGUNA PERKASA</h2>
            </div>

            <div className="bg-soft-green p-6 rounded-[0.675em] my-[2.5em]">
              <h2 className="font-semibold text-primary">
                Berikut adalah ketentuan dalam mengikuti tes ujian:
              </h2>
              <ol className="pl-5 list-decimal font-medium text-[0.875em]">
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

            <div className="flex justify-center">
              <Button
                size="sm"
                variant="primary"
                onClick={() => navigate(ROUTE.test_exam)}
              >
                Mulai Ujian
              </Button>
            </div>
          </div>
        </Laptop>

        <Tablet>
          <div className="fixed bottom-[1em] left-[50%] translate-x-[-50%]  w-[95%]">
            <div className="bg-white rounded-[0.625em] px-[1em] pb-[0.2em] pt-[1.5em] mb-[1em]">
              <h2 className={style.col2.name_applicant}>
                Peserta: <span className="text-primary">Muhammad Raihan</span>
              </h2>

              <div className={style.col2.wrapperInfoJob}>
                <div className="w-[2.6875em] h-[2.6875em] rounded-[0.625em] bg-soft-grey"></div>
                <h2 className="font-semibold max-[943px]:text-[0.9em]">
                  Senior IT - PT INDOGUNA PERKASA
                </h2>
              </div>

              <div className="bg-soft-green p-6 rounded-[0.675em] my-[2.5em] max-[943px]:my-[1em]">
                <h2 className="font-semibold text-primary max-[943px]:text-[0.75em] mb-[5px]">
                  Berikut adalah ketentuan dalam mengikuti tes ujian:
                </h2>
                <ol className="pl-5 list-decimal font-medium text-[0.875em] max-[943px]:text-[0.75em]">
                  <li>Ujian membutuhkan koneksi internet</li>
                  <li>
                    Durasi pengerjaan adalah 45 menit. Dimulai sejak anda klik
                    tombol ‘Mulai Ujian’
                  </li>
                  <li>
                    Pertanyaan berupa essay yang harus diisi secara manual
                  </li>
                  <li>
                    Tidak diizinkan untuk melakukan copy-paste dalam pengisian
                    jawaban
                  </li>
                  <li>Jawaban yang disimpan tidak dapat di edit</li>
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-1">
              <Button
                size="sm"
                variant="primary"
                onClick={() => navigate(ROUTE.test_exam)}
              >
                Mulai Ujian
              </Button>
            </div>
          </div>
        </Tablet>

        <Laptop>
          <h4 className="flex items-center justify-center font-medium text-[#8A8A8A]">
            Powered By{" "}
            <img src={Logo} alt="Logo Rekruitmen AI" className="w-[8em]" />
          </h4>
        </Laptop>
      </div>
    </section>
  );
};

export default TestExamWelcome;
