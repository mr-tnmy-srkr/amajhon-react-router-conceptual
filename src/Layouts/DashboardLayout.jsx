import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-10">
      <div className="p-5 shadow-xl rounded-lg ">
        <ul className="flex gap-10 flex-col text-xl md:text-4xl font-semibold">
          <li className="">
          <Link to="/dashboard"><div className="">Dashboard</div></Link>
          </li>
          <li className="">
          <Link to="/dashboard/profile"><div>Profile</div></Link>
          </li>
          <li className="">
          <Link to="/dashboard/editProfile"><div>Edit Profile</div></Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center text-xl md:text-3xl"><Outlet></Outlet></div>
    </div>
  );
};

export default DashboardLayout;
