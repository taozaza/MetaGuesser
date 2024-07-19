import ProtectedContent from './ProtectedContent';
import { useState } from 'react';

const ContentPart = ({ part, onIncorrectPassword }) => {
	const [unlockedPasswords, setUnlockedPasswords] = useState(new Set());

	const handlePasswordSubmit = (password) => {
		const protectedRegex = /{{protected:([^:]+):([^}]+)}}/g;
		let match;
		let correctPassword = false;

		while ((match = protectedRegex.exec(part.content)) !== null) {
			if (password === match[1]) {
				setUnlockedPasswords((prev) => new Set(prev).add(password));
				correctPassword = true;
				break;
			}
		}

		if (!correctPassword) {
			onIncorrectPassword();
		}
	};

	const renderContent = () => {
		if (!part.isPartiallyProtected) {
      if (part.Component !== undefined) {
				return <part.Component />;
			}

			return (
				<div
					className='dark:text-gray-300 w-full'
					dangerouslySetInnerHTML={{ __html: part.content }}
				/>
			);
		}

		const protectedRegex = /{{protected:([^:]+):([^}]+)}}/g;
		const segments = [];
		let lastIndex = 0;
		let match;

		while ((match = protectedRegex.exec(part.content)) !== null) {
			segments.push(part.content.slice(lastIndex, match.index));
			segments.push(
				<ProtectedContent
					key={match.index}
					content={match[2]}
          Component={part.Component}
					isUnlocked={unlockedPasswords.has(match[1])}
					onPasswordSubmit={handlePasswordSubmit}
				/>
			);
			lastIndex = protectedRegex.lastIndex;
		}

		segments.push(part.content.slice(lastIndex));

		return segments.map((segment, index) => {
			if (typeof segment === 'string') {
				return (
					<div
						key={index}
						className='dark:text-gray-300'
						dangerouslySetInnerHTML={{ __html: segment }}
					/>
				);
			}
			return segment;
		});
	};

	return (
		<div className='mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
			<h2 className='text-xl font-semibold mb-4 dark:text-white'>
				{part.title}
			</h2>
			{renderContent()}
		</div>
	);
};

export default ContentPart;
