import { RouterProvider } from "react-router-dom";
import { router } from "./app/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
