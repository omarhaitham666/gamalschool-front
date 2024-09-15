import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginStyle.css";
import {  faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
function Login() {

  const[open,setOpen]=useState(false)
  const initValues = {
    name: "",
    Email: "",
    Password: ""
};
const inputValidation = Yup.object({
  Email: Yup.string()
      .min(15, "يجب ان لا يقل عن 15 حرف")
      .email("ادخل البريد الالكتروني الصحيح")
      .required("هذا الحقل مطلوب"),
  Password: Yup.string()
      .min(8, " يجب ان لا يقل عن 8 حروف")
      .required("هذا الحقل مطلوب")
      .max(20, "يجب ان لا يزيد عن 20 حرف"),
  name: Yup.string()
      .min(3, "لا يقل عن 3 احرف")
      .required("هذا الحقل مطلوب")
      .max(20, "لا يزيد عن 20 حرف"),
});



const formik = useFormik({
  initialValues: initValues,
  validationSchema: inputValidation,
  onSubmit: async values => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: values.name,
        email: values.Email,
        password: values.Password
      });
      
      Swal.fire({
        title: 'نجاح',
        text: 'تم التسجيل بنجاح',
        icon: 'success',
      }).then(() => {
     
      });
    } catch (error) {
      let message = 'حدث خطأ أثناء التسجيل';
      if (error.response) {
        const errorMessages = error.response.data.data;
        if (errorMessages) {
          message = Object.values(errorMessages).flat().join(' ');
        }
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
    <ParticlesComponent id="Particles"  />
    <div className="h-[100vh] flex flex-col items-center justify-center text-white ">
      <div className="h-[450px] w-80  bg-blue-950 rounded-lg px-6 my-4 overflow-hidden ">
          <h2 className="text-white text-3xl font-bold pb-6 mt-6 text-center ">حساب جديد</h2>
          <form action="" className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
            <div className="w-full relative " >
              <input className=" w-full  rounded-full  py-2 px-4 my-2 bg-transparent  border border-gray-200" type="text" name="name"onChange={formik.handleChange}  value={formik.values.name}  id="UserName" placeholder="اسم المستخدم"/>
              <FontAwesomeIcon icon={faUser} className="absolute top-[40%] left-3" />
              {formik.touched.name && formik.errors.name ? (
                        <small className='text-red-500'>{formik.errors.name}</small>
                    ) : null}
            </div>
            <div className="w-full relative">
              <input className="w-full border  rounded-full py-2 px-4 my-2 bg-transparent  border-gray-200" type="email" name="Email" onChange={formik.handleChange} id="UserEmail"  value={formik.values.Email} placeholder=" البريد الالكتروني" />
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-[40%] left-3" />
              {formik.touched.Email && formik.errors.Email ? (
                        <small className='text-red-500'>{formik.errors.Email}</small>
                    ) : null}
            </div>
            <div className="w-full relative">
              <input className=" w-full border  rounded-full py-2 px-4 my-2 bg-transparent  border-gray-200" type="password" name="Password"  onChange={formik.handleChange} value={formik.values.Password} id="UserPassword" placeholder="كلمة المرور"/>
              <FontAwesomeIcon icon={faLock} className="absolute top-[40%] left-3" />
              {formik.touched.Password && formik.errors.Password ? (
                        <small className='text-red-500'>{formik.errors.Password}</small>
                    ) : null}
            </div>
            <button className="my-2 py-2 w-full rounded-full bg-blue-600 " type="submit">Register</button>
           <Link to={"/Login"}> <span className="text-white"> لو عملت حساب هنا قبل كدا : دوس هنا  </span></Link>
          </form>
     </div>
  </div>
</>
  )
}

export default Login;

