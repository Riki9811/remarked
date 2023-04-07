import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import ThemeToggle from "@components/theme-toggle";
import styles from "./styles.module.scss";

interface HeaderProps {
	isDark: boolean;
	toggle: () => void;
}

export default function HomePageHeader({ isDark, toggle }: HeaderProps) {
	return (
		<header className={styles.header}>
			<Link to="/app" className={`inline-button ${styles.launch}`}>
				<FaPencilAlt />
				Start writing
			</Link>
			<ThemeToggle
				isDark={isDark}
				toggle={toggle}
				className={styles.toggle}
				color="var(--text-alt-highlight)"
				colorHover="var(--text-alt)"
				background="var(--background-alt)"
				backgroundDark="var(--background-alt)"
			/>
		</header>
	);
}
