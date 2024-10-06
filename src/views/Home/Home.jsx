import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";
function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="p-4 text-7xl">
      <h1 className="">Home</h1>
      <Button
        className=""
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        {theme}
      </Button>
    </div>
  );
}

export default Home;
