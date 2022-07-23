import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5 className="text-black">What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Odoo Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing Modules</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Setting up Odoo for production usage</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Training Odoo Operations</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing Odoo Project</p>
            </li>
          </ul>
        </article>

        {/* End of UX UI */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>API integrations</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing Responsive Website</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Guided app deployment to the production</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Building SEO friendly websites</p>
            </li>
          </ul>
        </article>

        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Web Scraping</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Real Estate Listings</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Directory Scraping</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Product Listings</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lead Generation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
