import { CSSProperties } from "react";
import styles from "./styles.module.scss";

interface ThemeToggleProps {
	isDark: boolean;
	toggle: () => void;
	className?: string;
	size?: string;
	color?: string;
	colorHover?: string;
	background?: string;
	colorDark?: string;
	colorHoverDark?: string;
	backgroundDark?: string;
}

interface ThemeToggleCSSProperties extends CSSProperties {
	"--size"?: string;
	"--color"?: string;
	"--color-hover"?: string;
	"--background"?: string;
}

export default function ThemeToggle(props: ThemeToggleProps) {
	const { isDark, toggle, className, size, color, colorHover, background, colorDark, colorHoverDark, backgroundDark } = props;

	const containerClass = `${styles.container} ${isDark ? styles.dark : null} ${className}`;
	const lightStyle: ThemeToggleCSSProperties = {
		"--size": size ?? "1.5em",
		"--color": color ?? "var(--text-highlight)",
		"--color-hover": colorHover ?? "var(--text-main)",
		"--background": background ?? "var(--background-main)",
	};
	const darkStyle: ThemeToggleCSSProperties = {
		"--size": size ?? "1.5em",
		"--color": colorDark ?? "var(--text-highlight)",
		"--color-hover": colorHoverDark ?? "var(--text-main)",
		"--background": backgroundDark ?? "var(--background-main)",
	};

	return (
		<div className={containerClass} style={isDark ? darkStyle : lightStyle} onClick={toggle}>
			<div className={styles.dot}></div>
		</div>
	);
}
