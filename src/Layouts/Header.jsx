import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <section className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center px-10 py-5 shadow-xl">
          <div>
            <h1 className="text-4xl font-bold">Amajhon</h1>
          </div>
          <nav>
            <ul className="flex gap-5 font-semibold text-xl">
              
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-green-200 text-2xl rounded-lg"
                      : ""
                  }
                >
                  Home
                </NavLink>
             
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-green-200 text-2xl rounded-lg"
                      : ""
                  }
                >
                  Products
                </NavLink>
              
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-green-200 text-2xl rounded-lg"
                      : ""
                  }
                >
                  Dashboard
                </NavLink>
            
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Header;
