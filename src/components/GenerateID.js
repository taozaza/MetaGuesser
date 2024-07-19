import React, { useEffect, useState } from 'react';

const GenerateID = () => {
	const [uniqueId, setUniqueId] = useState(null);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [uniquePassword, setUniquePassword] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		checkExistingId();
	}, []);

	const checkExistingId = () => {
		const existingId = localStorage.getItem('uniqueId');
		const existingPassword = localStorage.getItem('uniquePassword');
		if (existingId && existingPassword) {
			setUniqueId(existingId);
			setUniquePassword(existingPassword);
		}
	};

	const getUniqueId = async () => {
		setIsButtonDisabled(true);
		try {
			const response = await fetch('https://entrepreneurs-rick-una-certainly.trycloudflare.com/api/get-id');
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.detail || 'Failed to fetch ID');
			}
			const data = await response.json();
			setUniqueId(data.id);
			setUniquePassword(data.password);
			localStorage.setItem('uniqueId', data.id);
			localStorage.setItem('uniquePassword', data.password);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			{(!uniqueId && !uniquePassword && !isButtonDisabled) && <button
				onClick={getUniqueId}
				disabled={uniqueId && uniquePassword}
				className='dark:text-white border border-slate-800 dark:border-slate-100 rounded p-2 px-4 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white m-2'
			>
				Get Unique ID / 固有IDを取得
			</button>}
			{(isButtonDisabled && (!uniqueId && !uniquePassword)) && <p className='dark:text-white'>Loading / 読み込み中...</p>}
			<p>
				{error ? (
					`Error: ${error}`
				) : uniqueId && uniquePassword ? (
					<p className='text-red-600 dark:text-red-300 my-2 border p-4 rounded'>
						Your unique ID is / あなたの固有IDは: <code className='bg-zinc-300 p-1 mx-1 text-black'><strong>MetaGuesserExp{uniqueId}</strong></code>
						<br />
						Password / パスワード: <code className='bg-zinc-300 p-1 mx-1 text-black'><strong>{uniquePassword}</strong></code>
					</p>
				) : (
					''
				)}
			</p>
		</div>
	);
};

export default GenerateID;
