import Home from "./components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./components/not-found";
import About from "./components/about";
import "bootstrap/dist/css/bootstrap.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
