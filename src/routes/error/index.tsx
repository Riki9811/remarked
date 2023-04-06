import { useRouteError, isRouteErrorResponse, useLocation, Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	const location = useLocation();

	function renderErrorDescription() {
		const isRouteError = isRouteErrorResponse(error);
		const is404 = isRouteError && error.status === 404;
		const isError = error instanceof Error;

		if (is404) {
			return (
				<>
					<h1>Oops!</h1>
					<h2>404 - Page "{location.pathname}" not found.</h2>
					<p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
				</>
			);
		} else if (isRouteError) {
			return (
				<>
					<h1>Oops!</h1>
					<h2>
						{error.status} - {error.statusText}
					</h2>
					<p>{error.data?.message && <i>{error.data.message}</i>}</p>
				</>
			);
		} else if (isError) {
			return (
				<>
					<h1>Oops!</h1>
					<h2>Unexpected Error</h2>
					<p>
						Something went wrong: <i>{error.message}</i>
					</p>
				</>
			);
		} else {
			return <></>;
		}
	}

	return (
		<div id="error-page">
			{renderErrorDescription()}
			<Link to={"/"}>
				<button>Go to home page</button>
			</Link>
		</div>
	);
}
