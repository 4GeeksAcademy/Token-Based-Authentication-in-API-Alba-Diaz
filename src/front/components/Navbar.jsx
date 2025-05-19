import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-2">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"> <i class="fa-brands fa-github"></i>Albadilop </span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary me-1">Login</button>
					</Link>
					<Link to="/register">
						<button className="btn btn-success">Register</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};