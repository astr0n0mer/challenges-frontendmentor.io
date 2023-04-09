import "./css/FeatureGrid.css";
import FeatureCard from "./FeatureCard.jsx";
import supervisor from "./assets/images/icon-supervisor.svg";
import teamBuilder from "./assets/images/icon-team-builder.svg";
import karma from "./assets/images/icon-karma.svg";
import calculator from "./assets/images/icon-calculator.svg";

export default function FeatureGrid() {
  return (
    <section className="feature-grid">
      <FeatureCard
        title="Supervisor"
        subtitle="Monitors activity to identify project roadblocks"
        img={supervisor}
        color="hsl(180, 62%, 55%)"
        className="feature-grid__feature"
      />
      <FeatureCard
        title="Team Builder"
        subtitle="Scans our talent network to create the optimal team for your project"
        img={teamBuilder}
        color="hsl(0, 78%, 62%)"
        className="feature-grid__feature"
      />
      <FeatureCard
        title="Karma"
        subtitle="Regularly evaluates our talent to ensure quality"
        img={karma}
        color="hsl(34, 97%, 64%)"
        className="feature-grid__feature"
      />
      <FeatureCard
        title="Calculator"
        subtitle="Uses data from past projects to provide better delivery estimates"
        img={calculator}
        color="hsl(212, 86%, 64%)"
        className="feature-grid__feature"
      />
    </section>
  );
}
