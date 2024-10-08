// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./LoginStyle.css";
// import {  faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
// import { useContext, useState } from "react";
// import ParticlesComponent from "../Particles/ParticlesComponent";
// import { useFormik } from "formik";
// import * as Yup from 'yup';
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Swal from 'sweetalert2';
// import AppProvider, { AppContext } from "../../Context/AppContext";

// function Register() {
//   const{token,setToken}=useContext(AppContext)
//   const[open,setOpen]=useState(false)
//   const initValues = {
//     Email: "",
//     Password: ""
// };
// const inputValidation = Yup.object({
//   Email: Yup.string()
//       .min(15, "لا يقل عن 15 حروف")
//       .email("عذرا ادخل البريد الالكتروني الصحيح")
//       .required("هذا الحقل مطلوب"),
//   Password: Yup.string()
//       .min(8, "لا يقل عن 8 حروف")
//       .required("هذا الحقل مطلوب")
//       .max(20, "لا يزيد عن 20 حرف"),
// });

// const formik = useFormik({
//   initialValues: initValues,
//   validationSchema: inputValidation,
//   onSubmit: async (values) => {
//     try {
//       // إرسال البيانات إلى الـ Backend
//       const response = await axios.post('/api/login', {
//         email: values.Email,
//         password: values.Password,
        
//       });

//       console.log();
      
//       Swal.fire({
//         title: 'نجاح',
//         text: 'تم التسجيل بنجاح',
//         icon: 'success',
//       }).then(() => {
//         formik.resetForm(); //change from formik.resetForm();
//       });
//     } catch (error) {
//       let message = 'حدث خطأ أثناء التسجيل';

//       // التعامل مع الأخطاء القادمة من الخادم
//       if (error.response && error.response.status === 422) {
//         const errorMessages = error.response.data.errors;
//         message = Object.values(errorMessages).flat().join(' ');
//       } else if (error.request) {
//         message = 'لم يتم استلام أي استجابة من الخادم. حاول مرة أخرى لاحقًا.';
//       } else {
//         message = `حدث خطأ في إعداد الطلب: ${error.message}`;
//       }

//       // إظهار رسالة خطأ
//       Swal.fire({
//         title: 'خطأ',
//         text: message,
//         icon: 'error',
//       });
//     }
//   }
// });


//   return (
//     <>
//     <ParticlesComponent id="Particles"  />
//     <div className="h-[100vh] flex flex-col items-center justify-center text-white ">
//       <div className="h-[400px] w-80  bg-blue-950 rounded-lg px-6 my-4 overflow-hidden ">
//           <h2 className="text-white text-3xl font-bold pb-6 mt-6 text-center ">دخول حسابي</h2>
          
//           <form action="" className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
//             <div className="w-full relative " >
//               <input className=" w-full  rounded-full  py-2 px-4 my-2 bg-transparent  border border-gray-200" type="email" name="Email"onChange={formik.handleChange}  value={formik.values.Email}  id="" placeholder="البريد الالكتروني"/>
//               <FontAwesomeIcon icon={faUser} className="absolute top-[40%] left-3" />
//               {formik.touched.Email && formik.errors.Email ? (
//                         <small className='text-red-500'>{formik.errors.Email}</small>
//                     ) : null}
//             </div>
          
//             <div className="w-full relative">
//               <input className=" w-full border  rounded-full py-2 px-4 my-2 bg-transparent  border-gray-200" type="password" name="Password"  onChange={formik.handleChange} value={formik.values.Password} id="" placeholder="كلمة المرور"/>
//               <FontAwesomeIcon icon={faLock} className="absolute top-[40%] left-3" />
//               {formik.touched.Password && formik.errors.Password ? (
//                         <small className='text-red-500'>{formik.errors.Password}</small>
//                     ) : null}
//             </div>
//             <button className="my-2 py-2 w-full rounded-full bg-blue-600 " type="submit">Login</button>
//            <Link to={"/Register"}> <span className="text-white">ليس لديك حساب؟ تسجيل الدخول</span></Link>
//           </form>
     








