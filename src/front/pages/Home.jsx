// import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import { Register } from "../components/Register.jsx";
// import { Login } from "../components/Login.jsx";
// import { Private } from "../components/Private.jsx";
// import userServices from "../services/userServices.js";

export const Home = () => {
	// const { store, dispatch } = useGlobalReducer()

	// const handleClick = () =>{

	// 	userServices.getUserInfo().then(data => dispatch({type: 'getUserInfo', payload:data.user}))
	// }


	return (
		<>
			<div className="text-center m-2">

				
				<h3>For the full user experience, please follow these steps:</h3>
				<p>First - <Link to={'/register'}>Register</Link></p>
				<p>Second - <Link to={'/login'}>Log in</Link></p>
				<p>Once you're done, you can access your <Link to={'/private'}>private area</Link></p>

			</div>


		</>
	);
}; 