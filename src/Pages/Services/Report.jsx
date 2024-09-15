import React from 'react';
import './ServiceStyle.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Report() {
  const initValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    message:"",
};

const inputValidation = Yup.object({
    Email: Yup.string()
        .min(15, "البريد الإلكتروني يجب أن يحتوي على أكثر من 15 حرفًا")
        .email("       يرجى ادخال بريد الكتروني صالح ")
        .required("هذا الحقل مطلوب"),
    FirstName: Yup.string()
        .min(3, "لا يمكن ان يكون اقل من ثلاثة حرف")
        .required("هذ الحقل مطلوب")
        .max(20, "لا يمكن ان يكون اكثر من 20 حرف"),
    LastName: Yup.string()
        .min(3, "لا يمكن ان يكون اقل من ثلاثة احرف")
        .required("هذا الحقل مطلوب")
        .max(20, "لا يمكن ان يكون اكثر من 20 حرف"),
    message: Yup.string()
        .min(10, "لا يمكن ان يكون اقل من 10 حروف")
        .required("هذا الحقل مطلوب")
        .max(500, "لا يمكن ان يزيد عن 500 حرف"),

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
    <section>
<form action="" onSubmit={formik.handleSubmit}>
  <div className='flex flex-col items-center justify-center h[100vh]'>
    <h1 className=' main-text text-white text-center'>استفسر الان</h1>

    <input
      type="text"
      className='input-3'
      name='FirstName'
      placeholder='الاسم الاول'
      autoComplete='off'
      
      onChange={formik.handleChange}
      // onBlur={formik.handleBlur} 
      value={formik.values.FirstName}
    />
    {formik.touched.FirstName && formik.errors.FirstName ? (
      <p className='text-red-500'>{formik.errors.FirstName}</p>
    ) : null}

    <input
      type="text"
      className='input-3'
      name='LastName'
      placeholder='الاسم الاخير'
      autoComplete='off'
      onChange={formik.handleChange}
      // onBlur={formik.handleBlur} 
      value={formik.values.LastName}
    />
    {formik.touched.LastName && formik.errors.LastName ? (
      <p className='text-red-500'>{formik.errors.LastName}</p>
    ) : null}

    <input
      type="email"
      className='input-3'
      name='Email'
      placeholder='البريد الالكتروني '
      autoComplete='off'
      onChange={formik.handleChange}
      // onBlur={formik.handleBlur}  
      value={formik.values.Email}
    />
    {formik.touched.Email && formik.errors.Email ? (
      <p className='text-red-500'>{formik.errors.Email}</p>
    ) : null}

    <textarea
      rows="5"
      cols="100"
      className='Text-Area'
      name="message"
      placeholder='اكتب استفسارك'
      autoComplete='off'
      
      onChange={formik.handleChange}
      // onBlur={formik.handleBlur}  
      value={formik.values.message}
    ></textarea>
    {formik.touched.message && formik.errors.message ? (
      <p className='text-red-500'>{formik.errors.message}</p>
    ) : null}

    <button type='submit' className='btn-send'>ارسال</button>
  </div>
</form>
    </section>
    </>
  )
}

export default Report;


