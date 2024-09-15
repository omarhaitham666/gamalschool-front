import React from 'react';
import './ServiceStyle.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function TabletService() {
    const initValues = {
        FullName: "",
        Email: "",
        phone: "",
        phone2: "",
        code: "",
        selectgrd: "",
        
    };
    
    // const inputValidation = Yup.object({
    //     Email: Yup.string()
    //         .min(15, "cant be less than 15 characters")
    //         .email("please provide a valid email")
    //         .required("this field is required"),
    //     FullName: Yup.string()
    //         .min(3, "cant be less than 3 characters")
    //         .required("this field is required")
    //         .max(80, "cant be more than 20 characters"),
    //     phone: Yup.number()
    //         .min(11, "cant be less than 11 characters")
    //         .required("this field is required")
    //         .max(11, "cant be more than 11 characters"),

    //     phone2: Yup.number()
    //         .min(11, "cant be less than 11 characters")
    //         .required("this field is required")
    //         .max(11, "cant be more than 11 characters"),

    //     code: Yup.string()
    //         .min(5, "cant be less than 10 characters")
    //         .required("this field is required")
    //         .max(20, "cant be more than 500 characters"),
    
    // });
    const inputValidation = Yup.object({
        Email: Yup.string()
            .min(15, "البريد الإلكتروني يجب أن يحتوي على أكثر من 15 حرفًا")
            .email("يرجى إدخال بريد إلكتروني صالح")
            .required("هذا الحقل مطلوب"),
        FullName: Yup.string()
            .min(3, "الاسم لا يجب أن يقل عن 3 أحرف")
            .max(80, "الاسم لا يجب أن يزيد عن 80 حرف")
            .required("هذا الحقل مطلوب"),
        phone: Yup.string()
            .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
            .required("هذا الحقل مطلوب"),
        phone2: Yup.string()
            .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
            .required("هذا الحقل مطلوب"),
        code: Yup.string()
            .min(5, "الكود لا يجب أن يقل عن 5 أحرف")
            .max(20, "الكود لا يجب أن يزيد عن 20 حرف")
            .required("هذا الحقل مطلوب"),
            selectgrd: Yup.string()
            .required("هذا الحقل مطلوب"),
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
        <div className='container-tabservice'>
        <h1 className='text-white text-center main-txt-tab'>حجز التابلت الدراسي</h1>
        <form action="" className='form'  onSubmit={formik.handleSubmit}>
            <div className="input-box">
                <label htmlFor="" className='text-white label'>الاسم بالكامل   </label>
                <input type="text" placeholder='ادخل الاسم بالكامل'  name='FullName' onChange={formik.handleChange} value={formik.values.FullName} onBlur={formik.handleBlur}    />
                {formik.touched.FullName && formik.errors.FullName ? (
      <p className='text-red-500'>{formik.errors.FullName}</p>
    ) : null}
            </div>

            <div className="input-box">
                <label htmlFor="" className='text-white'>البريد الالكتروني    </label>
                <input type="text" placeholder='ادخل البريد الالكتروني'   name='Email'  onChange={formik.handleChange} value={formik.values.Email} onBlur={formik.handleBlur}   />
                {formik.touched.Email && formik.errors.Email ? (
      <p className='text-red-500'>{formik.errors.Email}</p>
    ) : null}
            </div>

            <div className="column">
            <div className="input-box">
                <label htmlFor="" className='text-white'>   رقمك </label>
                <input type="text" placeholder='ادخل رقمك '  name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur}     />
                {formik.touched.phone && formik.errors.phone ? (
      <p className='text-red-500'>{formik.errors.phone}</p>
    ) : null}
            </div>

            <div className="input-box">
                <label htmlFor="" className='text-white'>رقم ولي الامر    </label>
                <input type="text" placeholder='ادخل رقم ولي الامر'   name='phone2' onChange={formik.handleChange} value={formik.values.phone2} onBlur={formik.handleBlur}   />
                {formik.touched.phone2 && formik.errors.phone2 ? (
      <p className='text-red-500'>{formik.errors.phone2}</p>
    ) : null}
            </div>
            </div>

            <div className=''>
            <div className="input-box">
                <label htmlFor="" className='text-white'>  كود    </label>
                <input type="text" placeholder='ادخل الكود  '   name='code'  onChange={formik.handleChange} value={formik.values.code}  onBlur={formik.handleBlur}   />
                {formik.touched.code && formik.errors.code ? (
      <p className='text-red-500'>{formik.errors.code}</p>
    ) : null}
            </div>
            </div>

            <div className='flex items-center justify-center'>
                <select name="selectgrd" id="" className='mt-4 text-center'  onChange={formik.handleChange} value={formik.values.selectgrd} onBlur={formik.handleBlur}  >
                    <option selected disabled>
                        اختر الصف الدراسي
                    </option>
                    <option value="grd-1">الصف الاول الثانوي</option>
                    <option value="grd-2">الصف الثاني الثانوي</option>
                    <option value="grd-3">الصف الثالث الثانوي</option>
                </select>
                {formik.touched.selectgrd && formik.errors.selectgrd ? (
      <p className='text-red-500'>{formik.errors.selectgrd}</p>
    ) : null}
            </div>

            <button type='submit' className='btn-send'>ارسال</button>
        </form>
        </div>
    </section>


    </>
  )
}

export default TabletService;