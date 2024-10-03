
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";



function Navbar() {
  const [navbar, setNavbar] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const{user,token,setUser,setToken}=useContext(AppContext);
  const navigate=useNavigate()
  async function  handleLogout(e){
    e.preventDefault()
    const res= await fetch('/api/logout',{
      method:'post',
      headers:{
        Authorization:`Bearer ${token}`,
      },
    });
    const data = await res.json()
    if(res.ok){
      setUser(null)
      setToken(null)
      localStorage.removeItem("token")
      navigate("/")
    }
  }



  const Links = [
    {
      name: "الصفحة الرئيسية",
      link: "/",
    },
    {
      name: "فريق العمل",
      link: "/teacher",
    },
    {
      name: "إنجازاتنا",
      link: "/achievement",
    },
    {
      name: "خدماتنا",
      link: "/services",
    },
  ];

  // const handleLogout = () => {
  //   setIsLoggedIn(false); 
  // };

  // const handleLogin = () => {
  //   setIsLoggedIn(true); 
  // };

  return (
    <nav className="w-full h-auto bg-gray-800 lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
      <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="">
              <img
                src="./images/3fc521c1-a8c7-48a4-ac36-5f308180ae0c.jpeg"
                alt=""
                className="w-20 rounded-full"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border duration-200"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes className="text-gray-400 cursor-pointer" size={24} />
                ) : (
                  <FaBars className="text-gray-400 cursor-pointer" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-between md:block overflow-hidden transition-all duration-500 ease-in-out ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
            {Links.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}

           
            {/* {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-[1.1rem] font-normal text-white px-5 py-2.5 duration-200 transition-all ease-in-out hover:bg-slate-500 rounded lg:ml-10 md:ml-6 sm:ml-3 ml-0 mt-2 md:mt-0"
              >
                تسجيل خروج
              </button>
            ) : ( */}
            {user ? <div className="flex gap-3 ">
             <p className="text-white  text-xl bg-orange-800 text-[1.1rem]  px-5 py-2.5 rounded-full  hover:bg-slate-500 ">  {user.name}</p>
             <form onSubmit={handleLogout}>
              <button className="bg-orange-500 text-[1.1rem] font-normal text-white px-5 py-2.5 duration-200 transition-all ease-in-out hover:bg-slate-500 rounded">
                تسجيل خروج
              </button>
             </form>
              </div>:
             
              <Link to="/Register">
                <button
                  // onClick={handleLogin}
                  className="bg-orange-500 text-[1.1rem] font-normal text-white px-5 py-2.5 duration-200 transition-all ease-in-out hover:bg-slate-500 rounded lg:ml-10 md:ml-6 sm:ml-3 ml-0 mt-2 md:mt-0"
                >
                  تسجيل دخول
                </button>
              </Link>
            // {/* // )} */}
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;








