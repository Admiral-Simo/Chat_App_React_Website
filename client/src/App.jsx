import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

// TODO authentication DONE
// TODO avatar DONE
// TODO author DONE
// TODO style scrollbar DONE
// TODO time DONE

function App() {
  return <RouterProvider router={router} />;
}

export default App;
