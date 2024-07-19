import React, { useEffect, useState } from 'react';

import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Header from './components/Header';
import Toast from './components/Toast';
import { blogData } from './data/sections';

const App = () => {
	const [toastVisible, setToastVisible] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		setDarkMode(prefersDarkMode);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e) => setDarkMode(e.matches);
		mediaQuery.addListener(handleChange);

		return () => mediaQuery.removeListener(handleChange);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('dark', darkMode);
	}, [darkMode]);

	const showToast = () => {
		setToastVisible(true);
	};

	const hideToast = () => {
		setToastVisible(false);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div
			className={`min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col transition-colors duration-200`}
		>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<main className='flex-grow container mx-auto px-4 py-8'>
				<BlogPost onIncorrectPassword={showToast} blogData={blogData} />
			</main>
			<Footer />
			<Toast
				message='Incorrect password. Please try again. / パスワードが間違っています。もう一度お試しください'
				isVisible={toastVisible}
				onClose={hideToast}
			/>
		</div>
	);
};

export default App;
