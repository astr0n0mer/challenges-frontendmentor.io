import "./css/App.css";
import FeatureGrid from "./FeatureGrid.jsx";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">
          <span className="header__title--thin">
            Reliable, efficient delivery{" "}
          </span>
          Powered by Technology
        </h1>
        <p className="header__subtitle">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main className="main">
        <FeatureGrid className="FeatureGrid" />
      </main>
    </div>
  );
}
