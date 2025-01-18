import Hero from "./components/Hero";
import ShowCaseOrbit from "./components/ShowCaseOrbit";

const Portfolio = () => {
  return (
    <main className="h-screen">
      <Hero />
      <ShowCaseOrbit />
      <div>Services</div>
      <div>Reviews</div>
      <footer>
        contacts
      </footer>
    </main>
  );
};

export default Portfolio;
