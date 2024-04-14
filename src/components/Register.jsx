import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth";
import {  toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import { useState } from "react";
import "animate.css"




const Register = () => {
    const { createUser, logOut} = useAuth();
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const notify = () => toast.error('Password must have at least 6 characters with at least one uppercase and one lowercase letter.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        // successfulRegister
    const successfulRegister = () => toast.success('Congratulations ! You have successfully registered. Now log in to continue your journey with us.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const handleRegister = (data) => {
        const name = data.name;
        const email = data.email;
        const photo = data.photo;
        const password = data.password;

        if(!passwordRegex.test(password)){
            notify();
            return;
        }

        console.log(name, email, photo, password);

        createUser(email, password)
        .then(res => {
            console.log(res.user);
            successfulRegister();
            logOut();
            navigate('/login');
        })
        .catch(err => {
            console.log(err)
        })


      }

    return (
        <div>
            <Helmet>
				<title>Register || Luxuria Living</title>
			</Helmet>
           
            <div className="w-full mx-auto mt-12 max-w-md p-4 rounded-md shadow sm:p-8 bg-[#C6AC8E] text-white">

            <h2 className="mb-3 text-3xl font-semibold text-center">Register Account</h2>
	<p className="text-sm text-center text-black">If you already have an account, Please   
		<Link to={'/login'} rel="noopener noreferrer" className="underline hover:text-white text-xl ml-2">Log In</Link>
	</p>


            <form onSubmit={handleSubmit(handleRegister)}  className="space-y-8">


		<div className="space-y-4">
			
            <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input  type="text" name="name" id="name" placeholder="Leroy Jenkins" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" {...register("name", { required: true })} />
                {errors.name && <span className="text-red-700">Name is required</span>}

			</div>

            <div className="space-y-2">
				<label htmlFor="photo" className="block text-sm">Photo URL</label>
				<input type="text" name="photo" id="photo" placeholder="leory.com/photo/1.jpg" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" {...register("photo", { required: true })} />
                {errors.photo && <span className="text-red-700">Photo URL is required</span>}

			</div>



            <div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" {...register("email", { required: true })}  />
                {errors.email && <span className="text-red-700">Email is required</span>}
			</div>


            
			<div className="space-y-2 relative">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input type={ showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900 "  {...register("password", { required: true })} />
                {errors.password && <span className="text-red-700">Password is required</span>}
                {
                    showPassword ? <FaEye onClick={handleShowPassword} className="text-gray-600 absolute top-8 right-6" /> :
                    <FaEyeSlash onClick={handleShowPassword} className="text-gray-600 absolute top-8 right-6" />
                }
			</div>
		</div>
		<input type="submit" value={"Register"} className="w-full px-8 py-3 font-semibold rounded-md bg-[#5E503F] text-white animate__animated animate__pulse animate__infinite	" />
	</form>
            </div>

            {/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> */}
        </div>
    );
};

export default Register;