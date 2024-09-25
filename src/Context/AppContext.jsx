import {  createContext, useEffect, useState } from "react";


export const AppContext=createContext();
export default function AppProvider({children}){
    const [token,setToken]=useState(localStorage.getItem("token"))
    const[user,setUser]=useState(null)
    async function getUser(){
        const res = await fetch('/api/user',{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        const data = await res.json()
        if(res.ok){
            setUser(data);
        }
    }
    useEffect(()=>{
        if(token){
            getUser();
        }

    },[token]);

    return <AppContext.Provider value={{token,setToken,user,setUser}}>
        {children}
    </AppContext.Provider>
    
}

// import { createContext, useEffect, useState } from "react";


// export const AppContext = createContext();

// export default function AppProvider({ children }) {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(!!token); 

//   // جلب بيانات المستخدم
//   async function getUser() {
//     const res = await fetch("/api/user", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await res.json();
//     setUser(data);
//   }

//   useEffect(() => {
//     if (token) {
//       getUser();
//       setIsLoggedIn(true); 
//     } else {
//       setIsLoggedIn(false); 
//     }
//   }, [token]);

//   return (
//     <AppContext.Provider value={{ token, setToken, user, isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

