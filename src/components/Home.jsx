import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Social from './Social';
import '../css/home.css';

function initialsOf(name) {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Home() {
  return (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">
        <div className="bento">
          <div className="tile hero-intro span-4 rspan-2">
            {"Open to helping build cool things" && (
              <span className="hero-eyebrow">"Open to helping build cool things"</span>
            )}
            <h1 className="hero-name">"Jose Berger-Pinto"</h1>
            <div className="hero-roles">
              <span>I&apos;m&nbsp;</span>
              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: ["a Developer", "passionate", "diligent"],
                }}
              />
            </div>
            <div className="hero-cta">
              <Link className="btn-pill btn-accent" to="/projects">
                View my work
              </Link>
              <Link className="btn-pill btn-ghost" to="/about">
                About me
              </Link>
            </div>
          </div>

          <div className="tile tile--accent monogram span-2">
            <span className="monogram-mark">{initialsOf("Jose Berger-Pinto")}</span>
            <span className="monogram-label">"Jose Berger-Pinto"</span>
          </div>

          <div className="tile hero-social span-2">
            <span className="tile-label">Find me</span>
            <Social />
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Home;
