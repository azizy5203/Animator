import { Outlet } from "react-router-dom";
import Logo from "@/assets/img/logo";
function HomeLayout() {
  return (
    <div className=" flex flex-col gap-4 p-4 h-screen">
      <div className="">
        <h4>Animator</h4>
        <img
          src={Logo}
          alt=""
        />
      </div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
