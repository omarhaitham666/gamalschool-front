// import {  createContext, useEffect, useState } from "react";


// export const AppContext=createContext();
// export default function AppProvider({children}){
//     const [token,setToken]=useState(localStorage.getItem("token"))
//     const[user,setUser]=useState(null)
//     async function getUser(){
//         const res = await fetch('/api/user',{
//             headers:{
//                 Authorization:`Bearer ${token}`,
//             },
//         });
//         const data = await res.json()
//         if(res.ok){
//             setUser(data);
//         }
//     }
//     useEffect(()=>{
//         if(token){
//             getUser();
//         }

//     },[token]);

//     return <AppContext.Provider value={{token,setToken,user,setUser}}>
//         {children}
//     </AppContext.Provider>
    
// }




// src/Context/AppContext.js
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // حالة التحميل
    const [authError, setAuthError] = useState(null); // حالة الخطأ في المصادقة

    const getUser = async () => {
        try {
            const res = await axios.get('api/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true, // إرسال ملفات تعريف الارتباط مع الطلب
            });
            setUser(res.data);
            setAuthError(null);
        } catch (error) {
            console.error('Error fetching user:', error);
            setUser(null);
            setAuthError('فشل في جلب بيانات المستخدم.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            getUser();
        } else {
            setIsLoading(false);
        }
    }, [token]);

    return (
        <AppContext.Provider value={{ token, setToken, user, setUser, isLoading, authError }}>
            {children}
        </AppContext.Provider>
    );
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

