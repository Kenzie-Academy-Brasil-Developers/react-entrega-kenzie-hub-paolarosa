import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./context/Providers";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Providers>
        <RoutesMain />
      </Providers>

      {/*     <AuthProvider>
        <RoutesMain />
      </AuthProvider> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
