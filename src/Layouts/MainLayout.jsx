import Footer from "./Footer";
import Header from "./Header";
import ClockLoader from "react-spinners/ClockLoader";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {
  
  const loc = useLocation();
  useEffect(()=>{
    console.log("useEffect loc",loc);
    if (loc.pathname === '/') {
      document.title = `Amajhon - home`
    }
    else{
      document.title = `Amajhon${loc.pathname.replace('/','-')}`
    }

    if (loc.state) {
      document.title = loc.state
    }
  },[loc.pathname,loc])

  console.log(loc);


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
