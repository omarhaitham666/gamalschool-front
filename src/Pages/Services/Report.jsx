import React, { useContext, useState } from 'react';
import './ServiceStyle.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import { AppContext } from "../../Context/AppContext";
import { Link } from 'react-router-dom';

function Report() {
  const { user, isLoading, authError } = useContext(AppContext);
  const [responseMessage, setResponseMessage] = useState('');

  const initValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    message: "",
  };

  const inputValidation = Yup.object({
    Email: Yup.string()
      .min(15, "البريد الإلكتروني يجب أن يحتوي على أكثر من 15 حرفًا")
      .email("يرجى ادخال بريد إلكتروني صالح")
      .required("هذا الحقل مطلوب"),
    FirstName: Yup.string()
      .min(3, "لا يمكن أن يكون أقل من ثلاثة أحرف")
      .required("هذا الحقل مطلوب")
      .max(20, "لا يمكن أن يكون أكثر من 20 حرفًا"),
    LastName: Yup.string()
      .min(3, "لا يمكن أن يكون أقل من ثلاثة أحرف")
      .required("هذا الحقل مطلوب")
      .max(20, "لا يمكن أن يكون أكثر من 20 حرفًا"),
    message: Yup.string()
      .min(10, "لا يمكن أن يكون أقل من 10 حروف")
      .required("هذا الحقل مطلوب")
      .max(500, "لا يمكن أن يزيد عن 500 حرف"),
  });

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: inputValidation,
    onSubmit: async (values, { resetForm }) => {
      if (!user) {
        setResponseMessage('يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.');
        return;
      }

      try {
       
        const response = await axios.post('/api/messages', {
          first_name: values.FirstName,
          last_name: values.LastName,
          email: values.Email,
          message: values.message,
        });
        console.log(response.data);
        setResponseMessage("تم إرسال الرسالة بنجاح!");
        resetForm();
      } catch (error) {
        console.error("هناك خطأ في إرسال الرسالة:", error);
        if (error.response && error.response.data) {
          const serverErrors = error.response.data.errors;
          if (serverErrors) {
            const errorMessages = Object.values(serverErrors).flat().join(' ');
            setResponseMessage(errorMessages);
          } else if (error.response.data.message) {
            setResponseMessage(error.response.data.message);
          } else {
            setResponseMessage("فشل في إرسال الرسالة. حاول مرة أخرى.");
          }
        } else {
          setResponseMessage("فشل في إرسال الرسالة. حاول مرة أخرى.");
        }
      }
    }
  });

  if (isLoading) {
    return (
      <section>
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-white text-center'>جارٍ التحميل...</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='main-text text-white text-center mb-6'>استفسر الآن</h1>

          
          {authError && <p className='text-red-500 text-center mb-4'>{authError}</p>}

          
          {responseMessage && <p className='text-green-500 text-center mb-4'>{responseMessage}</p>}

          
          {user ? (
            <>
              <input
                type="text"
                className='input-3'
                name='FirstName'
                placeholder='الاسم الأول'
                autoComplete='off'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FirstName}
              />
              {formik.touched.FirstName && formik.errors.FirstName ? (
                <p className='text-red-500'>{formik.errors.FirstName}</p>
              ) : null}

              <input
                type="text"
                className='input-3'
                name='LastName'
                placeholder='الاسم الأخير'
                autoComplete='off'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.LastName}
              />
              {formik.touched.LastName && formik.errors.LastName ? (
                <p className='text-red-500'>{formik.errors.LastName}</p>
              ) : null}

              <input
                type="email"
                className='input-3'
                name='Email'
                placeholder='البريد الإلكتروني'
                autoComplete='off'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className='text-red-500'>{formik.errors.message}</p>
              ) : null}

              <button type='submit' className='btn-send'>إرسال</button>
            </>
          ) : (
          
            <div className='text-center'>
              <p className='text-red-500 mb-4'>يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.</p>
              <Link to="/register" className='btn-login px-4 py-2 bg-green-500 text-white rounded'>
                تسجيل الدخول
              </Link>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}

export default Report;
