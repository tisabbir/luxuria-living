

const Post = ({singlePost}) => {

    const {
        post_time,
        tag,
        title,
        post,
        avatar,
        name
    
    
    } = singlePost;
    return (
        <div>
            {/* Post */}
            <div className="bg-gray-100 text-gray-900">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-200">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-500">{post_time}</span>
			<a rel="noopener noreferrer" href="#" className=" font-bold rounded text-gray-900">#{tag}</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{title}</a>
			<p className="mt-2">{post}</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-500">Read more</a>
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src={avatar} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
					<span className="hover:underline text-gray-500">{name}</span>
				</a>
			</div>
		</div>
	</div>
</div>
            {/* Post */}
        </div>
    );
};

export default Post;