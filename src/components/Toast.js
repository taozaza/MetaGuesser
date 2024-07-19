import { X } from 'lucide-react';
import { useEffect } from 'react';

const Toast = ({ message, isVisible, onClose }) => {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				onClose();
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [isVisible, onClose]);

	if (!isVisible) return null;

	return (
		<div className='fixed bottom-4 right-4 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded shadow-lg flex items-center'>
			<span>{message}</span>
			<button onClick={onClose} className='ml-2'>
				<X size={18} />
			</button>
		</div>
	);
};

export default Toast;
