import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";


const CommunityDiscussion = () => {

	const data = useLoaderData();
	const posts = data.community_posts;
	console.log(posts)


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
            {
				posts.map((singlePost,index)=><Post key={index} singlePost={singlePost}></Post>)
			}
        </div>
    );
};

export default CommunityDiscussion;