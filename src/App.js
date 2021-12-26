import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faWolfPackBattalion } from "@fortawesome/free-brands-svg-icons";
import websiteImage from "./assets/images/website_image.png";
import "./App.css";

function App() {
  return (
    <div className="App grid ff-mont">
      <nav className="nav bg-light flex ff-mont fw-med">
        <div>
          <img src="" alt="logo" className="logo" />
        </div>
        <ul className="flex " style={{ gap: "5vw" }}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="contact-btn">
          <a className="fc-light" href="#">
            Contact
          </a>
        </div>
      </nav>

      <section className="landing grid grid-full-page fc-light ff-mont">
        <div className="hero-text-container flex">
          <div className="hero-text ">
            <p className="uppercase ff-cent">Designs </p>
            that are out of this
            <p className="uppercase"> World</p>
          </div>
          <a id="hero-text-btn" href="#" className="neon-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Join Us
          </a>
        </div>
      </section>

      <section className="grid-full-page seperator">
        <h2 className="uppercase text-center fc-light bg-dark">
          <span>Maximize</span> Outreach
        </h2>
      </section>

      <section className="cards  grid-full-page">
        <div className="cards-container grid">
          <div>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faPenNib} />
          </div>
          <div>
            <FontAwesomeIcon icon={faWolfPackBattalion} />
          </div>
        </div>
      </section>

      <section className="grid-full-page flex seperator">
        <h3 className="uppercase text-center fc-dark ">
          <span>
            <span>Professional</span>{" "}
            <span>Sites That Enhance Your Business</span>
          </span>
        </h3>
        <div>
          <img src={websiteImage} alt="image of a website created by us" />
        </div>
      </section>

      <section className="join-sect grid-full-page flex">
        <div
          className="flex"
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            width: "90%",
          }}
        >
          <h2>Book a meeting with us</h2>
          <a href="" className="neon-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Join Us
          </a>
        </div>
      </section>

      <section className="teste grid-center flex">
        <div className="teste-grid">
          <h2>You're in good company</h2>
          <h3>
            As a local business, we understand the needs that local sources
            require. You can trust us with your reputation
          </h3>
          <div className="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="main-teste">
          <img src={websiteImage} alt="image of a website we made" />
          <div className="below-img-text">
            <h3>Here is what we have done</h3>
            <p>
              With an extenisve reportoire, we can face any challenge you throw
              at us. Nothing is too big, we will fix your failing marriage with
              your wife if we have to. We're up to it.
            </p>
          </div>
        </div>
      </section>

      <footer className="grid-center">
        <nav className="ftr-nav flex">
          <li>
            <a href="#">Mobile App</a>
          </li>
          <li>
            <a href="#">Help Desk</a>
          </li>
          <li>
            <a href="#">logo</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </nav>
        <div className="divider-line"></div>
        <div className="social-links flex">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text-center">© Galactic Solutions 2021. Thank you!</p>
      </footer>
    </div>
  );
}

export default App;
