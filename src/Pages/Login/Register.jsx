import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginStyle.css";
import {  faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ParticlesComponent from "../Particles/ParticlesComponent";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

function Register() {
  const[open,setOpen]=useState(false)
  const initValues = {
    UserName: "",
    Email: "",
    Password: ""
};
const inputValidation = Yup.object({
  Email: Yup.string()
      .min(15, "لا يقل عن 15 حروف")
      .email("عذرا ادخل البريد الالكتروني الصحيح")
      .required("هذا الحقل مطلوب"),
  Password: Yup.string()
      .min(8, "لا يقل عن 8 حروف")
      .required("هذا الحقل مطلوب")
      .max(20, "لا يزيد عن 20 حرف"),
  UserName: Yup.string()
      .min(3, "لا يقل عن 3 احرف")
      .required("هذا الحقل مطلوب")
      .max(20, "لا يزيد عن 20 حرف"),
});

const formik = useFormik({
  initialValues: initValues,
  validationSchema: inputValidation,
  onSubmit: values => {
      console.log(values);
  }
});


  return (
    <>
    <ParticlesComponent id="Particles"  />
    <div className="h-[100vh] flex flex-col items-center justify-center text-white ">
      <div className="h-[400px] w-80  bg-blue-950 rounded-lg px-6 my-4 overflow-hidden ">
          <h2 className="text-white text-3xl font-bold pb-6 mt-6 text-center ">دخول حسابي</h2>
          <form action="" className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
            <div className="w-full relative " >
              <input className=" w-full  rounded-full  py-2 px-4 my-2 bg-transparent  border border-gray-200" type="text" name="UserName"onChange={formik.handleChange}  value={formik.values.UserName}  id="" placeholder="اسم المستخدم"/>
              <FontAwesomeIcon icon={faUser} className="absolute top-[40%] left-3" />
              {formik.touched.UserName && formik.errors.UserName ? (
                        <small className='text-red-500'>{formik.errors.UserName}</small>
                    ) : null}
            </div>
          
            <div className="w-full relative">
              <input className=" w-full border  rounded-full py-2 px-4 my-2 bg-transparent  border-gray-200" type="password" name="Password"  onChange={formik.handleChange} value={formik.values.Password} id="" placeholder="كلمة المرور"/>
              <FontAwesomeIcon icon={faLock} className="absolute top-[40%] left-3" />
              {formik.touched.Password && formik.errors.Password ? (
                        <small className='text-red-500'>{formik.errors.Password}</small>
                    ) : null}
            </div>
            <button className="my-2 py-2 w-full rounded-full bg-blue-600 ">Login</button>
           <Link to={"/Register"}> <span className="text-white">ليس لديك حساب؟ تسجيل الدخول</span></Link>
          </form>
     








    </div>
    </div>
    </>
  )
}

export default Register;


