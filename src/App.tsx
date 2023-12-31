import React, {useState, createContext} from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound404';
import Log from './Log';
import UserList from './UserList';

import AuthContext from './context/AuthContext';

import './App.css';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	// 로그아웃 함수 정의
	const logout = () => {
	setIsLoggedIn(false);
	sessionStorage.removeItem('isLoggedIn');
	};

	return (
	<>
	<div>
	<BrowserRouter>
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}> {/* 다른 컴포넌트에서 사용하기위해*/}
			<Routes>
				<Route path = "/" element={<Log />}/>
				<Route path = "/Home" element={<Home />}/>
				<Route path = "*" element={<NotFound />}/>
			</Routes>
		</AuthContext.Provider>
	</BrowserRouter>
	</div>
	</>
	);
}

export default App;
