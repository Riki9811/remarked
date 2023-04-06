import AppIndex from "@components/app-index";
import Document from "@components/document";
import styles from "./styles.module.scss";

export default function App() {
	const document = undefined;

	return (
		<div className={styles.app}>
			<div className={styles.sidebar}>Sidebar</div>
			<header className={styles.header}>Header</header>
			<main className={styles.main}>{document != undefined ? <Document /> : <AppIndex />}</main>
		</div>
	);
}
