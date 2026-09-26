import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import "./App.css";

const services = [
  {
    no: "01",
    title: "3D Scanning",
    subtitle: "Capture Reality with High-Precision 3D Scanning",
    text: "3D scanning captures the exact geometry of physical objects and converts it into accurate digital 3D data. Our high-precision scanning workflow supports reverse engineering, inspection, product development and documentation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85"
  },
  {
    no: "02",
    title: "3D Designing",
    subtitle: "Professional CAD Design & Development",
    text: "From concepts to production-ready CAD models, we create accurate and practical designs for product development, engineering and manufacturing.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=85"
  },
  {
    no: "03",
    title: "3D Printing",
    subtitle: "Rapid Prototyping & Production",
    text: "Transform digital models into physical parts with professional additive manufacturing solutions for prototypes, functional components and low-volume production.",
    image: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

const technologies = [
  ["FDM", "Fused Deposition Modeling", "Cost-effective functional prototyping and manufacturing."],
  ["SLA", "Stereolithography", "Ultra-high precision and superior surface finish."],
  ["DLP", "Digital Light Processing", "High-speed production with exceptional detail."]
];

const industries = [
  ["01", "Architecture", "Design visualization, scale models, building components and presentation-ready prototypes."],
  ["02", "Medical & Healthcare", "Medical device prototyping, anatomical models, dental and healthcare applications."],
  ["03", "Consumer Products", "Concept validation, product development, functional testing and low-volume production."],
  ["04", "Functional Prototypes", "Validate designs with functional prototypes and engineering components."],
  ["05", "Art & Interior", "Creative fabrication, decorative elements and customized installations."],
  ["06", "Education & Research", "Support learning, research and innovation with rapid prototyping."]
];

const projects = [
  ["Prototyping", "Speed up product development with rapid and functional prototypes."],
  ["Visual Merchandise", "Create realistic product models, displays and promotional props."],
  ["Art & Interior", "Turn imaginative concepts into physical spaces and objects."],
  ["Vacuum Casting", "Produce high-quality small-batch parts with production-like finishes."],
  ["Oil & Gas", "Support industrial innovation with functional prototypes and fixtures."],
  ["Sculptures", "Convert digital concepts into physical sculptures and installations."]
];

function Arrow() {
  return <span className="arrow">›</span>;
}

function App() {
  
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);


 const [stats, setStats] = useState({
    technologies: 6,
    industries: 14,
    printerModels: 39,
    services: 6,
  });

  


  const [clients, setClients] = useState([]);



  const [technologies, setTechnologies] =
  useState([]);


  const [heroImages, setHeroImages] = useState({
  image1: {
    url: "",
    alt: "",
  },
  image2: {
    url: "",
    alt: "",
  },
});

  useEffect(() => {
  const fetchClients = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/clients"
      );

      const data = await response.json();

      if (data.success) {
        setClients(data.clients);
      }
    } catch (error) {
      console.error(
        "Error fetching clients:",
        error
      );
    }
  };

  fetchClients();
}, []);



 useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/stats"
        );

        const data = await response.json();

        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };

    fetchStats();
  }, []);


// ==================================================
// GET TECHNOLOGIES
// ==================================================
useEffect(() => {

  const fetchTechnologies = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/technologies"
      );

      const data = await response.json();

      if (data.success) {
        setTechnologies(
          data.technologies
        );
      }

    } catch (error) {

      console.error(
        "Error fetching technologies:",
        error
      );

    }

  };

  fetchTechnologies();

}, []);




