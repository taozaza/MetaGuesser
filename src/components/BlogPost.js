import ContentPart from './ContentPart';

const BlogPost = ({ blogData, onIncorrectPassword }) => (
	<article className='max-w-3xl mx-auto mt-8'>
		{blogData.map((part) => (
			<ContentPart
				key={part.id}
				part={part}
				onIncorrectPassword={onIncorrectPassword}
			/>
		))}
	</article>
);

export default BlogPost;