import PicOfDay from "./PicOfDay";
import MarsInputTaker from "./MarsInputTaker";

function Home() {
  return (
    <div className="flex gap-8">
      <PicOfDay />
      <MarsInputTaker />
    </div>
  );
}

export default Home;