useEffect(() => {

  const fetchHeroImages = async () => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/hero-images"
      );

      const data = await response.json();

      if (data.success) {

        setHeroImages(data.heroImages);

      }

    } catch (error) {

      console.error(
        "Error fetching hero images:",
        error
      );

    }

  };

  fetchHeroImages();

}, []);






  // -----------------------------------------
  // ADMIN PAGE
  // -----------------------------------------

  if (window.location.pathname === "/admin") {
    return <Admin />;
  }





  const service = services[activeService];

  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#home">
            <span className="logo-mark">C</span>
            <span>CARBON <b>3D</b> LABS</span>
          </a>

          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services <small>⌄</small></a>
            <a href="#technologies">Technologies <small>⌄</small></a>
            <a href="#industries">Industries <small>⌄</small></a>
            <a href="#projects">Projects <small>⌄</small></a>
            <a href="#printers">3D Printers <small>⌄</small></a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <a className="quote-btn" href="#contact">Get a Quote</a>
          <button
            className="mobile-menu"
            onClick={() => document.body.classList.toggle("menu-open")}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        <div className="mobile-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#technologies">Technologies</a>
          <a href="#industries">Industries</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Us</a>
          <a className="mobile-quote" href="#contact">Get a Quote</a>
        </div>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>From Sketch to<br />Reality</h1>
              <p>
                Transform your ideas, concepts, and existing components into
                accurate prototypes and production-ready products with
                advanced digital manufacturing technologies.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="primary-btn">Start Your Project</a>
                <a href="#services" className="secondary-btn">Explore Services</a>
              </div>
            </div>

            {/* <div className="hero-visual">
              <div className="hero-image-grid">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=85" alt="Engineering" />
                <img src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=500&q=85" alt="CAD design" />
                <img src="https://unsplash.com/photos/a-close-up-of-a-machine-with-a-blue-light-on-it-NMCABEhN0RE" alt="3D printing" />
              </div>
              <div className="hero-dots">
                <i></i><i></i><i></i><i></i>
              </div>
            </div> */}


            
<div className="hero-visual">

  <div className="hero-image-grid">

    {/* IMAGE 1 */}

    <img
      src={heroImages.image1.url}
      alt={heroImages.image1.alt}
    />


    {/* IMAGE 2 */}

    <img
      src={heroImages.image2.url}
      alt={heroImages.image2.alt}
    />
    


  </div>


  <div className="hero-dots">

    <i></i>
    <i></i>
    <i></i>
    <i></i>

  </div>

</div>



          </div>
        </section>

        {/* STATS */}
         <section className="stats container">
  <div>
    <strong>{stats.technologies}</strong>
    <span>Technologies</span>
  </div>

  <div>
    <strong>{stats.industries}</strong>
    <span>Industries Served</span>
  </div>

  <div>
    <strong>{stats.printerModels}</strong>
    <span>3D Printer Models</span>
  </div>

  <div>
    <strong>{stats.services}</strong>
    <span>Services</span>
  </div>
