import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface UseDarkModeOutput {
	isDarkMode: boolean;
	toggle: () => void;
	enable: () => void;
	disable: () => void;
}

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
	const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
	const [isDarkMode, setDarkMode] = useLocalStorage<boolean>("remarked-dark-mode", defaultValue ?? isDarkOS ?? false);

	// Update body className if dark mode changes
	useEffect(() => {
		document.body.classList.toggle("dark-mode", isDarkMode);
	}, [isDarkMode]);

	return {
		isDarkMode,
		toggle: () => setDarkMode((prev) => !prev),
		enable: () => setDarkMode(true),
		disable: () => setDarkMode(false),
	};
}

export default useDarkMode;
