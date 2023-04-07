import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { ReactComponent as Logo } from "@assets/logo.svg";
import useDarkMode from "@/hooks/useDarkMode";
import HomePageFooter from "@/components/home-page-footer";
import HomePageArticle from "@/components/home-page-article";
import HomePageHeader from "@/components/home-page-header";
import styles from "./styles.module.scss";

export default function Home() {
	const mainRef = useRef<HTMLElement>(null);
	const { isDarkMode, toggle } = useDarkMode();

	function scrollToMain() {
		mainRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className={styles.home}>
			<HomePageHeader isDark={isDarkMode} toggle={toggle} />
			<div className={styles.splash}>
				<Logo />
				{isDarkMode}
				<button className={`inline-button ${styles["down-button"]}`} onClick={scrollToMain}>
					<FaArrowDown className="inline" />
					Read more
				</button>
			</div>
			<main ref={mainRef} className={styles.main}>
				<HomePageArticle
					id="what-is-markdown"
					imageSrc={isDarkMode ? "/src/assets/what-is-markdown (dark).png" : "/src/assets/what-is-markdown.png"}
					imageAlt="The left box has some text with headers, paragraphs. The second box shows the same text but written and styled as markdown."
					isDark
				>
					<h1>What is markdown?</h1>
					<p>
						<strong>Markdown</strong> is a simple markup language used to format text using a plain-text editor. It was created in 2004 by John Gruber and has
						become widely popular. While some use it for collaborative software, documentation pages, and readme files, others prefer it purely for the
						writing experience.
					</p>
					<p>
						Unlike <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editors, Markdown requires users to add syntax to indicate formatting changes.
						For instance, a hashtag denotes a heading.
					</p>
					<p>
						It may take a while to get used to seeing Markdown syntax in your text, and that is why tools like this app can help users by blending the writing
						experience of pure markdown together with the common WYSIWYG tools.
					</p>
				</HomePageArticle>
				<HomePageArticle id="feature1" imageSrc="" imageAlt="TODO desc1" layout="inverted">
					<h1>Feature1</h1>
					<p>TODO</p>
				</HomePageArticle>
				<HomePageArticle id="feature2" imageSrc="" imageAlt="TODO desc2" isDark>
					<h1>Feature2</h1>
					<p>TODO</p>
				</HomePageArticle>
				<HomePageArticle id="special-feature" imageSrc="" imageAlt="TODO desc2" layout="special">
					<h1>Special Feature</h1>
					<p>TODO</p>
				</HomePageArticle>
			</main>
			<HomePageFooter />
		</div>
	);
}
