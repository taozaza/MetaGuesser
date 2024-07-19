import React, { useState } from 'react';

const PasswordPrompt = ({ onSubmit }) => {
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(password);
		setPassword('');
	};

	return (
		<form onSubmit={handleSubmit} className='mt-2 w-full flex'>
			<input
				type='text'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Enter password / パスワードを入力'
				className='border rounded px-2 py-1 mr-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 min-w-36'
			/>
			<button
				type='submit'
				className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
			>
				Unlock / ロック解除
			</button>
		</form>
	);
};

export default PasswordPrompt;
