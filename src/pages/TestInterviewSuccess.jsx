import { useEffect } from "react";

// Icon
import { BsCheck } from "react-icons/bs";

// Image
import Logo from "/Logo2.png";

const TestInterviewSuccess = () => {
  const style = {
    parent: "h-[100vh] flex items-center justify-center max-[934px]:px-[1.5em]",

    card: {
      parent:
        "flex flex-col items-center justify-center bg-white w-full max-w-[36.8125em] rounded-[0.675em] p-[1.25em] text-center",
      iconCheck:
        "w-[1em] h-[1em] flex items-center justify-center rounded-full bg-primary text-white text-[7em]",
      title: "font-semibold mt-[1.25em]",
      job_name: "font-semibold text-[0.875em] my-[1.25em]",
      applicant_name: "font-medium text-[#8A8A8A]",
      closing:
        "bg-soft-green rounded-[0.675em] p-[1.25em] mt-[2.5em] font-medium text-[0.875em]",
    },
  };

  const Row1 = () => {
    return (
      <div className={style.card.parent}>
        <div className={style.card.iconCheck}>
          <BsCheck />
        </div>

        <div>
          <h2 className={style.card.title}>Interview Selesai</h2>
          <h2 className={style.card.job_name}>
            Senior IT - PT Indoguna Perkasa
          </h2>
          <h2 className={style.card.applicant_name}>
            Peserta Ujian: <span className="text-primary">Muhammad Raihan</span>
          </h2>
        </div>

        <div className={style.card.closing}>
          <p>
            Terima kasih telah mengikuti tes ujiankami akan memberikan penilaian
            pada Anda dan menginformasikan update melalui email atau telepon
            Anda
          </p>
        </div>
      </div>
    );
  };

  const Row2 = () => {
    return (
      <h4 className="flex items-center justify-center text-[0.90em] mt-[1.25em]">
        Powered By{" "}
        <img src={Logo} alt="Logo Rekruitmen AI" className="w-[8em]" />
      </h4>
    );
  };

  useEffect(() => {
    window.addEventListener("load", function () {
      document.body.classList.add("bg-[#C3FFE9]");
    });

    return () => {
      window.addEventListener("load", function () {
        document.body.classList.remove("bg-[#C3FFE9]");
      });
    };
  }, []);

  return (
    <section className={style.parent}>
      <div>
        <Row1 />
        <Row2 />
      </div>
    </section>
  );
};

export default TestInterviewSuccess;
