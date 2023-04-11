import styles from "./styles.module.scss";

interface ArticleProps {
	children: React.ReactNode;
	id: string;
	imageAlt: string;
	imageSrc: string;
	isDark?: boolean;
	layout?: "normal" | "inverted" | "special";
}

export default function HomePageArticle({ children, id, imageAlt, imageSrc, isDark, layout = "normal" }: ArticleProps) {
	const articleClass = isDark ? styles.dark : undefined;

	if (layout === "normal") {
		return (
			<article id={id} className={articleClass}>
				<div className={styles["article-wrapper"]}>
					<div className={styles["article-content"]}>{children}</div>
					<div className={styles["article-image"]}>
						<img src={imageSrc} alt={imageAlt} loading="lazy" />
					</div>
				</div>
			</article>
		);
	} else if (layout === "inverted") {
		return (
			<article id={id} className={articleClass}>
				<div className={styles["article-wrapper"]}>
					<div className={styles["article-image"]}>
						<img src={imageSrc} alt={imageAlt} loading="lazy" />
					</div>
					<div className={styles["article-content"]}>{children}</div>
				</div>
			</article>
		);
	} else {
		return (
			<article id={id} className={articleClass ? `${styles.special} ${articleClass}` : styles.special}>
				<div className={styles["article-wrapper"]}>
					<div className={styles["article-content"]}>{children}</div>
					<div className="spacer" />
					<div className={styles["article-image"]}>
						<img src={imageSrc} alt={imageAlt} loading="lazy" />
					</div>
				</div>
			</article>
		);
	}
}
