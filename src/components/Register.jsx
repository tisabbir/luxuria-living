import { Link } from "react-router-dom";
import Nav from "./Nav";


const Register = () => {
    return (
        <div>
            <Nav />
            <div className="w-full mx-auto mt-12 max-w-md p-4 rounded-md shadow sm:p-8 bg-[#C6AC8E] text-white">

            <h2 className="mb-3 text-3xl font-semibold text-center">Register Account</h2>
	<p className="text-sm text-center text-black">If you already have an account, Please   
		<Link to={'/login'} rel="noopener noreferrer" className="underline hover:underline ml-2">Log In</Link>
	</p>


            <form noValidate="" action="" className="space-y-8">


		<div className="space-y-4">
			
            <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Leroy Jenkins" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" />
			</div>

            <div className="space-y-2">
				<label htmlFor="photo" className="block text-sm">Photo URL</label>
				<input type="text" name="photo" id="photo" placeholder="leory.com/photo/1.jpg" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" />
			</div>



            <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" />
			</div>


            
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-black">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900 " />
			</div>
		</div>
		<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-[#5E503F] text-white">Sign in</button>
	</form>
            </div>
        </div>
    );
};

export default Register;