import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";



const MainLayout = () => {

  const navigation = useNavigation();
console.log(navigation.state === "loading");


  return (
    <div>
     <Header></Header>
      <div className="min-h-[80vh] my-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
