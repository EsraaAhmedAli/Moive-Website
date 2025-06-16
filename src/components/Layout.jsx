import { Outlet } from "react-router-dom";
import Navmain from "../components/Navmain";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navmain />
      <div className="container mt-4" >
        <Outlet />
      </div>
      
    </>
  );
}
