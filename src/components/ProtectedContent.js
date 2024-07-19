import { Eye, EyeOff } from 'lucide-react';

import PasswordPrompt from './PasswordPrompt';
import { useState } from 'react';

const ProtectedContent = ({ content, Component, isUnlocked, onPasswordSubmit }) => {
	const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

	if (isUnlocked) {
    if (Component !== undefined) {
      return <Component />;
    }

		return (
			<span
				className='text-green-600 dark:text-green-400'
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		);
	}

	return (
		<span className='flex flex-col w-full'>
			<button
				onClick={() => setShowPasswordPrompt(!showPasswordPrompt)}
				className='text-blue-500 dark:text-blue-400 hover:underline flex'
			>
				{showPasswordPrompt ? (
					<EyeOff size={16} className='mr-1' />
				) : (
					<Eye size={16} className='mr-1' />
				)}
				{showPasswordPrompt ? 'Hide protected content / 保護されたコンテンツを非表示にする' : 'Show protected content / 保護されたコンテンツを表示する'}
			</button>
			{showPasswordPrompt && <PasswordPrompt onSubmit={onPasswordSubmit} />}
		</span>
	);
};

export default ProtectedContent;
