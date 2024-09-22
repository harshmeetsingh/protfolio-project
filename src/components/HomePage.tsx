import { FunctionComponent } from "react";
import "./HomePage.css";
import {
  HeroImageUrl,
  NameTitle,
  iconsUrl,
  sectionTitles,
  socialTexts,
  socialUrls,
} from "../utils/content-utils";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="home-page-container">
      <header className="home-page-header">
        <img className="hero-image" src={HeroImageUrl} />
        <h1 className="">{NameTitle}</h1>
      </header>
      <div className="home-page-aboutme">
        <h2 className="home-page-aboutme-title">{sectionTitles.aboutMe}</h2>
        <p>
          Hi, I'm Jasmine, a beginner UX designer with a love for creating
          intuitive, user-centered designs. With a background in [mention any
          relevant past experience, even if from another field], I am now
          transitioning into the world of UX design. My journey is fueled by
          curiosity and a desire to solve problems through design.
        </p>
      </div>
      <div>
        <h2 className="home-page-education-title">{sectionTitles.education}</h2>
        <ul>
          <li>"Completed UX Design course at [institution]" :: PlaceHolder</li>
          <li>"Certified in Human-Computer Interaction" :: Placeholder</li>
        </ul>
      </div>
      <footer className="home-page-footer">
        <h3>{sectionTitles.contactInfo}</h3>
        <p>
          {" "}
          <b>Email:</b> jasmine@example.com
        </p>
        <div className="social-links">
          <b>{socialTexts.linkedIn}</b>

          <a
            className="social-links-image"
            href={socialUrls.linkedIn}
            target="_blank"
          >
            <img
              height={24}
              width={24}
              src={iconsUrl.linkedIn}
              alt="linkedIn-icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
