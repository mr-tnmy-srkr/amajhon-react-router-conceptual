

const Header = () => {
    return (
        <div>
               <div>
              <section className="flex justify-between items-center px-10 py-5 shadow-xl">
      <div>
        <h1 className="text-4xl font-bold">Amajhon</h1>
      </div>
        <nav >
          <ul className="flex gap-5 font-semibold text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
        </div>
        </div>
    );
};

export default Header;