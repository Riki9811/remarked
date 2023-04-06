import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaArrowDown, FaGithub, FaUser } from "react-icons/fa";
import { ReactComponent as Logo } from "@assets/logo.svg";
import useDarkMode from "@hooks/useDarkMode";
import styles from "./styles.module.scss";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
	const mainRef = useRef<HTMLElement>(null);
	const { isDarkMode, toggle } = useDarkMode();

	function scrollToMain() {
		mainRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className={styles.home}>
			<header className={styles.header}>
				<Link to="/app" className={`inline-button ${styles.launch}`}>
					<FaPencilAlt />
					Start writing
				</Link>
				<ThemeToggle
					isDark={isDarkMode}
					toggle={toggle}
					className={styles.toggle}
					color="var(--text-alt-highlight)"
					colorHover="var(--text-alt)"
					background="var(--background-alt)"
					backgroundDark="var(--background-alt)"
				/>
			</header>
			<div className={styles.splash}>
				<Logo />
				{isDarkMode}
				<button className={`inline-button ${styles["down-button"]}`} onClick={scrollToMain}>
					<FaArrowDown className="inline" />
					Read more
				</button>
			</div>
			<main ref={mainRef} className={styles.main}>
				<article id="what-is-markdown" className={styles["article-dark"]}>
					<div className={styles["article-wrapper"]}>
						<div className={styles["article-content"]}>
							<h1>What is markdown?</h1>
							<p>
								<strong>Markdown</strong> is a lightweight markup language for creating formatted text using a plain-text editor. Created by John Gruber
								in 2004, Markdown is now one of the world's most popular markup languages. It is used in collaborative software, documentation pages,
								readme files, or purely for the writing experience it offers.
							</p>
							<p>
								Using Markdown is different than using a <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editor. In an application like
								Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn't like that. When you
								create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.
							</p>
							<p>
								It may take a while to get used to seeing Markdown syntax in your text, and that is why tools like this app can help users by blending the
								writing experience of pure markdown together with the common WYSIWYG tools.
							</p>
						</div>
						<div className={styles["article-image"]}>
							<img
								src={isDarkMode ? "/src/assets/what-is-markdown (dark).png" : "/src/assets/what-is-markdown.png"}
								alt="The left box has some text with headers, paragraphs. The second box shows the same text but written and styled as markdown."
								loading="lazy"
							/>
						</div>
					</div>
				</article>
				<article id="features">
					<div className={styles["article-wrapper"]}>
						<div className={styles["article-image"]}>
							<img src="" alt="TODO desc" loading="lazy" />
						</div>
						<div className={styles["article-content"]}>
							<h1>Features</h1>
							<p>TODO</p>
						</div>
					</div>
				</article>
			</main>
			<footer className={styles.footer}>
				<div className={styles["footer-wrapper"]}>
					<div className={styles["footer-row"]}>
						<a href="https://github.com/Riki9811" target="_blank" className={styles["footer-icon"]}>
							<FaUser />
						</a>
						<a href="https://github.com/Riki9811/remarked" target="_blank" className={styles["footer-icon"]}>
							<FaGithub />
						</a>
					</div>
					<div className={styles["footer-row"]}>
						<Link to="/app" className={styles["footer-link"]}>
							Launch the app
						</Link>
					</div>
					<div className={`${styles["footer-row"]} ${styles.space}`}>
						<p>Copyright © 2023</p>
						<a href="https://github.com/Riki9811" target="_blank" className={styles["footer-link"]}>
							Riki9811
						</a>
					</div>
					<div className={`${styles["footer-row"]} ${styles.space}`}>
						<p>Licensed under an</p>
						<a href="https://github.com/Riki9811/remarked/blob/main/LICENSE.txt" target="_blank" className={styles["footer-link"]}>
							MIT License
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
