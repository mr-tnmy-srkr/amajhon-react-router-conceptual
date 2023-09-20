import Footer from "./Footer";
import Header from "./Header";

import ClockLoader from "react-spinners/ClockLoader";
import { Outlet, useNavigation } from "react-router-dom";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state === "loading");

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? (
        <p className="flex justify-center items-center my-20"><ClockLoader color="#36d7b7" /></p>
      ) : (
        <div className="min-h-[80vh] my-10">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
