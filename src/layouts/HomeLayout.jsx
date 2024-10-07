import { Outlet } from "react-router-dom";
import Logo from "@/assets/img/logo";
import Hero from "@/assets/img/hero.jpg";
import { Button } from "@/components/ui/button";
function HomeLayout() {
  return (
    <div className=" flex flex-col gap-4">
      <div className="hero grid grid-cols-1 grid-rows-1 h-screen ">
        <div
          className="hero-img"
          style={{ gridArea: "1/1" }}>
          <img
            className="w-screen h-screen blur-hero object-cover"
            src={Hero}
            alt=""
          />
        </div>
        <div
          className="z-10 flex justify-between items-start p-4"
          style={{ gridArea: "1/1" }}>
          <div className="animate__animated animate__fadeInLeft flex flex-col justify-start items-center w-fit">
            <img
              className="w-8"
              src={Logo}
              alt="hero img"
            />
            <h4 className="font-medium">Animator</h4>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <Button className="bg-foreground text-white font-medium rounded-full">
              Login
            </Button>
          </div>
        </div>
        <div
          className="hero__content z-10 place-self-center"
          style={{ gridArea: "1/1" }}>
          <h1 className="animate__animated animate__fadeInUp text-center font-semibold text-4xl sm:text-6xl   lg:text-7xl">
            <span className="text-white">Welcome to</span>
            <span className="text-foreground"> Animator</span>
          </h1>
        </div>
      </div>
      <div className="py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
