import {
    FaBook,

  FaEnvelope,
  FaHome,
  FaList,
  

  FaUsers,
} from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";

import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Dashboard = () => {


    const {user} = useAuth();

  return (
    <>
    
    <div className="flex flex-row-reverse relative">
      {/* dashboard side bar  */}
      <div className="w-64 my-20 h-2/3 bg-secondary sticky top-0 rounded-md py-5 text-white">
      <div className="mt-2 p-2 py-2">
              {user && (
                <div className="flex flex-col lg:flex-row-reverse  items-center justify-center gap-2 mr-2 text-white">
                  <h3>User: {user?.displayName}</h3>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="divider"></div>
        <ul className="menu">
          
            <>
              <li>
                <NavLink to="/dashboard/profile">
                  <ImProfile/> Gamer Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/createTask">
                  <IoIosCreate/> Create New Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/todo">
                  <FaList /> TO DO
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allTasks">
                  <FaBook /> All Tasks
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allGamers">
                  <FaUsers /> All Gamers
                </NavLink>
              </li>
            </>
          
            
          
          {/* shared nav links  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
            <GiReturnArrow />
              Return to GamersGrid
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content  */}
      <div className="flex-1 p-8">
      <div className="w-3/6 mx-auto uppercase text-3xl font-exo text-center border-b py-1 mb-20">Player Task Dashboard</div>
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
