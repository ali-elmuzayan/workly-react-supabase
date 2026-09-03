import Footer from "./components/footer";
import Header from "./components/header";
import Features from "./components/sections/features";
import GetInTouch from "./components/sections/get-in-touch";
import HeroSection from "./components/sections/hero";
import HowItWorks from "./components/sections/how-it-works";
import OverviewSection from "./components/sections/overview";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-[Geist_Variable,sans-serif] ">
        <Header />
        <HeroSection />
        <OverviewSection />
        <Features />
        <HowItWorks />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
