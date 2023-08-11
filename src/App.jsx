// Routes
import AppRoutes from "./routes/Routes";

// CSS
import "./index.less";
import "./App.css";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <AppRoutes />
    </ModalProvider>
  );
}

export default App;
