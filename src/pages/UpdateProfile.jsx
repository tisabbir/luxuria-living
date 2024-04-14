import { Helmet } from "react-helmet";
import {  updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {

  const {user, setUser } =useAuth();
  const navigate = useNavigate();
  
  console.log(user.displayName);
  console.log(user.photoURL);
  console.log(user.email);

  const successfulUpdate = () => toast.success('Congratulations ! You have successfully updated your profile.', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


const handleUpdateProfile = (e) => {
  e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    user.displayName = name;
    const photo = e.target.photo.value;
    console.log(photo);
    user.photoURL = photo;
    console.log('user from inside', user)
    
    
    updateProfile(auth.currentUser, {
      displayName: name, photoURL:photo ||"https://robohash.org/Alison.png?set=set4",
    }).then(() => {
      console.log('profile updated');
      successfulUpdate();

      setUser({
        ...user,
        displayName: name,
        photoURL: photo || "https://robohash.org/Alison.png?set=set4",
      });
  }).catch((error) => {
    console.log(error)
  });
}








    return (
        <div>
          <Helmet>
				<title>Update Profile || Luxuria Living</title>
			</Helmet>
          
      <div className="w-full mx-auto mt-12 max-w-md p-4 rounded-md shadow sm:p-8 bg-[#C6AC8E] text-white">

<h2 className="mb-3 text-3xl font-semibold text-center">Update Your Account</h2>


<form onSubmit={handleUpdateProfile}  className="space-y-8">


<div className="space-y-4">

<div className="space-y-2">
<label htmlFor="name" className="block text-sm">Name</label>
<input  type="text" name="name" id="name" defaultValue={user.displayName} className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900"  />
</div>

<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder={user.email} className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900" />
			</div>

<div className="space-y-2">
<label htmlFor="photo" className="block text-sm">Photo URL</label>
<input type="text" name="photo" id="photo" defaultValue={user.photoURL} className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-900"/>
</div>

</div>
<input type="submit" value={"Save Changes"} className="w-full px-8 py-3 font-semibold rounded-md bg-[#5E503F] text-white animate__animated animate__pulse animate__infinite	" />
</form>
</div>



        </div>
    );
};

export default UpdateProfile;