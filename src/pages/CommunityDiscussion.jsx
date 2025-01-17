import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import { Helmet } from "react-helmet";


const CommunityDiscussion = () => {

	const data = useLoaderData();
	const posts = data.community_posts;
	console.log(posts)


    return (
        <div>
			<Helmet>
				<title>Community Discussion || Luxuria Living</title>
			</Helmet>

			<div className="mt-12 space-y-3">
			<h1 className="text-5xl font-bold text-[#5E503F] text-center">Luxuria Living Discussions</h1>
			<h3 className="text-center">Share Your Experiences with us</h3>
			<fieldset className="w-full space-y-1 text-gray-800 flex justify-center">
	<label htmlFor="Search" className="hidden">Search</label>
	<div className="relative">
		<span className="absolute inset-y-0 left-0 flex items-center pl-2">
			<button type="button" title="search" className="p-1 focus:outline-none focus:ring">
				<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
					<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
				</svg>
			</button>
		</span>
		<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-100 focus:border-violet-400" />
	</div>
</fieldset>
			</div>


			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {
				posts.map((singlePost,index)=><Post key={index} singlePost={singlePost}></Post>)
			}
        </div>
		</div>
    );
};

export default CommunityDiscussion;