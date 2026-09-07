import Footer from "../../components/footer";
import Header from "../../components/header";
import Features from "../..//sections/features";
import GetInTouch from "../..//sections/get-in-touch";
import HeroSection from "../../sections/hero";
import HowItWorks from "../../sections/how-it-works";
import PreviewSection from "../../sections/overview";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground font-[Geist_Variable,sans-serif] ">
        <Header />
        <HeroSection />
        <PreviewSection />
        <Features />
        <HowItWorks />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
