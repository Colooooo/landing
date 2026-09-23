import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LazyMotion, domAnimation } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LazyMotion features={domAnimation} strict>
      <App />
    </LazyMotion>
  </BrowserRouter>,
);
