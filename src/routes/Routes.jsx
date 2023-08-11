import { Route, Routes } from "react-router-dom";

// Routes
import ROUTE from "./Route";

// Pages
import TestExam from "../pages/TestExam";
import TestExamWelcome from "../pages/TestExamWelcome";
import TestExamSucces from "../pages/TestExamSucces";
import TestInterview from "../pages/TestInterview";
import TestInterviewWelcome from "../pages/TestInterviewWelcome";
import TestInterviewSuccess from "../pages/TestInterviewSuccess";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Test Exam */}
      <Route path={ROUTE.test_exam} element={<TestExam />} />
      {/* <Route path={ROUTE.test_exam_welcome} element={<TestExamWelcome />} /> */}
      <Route path={ROUTE.test_exam_success} element={<TestExamSucces />} />

      {/* Test Exam */}
      <Route path={ROUTE.test_interview} element={<TestInterview />} />
      <Route
        path={ROUTE.test_interview_welcome}
        element={<TestInterviewWelcome />}
      />
      <Route
        path={ROUTE.test_interview_success}
        element={<TestInterviewSuccess />}
      />
    </Routes>
  );
};

export default AppRoutes;