//     </div>
//     </div>
//     </>
//   )
// }

// export default Register;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginStyle.css";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { AppContext } from "../../Context/AppContext";

function register() {
  const navigate=useNavigate();
  const { token, setToken } = useContext(AppContext);
  
  const [open, setOpen] = useState(false);

  
  const initValues = {
    
    Email: "",
    Password: "",
  };

 
  const inputValidation = Yup.object({
    Email: Yup.string()
      .min(15, "يجب أن لا يقل عن 15 حرف")
      .email("أدخل البريد الإلكتروني الصحيح")
      .required("هذا الحقل مطلوب"),
    Password: Yup.string()
      .min(8, "يجب أن لا يقل عن 8 حروف")
      .required("هذا الحقل مطلوب")
      .max(20, "يجب أن لا يزيد عن 20 حرف"),
  });

  
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: inputValidation,
    onSubmit: async (values) => {
      try {
       
        const response = await axios.post('/api/login', {
          email: values.Email,
          password: values.Password,
        });

        const token = response.data.token; 
        const status=response.data.status;
        if(status==true){
          Swal.fire({
            title: 'نجاح',
            text: 'تم التسجيل بنجاح',
            icon: 'success',
          }).then(() => {
            localStorage.setItem("token", token); 
            navigate("/");
            setToken(token);
            
          });
        }else {
          Swal.fire({
            title: 'خطأ',
            text:"حدث خطا في التسجيل",
            icon: 'error',
          });
        }
        
      } catch (error) {
        let message = 'حدث خطأ أثناء التسجيل';

        
        if (error.response && error.response.status === 422) {
          const errorMessages = error.response.data.errors;
          message = Object.values(errorMessages).flat().join(' ');
        } else if (error.request) {
          message = 'لم يتم استلام أي استجابة من الخادم. حاول مرة أخرى لاحقًا.';
        } else {
          message = `حدث خطأ في إعداد الطلب: ${error.message}`;
        }

        Swal.fire({
          title: 'خطأ',
          text: message,
          icon: 'error',
        });
      }
    }
  });

  return (
    <>
      <ParticlesComponent id="Particles" />
      <div className="h-[100vh] flex flex-col items-center justify-center text-white">
        <div className="h-[450px] w-80 bg-blue-950 rounded-lg px-6 my-4 overflow-hidden">
          <h2 className="text-white text-3xl font-bold pb-6 mt-6 text-center">حساب جديد</h2>

   

          <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
           
            <div className="w-full relative">
              <input className="w-full border rounded-full py-2 px-4 my-2 bg-transparent border-gray-200" 
                     type="email" name="Email" onChange={formik.handleChange} 
                     id="UserEmail" value={formik.values.Email} placeholder="البريد الإلكتروني" />
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-[40%] left-3" />
              {formik.touched.Email && formik.errors.Email ? (
                <small className='text-red-500'>{formik.errors.Email}</small>
              ) : null}
            </div>
            <div className="w-full relative">
              <input className="w-full border rounded-full py-2 px-4 my-2 bg-transparent border-gray-200" 
                     type="password" name="Password" onChange={formik.handleChange} 
                     value={formik.values.Password} id="UserPassword" placeholder="كلمة المرور" />
              <FontAwesomeIcon icon={faLock} className="absolute top-[40%] left-3" />
              {formik.touched.Password && formik.errors.Password ? (
                <small className='text-red-500'>{formik.errors.Password}</small>
              ) : null}
            </div>

            <button className="my-2 py-2 w-full rounded-full bg-blue-600" type="submit">تسجيل</button>
            <Link to={"/Login"}><span className="text-white">لو عملت حساب هنا قبل كدا: دوس هنا</span></Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default register;





