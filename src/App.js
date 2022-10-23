import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import FreeCourses from "./components/FreeCourses";
import PrivateRoute from "./components/PrivateRoute";
import Courses from "./components/Courses";
import CourseDes from "./components/CourseDes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/Courses",
          element: (
            <PrivateRoute>
              <Courses></Courses>
            </PrivateRoute>
          ),
        },
        {
          path: "/course/:id",
          element: <CourseDes></CourseDes>,
          loader: ({ params }) => {
            fetch(`http://localhost:1500/course/${params.id}`);
          },
        },
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