</section>






        
        {/* <section className="stats container">
          <div><strong>6</strong><span>Technologies</span></div>
          <div><strong>14</strong><span>Industries Served</span></div>
          <div><strong>39</strong><span>3D Printer Models</span></div>
          <div><strong>6</strong><span>Services</span></div>
        </section> */}

        {/* SERVICES */}
        <section id="services" className="section container">
          <div className="section-heading">
            <h2>Our Services</h2>
            <p>3D Design & Printing Built<br />Around Your Needs</p>
          </div>

          <div className="service-feature">
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <div className="service-no">{service.no}</div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.text}</p>
              <a href="#contact">Read more <Arrow /></a>
              <div className="slider-dots">
                {services.map((_, i) => (
                  <button
                    key={i}
                    className={activeService === i ? "active" : ""}
                    onClick={() => setActiveService(i)}
                    aria-label={`Service ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="service-tabs">
            {["3D Scanning", "3D Designing", "3D Printing", "Reverse Engineering", "Vacuum Casting", "Post Processing", "Product Development"].map((item, i) => (
              <button
                key={item}
                className={activeService === i % 3 ? "active" : ""}
                onClick={() => setActiveService(i % 3)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        {/* <section id="technologies" className="section container">
          <div className="section-heading">
            <h2>TECHNOLOGIES</h2>
            <p>Explore Our 3D Printing<br />Technologies</p>
          </div>

          <div className="three-grid">
            {technologies.map(([short, title, text]) => (
              <article className="tech-card" key={short}>
                <b>{short}</b>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Read more <Arrow /></a>
              </article>
            ))}
          </div>
          <div className="center-btn"><a className="outline-small" href="#contact">Explore More</a></div>
        </section> */}

{/* TECHNOLOGIES */}
<section
  id="technologies"
  className="section container"
>

  <div className="section-heading">

    <h2>
      TECHNOLOGIES
    </h2>

    <p>
      Explore Our 3D Printing
      <br />
      Technologies
    </p>

  </div>


  <div className="three-grid">

    {technologies.map((technology) => (

      <article
        className="tech-card"
        key={technology._id}
      >

        <b>
          {technology.short}
        </b>

        <h3>
          {technology.title}
        </h3>

        <p>
          {technology.text}
        </p>

        <a href="#contact">
          Read more <Arrow />
        </a>

      </article>

    ))}

  </div>


  <div className="center-btn">

    <a
      className="outline-small"
      href="#contact"
    >
      Explore More
    </a>

  </div>

</section>




        {/* INDUSTRIES */}
        <section id="industries" className="industries">
          <div className="container">
            <div className="dark-heading">
              <h2>INDUSTRIES</h2>
              <p>3D Manufacturing Solutions<br />Across Industries</p>
            </div>
            <div className="industry-grid">
              {industries.map(([no, title, text]) => (
                <article className="industry-card" key={no}>
                  <h3><span>{no}</span> {title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="center-btn">
              <a className="dark-outline" href="#contact">Explore More</a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <div className="section-heading">
            <h2>PROJECTS</h2>
            <p>From Concept to<br />Creation</p>
          </div>

          <div className="projects-grid">
            {projects.map(([title, text]) => (
              <article className="project-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">View project <Arrow /></a>
              </article>
            ))}
          </div>
          <div className="center-btn"><a className="outline-small" href="#contact">Explore Project</a></div>
        </section>

        {/* CLIENTS */}
        {/* <section className="clients container">
          <div className="section-heading">
            <h2>Our Clients</h2>
            <p>Trusted By Market<br />Leaders</p>
          </div>
          <div className="client-logos">
            {["JBM", "mahindra", "wipro", "adani", "Whirlpool", "ACC", "Reliance", "MRF", "Coca-Cola"].map((x) => (
              <div key={x}>{x}</div>
            ))}
          </div>
        </section> */}

        {/* CLIENTS */}
<section className="clients container">

  <div className="section-heading">
    <h2>Our Clients</h2>

    <p>
      Trusted By Market
      <br />
      Leaders
    </p>
  </div>

  <div className="client-logos">

    {clients.map((client) => (
      <div key={client._id}>
        {client.name}
      </div>
    ))}

  </div>

</section>




        {/* MEDTECH */}
        <section id="about" className="section container">
          <div className="section-heading">
            <h2>MedTech</h2>
            <p>3D Printing Solutions for<br />Medical Innovation</p>
          </div>
          <div className="medtech-grid">
            {[
              ["Dental & Orthodontics", "Precise dental models, orthodontic aligners, surgical guides and patient-specific dental components."],
              ["Orthopedics & Prosthetics", "Customized orthopedic models, prosthetic components, anatomical models and patient-specific prototypes."],
              ["Hospital & Clinic Innovation", "Anatomical models, surgical planning tools and customized components for healthcare teams."],
              ["Medical Device and MedTech", "Rapid prototyping and manufacturing solutions for medical devices and components."],
              ["Healthcare R&D & Additive", "Support healthcare research and product development with high-precision additive manufacturing."]
            ].map(([title, text]) => (
              <article className="med-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* INQUIRY */}
        <section id="contact" className="section container inquiry">
          <div className="section-title-only">Inquiry</div>

          <div className="locations">
            <div className="location">
              <h3>Gurgaon</h3>
              <p><b>Phone / WhatsApp</b><br />+91-9205829566</p>
              <p><b>Email</b><br />info@carbon3dlabs.com</p>
              <p><b>Location</b><br />Arcadia, 309, Sector 49, Gurugram, Haryana</p>
              <div className="map">Gurugram Map</div>
            </div>
            <div className="location">
              <h3>Delhi</h3>
              <p><b>Phone / WhatsApp</b><br />+91-6263140706</p>
              <p><b>Email</b><br />info@carbon3dlabs.com</p>
              <p><b>Location</b><br />Metro A, 294, Block R, Nehru Enclave, Kalkaji, New Delhi, Delhi 110019</p>
              <div className="map">Delhi Map</div>
            </div>
          </div>

          <QuoteForm />
        </section>

        {/* FAQ */}
        <section className="faq section">
          <div className="container faq-inner">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-intro">Find answers about project discovery, projects, investments, NRI buying, verification, market intelligence and NRG services.</p>
            {[
              ["What is NRG?", "Find quick answers to common questions about 3D printing, design, scanning and manufacturing solutions."],
              ["What can I search for on NRG?", "You can explore services, technologies, projects, industries and manufacturing capabilities."],
              ["Can I compare properties and projects?", "Our project and service information can be reviewed side by side for easier understanding."],
              ["What is the NRG Opportunity Score?", "The score is presented as an information indicator for evaluating opportunities."],
              ["How does NRG Fair Value work?", "Fair value is designed to help users understand market information and project context."]
            ].map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {q}<span>{openFaq === i ? "⌃" : "⌄"}</span>
                </button>
                {openFaq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="blog" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#home">
              <span className="logo-mark">C</span>
              <span>CARBON <b>3D</b> LABS</span>
            </a>
            <p>Carbon 3D Labs India is a next-generation additive manufacturing company that offers precision solutions for prototyping, product development and low-volume production.</p>
            <div className="socials"><span>f</span><span>◎</span><span>in</span><span>▶</span></div>
          </div>
          <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#blog">Blogs</a><a href="#contact">Contact Us</a></div>
          <div><h4>Our Services</h4><a>FDM Printing</a><a>SLA Printing</a><a>3D Designing</a><a>Reverse Engineering</a><a>Vacuum Casting</a><a>Post Processing</a><a>Product Development</a></div>
          <div><h4>Technologies</h4><a>FDM (Fused Deposition Material)</a><a>SLA (Stereolithography)</a><a>DLP (Digital Light Processing)</a><a>SLS (Selective Laser Sintering)</a><a>MJF (Multi Jet Fusion)</a><a>DMLS (Direct Metal Laser Sintering)</a></div>
        </div>
        <div className="container copyright">© 2026 Carbon 3D Labs. All Rights Reserved.</div>
      </footer>

      <a className="back-top" href="#home">↑</a>
    </div>
  );
}

function QuoteForm() {
  const [form, setForm] = useState({ fullName: "", phone: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      setStatus("success");
      setForm({ fullName: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full Name<input name="fullName" value={form.fullName} onChange={update} placeholder="Enter full name" required /></label>
        <label>Phone / WhatsApp<input name="phone" value={form.phone} onChange={update} placeholder="Enter phone number" required /></label>
      </div>
      <label>Email<input type="email" name="email" value={form.email} onChange={update} placeholder="Enter email" required /></label>
      <label>Service
        <select name="service" value={form.service} onChange={update} required>
          <option value="">Select Service</option>
          <option>3D Scanning</option>
          <option>3D Designing</option>
          <option>3D Printing</option>
          <option>Reverse Engineering</option>
          <option>Vacuum Casting</option>
          <option>Post Processing</option>
          <option>Product Development</option>
        </select>
      </label>
      <label>message<textarea name="message" value={form.message} onChange={update} placeholder="Enter message" required /></label>
      <button className="send-btn" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Quote"}</button>
      {status === "success" && <div className="form-success">✓ Quote successfully sent. Our team will contact you shortly.</div>}
      {status === "error" && <div className="form-error">Unable to send quote. Please check that the backend and MongoDB are running.</div>}
    </form>
  );
}

export default App;








