import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
