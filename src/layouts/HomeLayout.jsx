import { Outlet } from "react-router-dom";
function HomeLayout() {
  return (
    <div className=" flex flex-col gap-4 p-4 h-screen">
      <div className="">Home Layout</div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
