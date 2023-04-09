import HomeArticle from "@myTypes/HomeArticle";
import { Link } from "react-router-dom";

const HOME_ARTICLES: HomeArticle[] = [
	{
		id: "what-is-markdown",
		imageSrc: "/src/assets/home-page/what-is-markdown.png",
		darkImageSrc: "/src/assets/home-page/what-is-markdown (dark).png",
		imageAlt: "The left box has some text with headers, paragraphs. The second box shows the same text but written and styled as markdown.",
		children: (
			<>
				<h1>What is markdown?</h1>
				<p>
					<b>Markdown</b> is a simple markup language used to format text using a plain-text editor. It was created in 2004 by John Gruber and has become widely
					popular. While some use it for collaborative software, documentation pages, and readme files, others prefer it purely for the writing experience.
				</p>
				<p>
					Unlike <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editors, Markdown requires users to add syntax to indicate formatting changes. For
					instance, a hashtag denotes a heading.
				</p>
				<p>
					It may take a while to get used to seeing Markdown syntax in your text, and that is why tools like our app can help users by blending the writing
					experience of pure markdown together with the common WYSIWYG tools.
				</p>
			</>
		),
		isDark: true,
	},
	{
		id: "export-options",
		imageSrc: "/src/assets/home-page/export-options.png",
		darkImageSrc: "/src/assets/home-page/export-options (dark).png",
		imageAlt: "TODO",
		children: (
			<>
				<h1>Intuitive Export Options</h1>
				<p>
					With our in-browser markdown editor app, you can easily <b>save and export</b> your documents in multiple file formats. Whether you need to share your
					work with others who use different platforms, or you simply prefer working in a specific file format, our editor has you covered.
				</p>
				<p>
					You can export your work in <b>.txt</b>, <b>.pdf</b>, and <b>.md</b> formats with just a few clicks. Say goodbye to the hassle of manually converting
					your files and enjoy the convenience of our intuitive export options.
				</p>
			</>
		),
		layout: "inverted",
	},
	{
		id: "wysiwyg-toolbar",
		imageSrc: "",
		darkImageSrc: "",
		imageAlt: "TODO",
		children: (
			<>
				<h1>Sleek WYSIWYG Toolbar</h1>
				<p>
					Our markdown editor features a sleek and user-friendly toolbar that is reminiscent of WYSIWYG editors. With our toolbar, you can easily format your
					text, insert images, add hyperlinks, and more.
				</p>
				<p>
					The toolbar allows you to perform these actions with ease, just like in a graphical editor. This means you get the best of both worlds - the
					simplicity and flexibility of markdown, combined with the ease of use of a graphical editor.
				</p>
			</>
		),
		layout: "special",
	},
	{
		id: "real-time-preview",
		imageSrc: "",
		darkImageSrc: "",
		imageAlt: "TODO",
		children: (
			<>
				<h1>Real-Time Preview</h1>
				<p>
					Our markdown editor offers a live preview of your work as you type. This means you can see exactly how your formatting and layout will look in real
					time, without the need to constantly switch between writing and preview modes.
				</p>
				<p>
					With our live preview feature, you can catch errors and formatting issues as you go, ensuring that your final product looks just the way you want it
					to. Plus, it makes the writing process even more seamless and enjoyable, giving you a clear picture of your work as you create it.
				</p>
			</>
		),
		isDark: true,
	},
	{
		id: "full-markdown-support",
		imageSrc: "",
		darkImageSrc: "",
		imageAlt: "TODO",
		children: (
			<>
				<h1>Full Markdown Support</h1>
				<p>
					Our app supports all basic markdown features and more. Whether you're a seasoned pro or just getting started, you'll love the flexibility and
					versatility of our editor. You can use all the basic markdown syntax, but we've also added some additional features to make your writing experience
					even better.
				</p>
				<p>
					To learn all about the features of our markdown editor, check out our detailed guide. It covers everything from basic markdown syntax to additional
					features like the toolbar, exporting, tables, and code blocks. Get the most out of our editor and unleash your creativity.
				</p>
				<Link to="how-to-use">
					<h4>
						Check out our guide now!
						<span />
					</h4>
				</Link>
			</>
		),
		layout: "inverted",
	},
];

export default HOME_ARTICLES;
