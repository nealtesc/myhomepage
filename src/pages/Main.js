import history from "../services/history";
import "../App.css";

export function Main() {
  const navLinks = [
    { name: "Dribbble", url: "https://dribbble.com/darklise" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/anastasia-babik/" },
    { name: "Facebook", url: "https://www.facebook.com/darklise" },
    { name: "Instagram", url: "https://www.instagram.com/darklise/" },
    { name: "CV", url: "./docs/CV-Anastasija-Babika.pdf" },
    { name: "Email", url: "mailto:anastasijababika@gmail.com" },
  ];

  const articles = [
    { name: "Dashboard MGL", alt: "Dashboard", id: 1 },
    { name: "Banking App", alt: "Banking App", id: 2 },
    {
      name: "The Wedding Boutique",
      alt: "Wedding landing page",
      id: 3,
    },
    { name: "Loans App", alt: "Loans App", id: 4 },
    {
      name: "Banking Dashboard",
      alt: "Dashboard",
      id: 5,
    },
    { name: "Fleamarket", alt: "Fleamarket", id: 6 },
    { name: "Crypto App", alt: "Crypto App", id: 7 },
    {
      name: "EUC Transport Landing Page",
      alt: "Landing page",
      id: 8,
    },
    { name: "Icons", alt: "Icons", id: 9 },
    {
      name: "Way 2019 9102",
      alt: "Retro Wave City",
      id: 10,
    },
    { name: "Moon", alt: "Retro city moon", id: 11 },
    { name: "City Gems", alt: "Retro city gems", id: 12 },
    { name: "Faded Memory", alt: "Faded Memory", id: 13 },
    { name: "Tiger", alt: "Forest tiger", id: 14 },
    { name: "Patronus", alt: "Patronus", id: 15 },
    { name: "Dark Moon", alt: "Dark Moon", id: 16 },
    { name: "Wood", alt: "Wood", id: 20 },
  ];

  function navItem(navLink, index) {
    return (
      <li key={index} className="contacts__item">
        <a href={navLink.url} target="_blank" rel="noreferrer">
          {navLink.name}
        </a>
      </li>
    );
  }

  function articleItem(work) {
    return (
      <article key={work.id} className="article">
        <picture>
          <img
            src={"images/" + work.id + "-preview.jpg"}
            alt={work.alt}
            className="article__image"
          />
        </picture>
        <button
          className="article__button"
          onClick={() => {
            history.push("/" + work.id);
            history.go();
          }}
        ></button>
        <div className="article__content">{work.name}</div>
      </article>
    );
  }

  return (
    <div className="layout">
      <main className="main">
        <header>
          <h1 className="main__title">
            Hello, I'm Anastasia Lise Babika, a&nbsp;UI Designer, based in
            Riga.
          </h1>
        </header>
        <p className="main__description">
          Constantly striving to improve my skills, I am always open to &nbsp;
          new&nbsp;challenges and to learning something new.
        </p>
        <ul className="main__contacts contacts">
          {navLinks.map((navLink, index) => {
            return navItem(navLink, index);
          })}
        </ul>
      </main>
      <div className="portfolio-inner">
        <div className="portfolio">
          {articles.map((article) => {
            return articleItem(article);
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
