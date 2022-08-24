import "./App.css";
import Header from "./components/header";
import ICO from "./components/ico";
import MobileApp from "./components/mobileApp";
import TokenSale from "./components/tokenSale";
import RoadmapFirst from "./components/roadmapfirst";
import RoadmapSecond from "./components/roadmapsecond";
import Team from "./components/team";
import Partners from "./components/partners";
import MediaPartner from "./components/mediaPartner";
import Blog from "./components/blog";
import Faqs from "./components/faqs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MintForm from "components/mintForm";

function App() {
  return (
    <div className="App ">
      <Header />
      <main className="nk-pages">
        <MintForm />
        <ICO />
        <MobileApp />
        <TokenSale />
        <RoadmapFirst />
        <RoadmapSecond />
        <Team />
        <Partners />
        <MediaPartner />
        <Blog />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
