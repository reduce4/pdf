import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
// import { defineMicroApp } from "@micro-web/sub";
// export default defineMicroApp((container) => {
//   function render(props) {
//     ReactDOM.createRoot(container).render(<App {...props} />);
//   }
//   return {
//     mount: render,
//     render: render,
//     unmount() {
//       ReactDOM.unmountComponentAtNode(container);
//     },
//   };
// });
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
