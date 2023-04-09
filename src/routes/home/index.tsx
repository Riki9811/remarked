import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { ReactComponent as Logo } from "@assets/logo.svg";
import useDarkMode from "@/hooks/useDarkMode";
import HomePageFooter from "@/components/home-page-footer";
import HomePageArticle from "@/components/home-page-article";
import HomePageHeader from "@/components/home-page-header";
import HOME_ARTICLES from "@/constants/HomeArticles";
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
				{HOME_ARTICLES.map((article) => (
					<HomePageArticle key={article.id} {...article} imageSrc={isDarkMode ? article.darkImageSrc : article.imageSrc}>
						{article.children}
					</HomePageArticle>
				))}
			</main>
			<HomePageFooter />
		</div>
	);
}
