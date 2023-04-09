export default interface HomeArticle {
	id: string;
	imageSrc: string;
	darkImageSrc: string;
	imageAlt: string;
    children: React.ReactNode;
	layout?: HomeArticleLayout;
	isDark?: boolean;
}

type HomeArticleLayout = "normal" | "inverted" | "special";
