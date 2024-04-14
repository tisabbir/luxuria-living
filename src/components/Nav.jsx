import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Nav = () => {

  const {logOut, user} = useAuth()
console.log('from navbar', user);
    const navBar = (<>

<li><NavLink to={'/'}  className={'p-0'} > <p className="btn btn-ghost md:text-xl" >Home</p></NavLink></li>

{
  user ? <div className="flex flex-col lg:flex-row gap-3 items-center "> 
    <li><NavLink className={'p-0'} to={'/update'}><button className="btn btn-ghost md:text-xl">Update Profile</button></NavLink></li>


    <li><NavLink className={'p-0 menu menu-sm'} to={'/community'}><button className="btn btn-ghost md:text-xl">Community</button></NavLink></li>

  </div> : 
  <button> </button>
}


    </>);

    const handleLogOut = () => {
      logOut()
      .then(() => {
        console.log('Successfully logged out')
      })
      .catch(err => {
        console.log(err)
      })
    }

    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto z-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
      {navBar}
       


      </ul>
    </div>
    <div className="">
    <Link to={'/'} className="btn btn-ghost text-lg md:text-2xl lg:text-3xl">
        <img src="../../public/logo.svg" className="hidden md:flex w-10 h-10 rounded-xl"/>
        Luxuria Living</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navBar}
    </ul>
  </div>
  <div className="navbar-end">
      {
        user ? <div className="flex gap-3 items-center ">

       
        
  

          <div className="relative">
          <img src={user?.photoURL} alt="" className="rounded-full w-10 h-10 peer" />
          <div className="hidden peer-hover:flex hover:flex absolute">
            <h1>{user?.displayName}</h1>
          </div>
          </div>

          <button onClick={handleLogOut}  className="btn">Log Out</button>

        </div> :  <Link to={'/login'} className="btn">Login</Link>
      }

   
    
  </div>
</div>
    );
};

export default Nav;