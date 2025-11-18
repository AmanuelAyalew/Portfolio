import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
	const skills = [
		"JavaScript",
		"React",
		"HTML",
		"CSS",
		"TypeScript",
		"Node.js",
		"Git",
	];

	return (
		<main className="about-page">
			<header className="about-hero">
				<h1 className="about-title">About Me</h1>
				<p className="about-lead">
					I'm a front-end developer who likes building clean, accessible,
					and performant web experiences. I focus on React and modern web
					tooling to deliver polished products.
				</p>
			</header>

			<section className="about-section about-bio">
				<h2>Background</h2>
				<p>
					I started building web apps because I enjoy solving problems and
					turning designs into interactive experiences. Over the years I've
					worked on personal projects and collaborated with teams to ship
					responsive, user-focused applications.
				</p>
			</section>

			<section className="about-section about-skills">
				<h2>Skills</h2>
				<ul className="skills-list">
					{skills.map((s) => (
						<li key={s} className="skill-badge">
							{s}
						</li>
					))}
				</ul>
			</section>

			<section className="about-section about-cta">
				<Link to="/projects" className="btn btn-primary">
					View Projects
				</Link>
				<Link to="/contact" className="btn btn-ghost">
					Get In Touch
				</Link>
			</section>

			<Footer />
		</main>
	);
};

export default About;
