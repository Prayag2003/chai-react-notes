import React, { useState } from "react";
import UserContext from "./UserContext";

// NOTE: Whatever is passed into the children, it is passed as it is...
const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return (
		<>
			<UserContext.Provider value={{ user, setUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};

export default UserContextProvider;
