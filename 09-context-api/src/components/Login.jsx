import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setuserState] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
	};

	return (
		<>
			<h2>Login</h2>
			<input
				type='text'
				placeholder='Enter name'
				val={username}
				onChange={(e) => {
					console.log(e.target.value);
					setuserState(e.target.value);
				}}
			/>{" "}
			<input
				type='text'
				placeholder='Enter password'
				val={password}
				onChange={(e) => {
					console.log(e.target.value);
					setPassword(e.target.value);
				}}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
};

export default Login;
