import { Outlet } from "react-router-dom";
import Logo from "@/assets/img/logo";
import Hero from "@/assets/img/hero.jpg";
function HomeLayout() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="hero grid grid-cols-1 grid-rows-1 h-screen ">
        <div
          className="hero-img border"
          style={{ gridArea: "1/1" }}>
          <img
            className="w-screen h-screen blur-hero"
            src={Hero}
            alt=""
          />
        </div>
        <div
          className="z-10 flex flex-col justify-start items-center p-4 w-fit"
          style={{ gridArea: "1/1" }}>
          <img
            className="w-8"
            src={Logo}
            alt=""
          />
          <h4>Animator</h4>
        </div>
        <div
          className="hero__content z-10 place-self-center"
          style={{ gridArea: "1/1" }}>
          <h1 className="animate__animated animate__fadeInUp font-semibold text-7xl text-white">
            Welcome to Animator
          </h1>
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
