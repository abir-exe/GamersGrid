import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashsboard/DashBoard/Dashboard";
import CreateTask from "../Pages/Dashsboard/CreateTask/CreateTask";
import ToDo from "../Pages/Dashsboard/ToDo/ToDo";
import PrivateRoute from "./PrivateRoute";
import AllTasks from "../Pages/Dashsboard/AllTasks/AllTasks";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "createTask",
          element: <CreateTask></CreateTask>
        },
        {
          path: "todo",
          element: <ToDo></ToDo>
        },
        {
          path: "allTasks",
          element: <AllTasks></AllTasks>
        }
      ]
    }
  ]);

export default router;