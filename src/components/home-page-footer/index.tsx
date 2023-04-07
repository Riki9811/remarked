import { Link } from "react-router-dom";
import { FaGithub, FaUser } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function HomePageFooter() {
	return (
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
				<div className={`${styles["footer-row"]} ${styles.space}`}>
					<p>Copyright © 2023</p>
					<a href="https://github.com/Riki9811" target="_blank" className={styles["footer-link"]}>
						Riki9811
					</a>
				</div>
				<div className={styles["footer-row"]}>
					<Link to="/app" className={styles["footer-link"]}>
						Launch the app
					</Link>
				</div>
				<div className={`${styles["footer-row"]} ${styles.space}`}>
					<p>Licensed under an</p>
					<a href="https://github.com/Riki9811/remarked/blob/main/LICENSE.txt" target="_blank" className={styles["footer-link"]}>
						MIT License
					</a>
				</div>
			</div>
		</footer>
	);
}
