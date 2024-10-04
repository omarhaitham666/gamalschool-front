// import React, { useContext, useState, useEffect } from 'react';
// import './ServiceStyle.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { AppContext } from "../../Context/AppContext";
// import axios from 'axios'; // استيراد مكتبة axios

// function Uniform() {
//     const { isAuthenticated } = useContext(AppContext);
//     const [loginMessage, setLoginMessage] = useState('');
//     const [responseMessage, setResponseMessage] = useState(''); // لتخزين رسالة الاستجابة

   

//     const initValues = {
//         FullName: "",
//         Email: "",
//         phone: "",
//         phone2: "",
//         selectgrd: "",
//     };

//     const inputValidation = Yup.object({
//         Email: Yup.string()
//             .min(15, "البريد الإلكتروني يجب أن يحتوي على أكثر من 15 حرفًا")
//             .email("يرجى إدخال بريد إلكتروني صالح")
//             .required("هذا الحقل مطلوب"),
//         FullName: Yup.string()
//             .min(3, "الاسم لا يجب أن يقل عن 3 أحرف")
//             .max(80, "الاسم لا يجب أن يزيد عن 80 حرف")
//             .required("هذا الحقل مطلوب"),
//         phone: Yup.string()
//             .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
//             .required("هذا الحقل مطلوب"),
//         phone2: Yup.string()
//             .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
//             .required("هذا الحقل مطلوب"),
//         selectgrd: Yup.string()
//             .required("هذا الحقل مطلوب"),
//     });

//     const formik = useFormik({
//         initialValues: initValues,
//         validationSchema: inputValidation,
//         onSubmit: async (values) => {
//             if (!user) {
//                 setResponseMessage('يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.');
//                 return;
//             }


//             try {
//                 // إرسال البيانات إلى API Laravel
//                 const response = await axios.post('/api/services', {
//                     data: {
//                         FullName: values.FullName,
//                         Email: values.Email,
//                         phone: values.phone,
//                         phone2: values.phone2,
//                         selectgrd: values.selectgrd,
//                     },
//                     type: 'uniform', // تعيين نوع الخدمة كـ 'uniform'
//                 }, {
//                     headers:{
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                     withCredentials: true, // إرسال ملفات تعريف الارتباط مع الطلب
//                 });
                
//                 setResponseMessage('تمت إضافة الخدمة بنجاح!');
//                 console.log(response.data);
//                 formik.resetForm(); // إعادة تعيين النموذج بعد الإرسال
//             } catch (error) {
//                 console.error('Error details:', error.response ? error.response.data : error.message);
//                 setResponseMessage('حدث خطأ أثناء إضافة الخدمة.');
//             }
//         },
//     });

//     return (
//         <>
//             <section>
//                 <div className="container-tabservice">
//                     <h1 className="text-white text-center main-txt-tab">حجز الزي المدرسي</h1>
//                     {authError && <p className='text-red-500 text-center'>{authError}</p>}
//                     {user ? (
//                         <>
//                     {loginMessage && <p className="text-red-500 text-center">{loginMessage}</p>}
//                     {responseMessage && <p className="text-green-500 text-center">{responseMessage}</p>} {/* عرض رسالة الاستجابة */}
//                     <form className="form" onSubmit={formik.handleSubmit}>
//                         <div className="input-box">
//                             <label className="text-white label">الاسم بالكامل</label>
//                             <input
//                                 type="text"
//                                 placeholder="ادخل الاسم بالكامل"
//                                 name="FullName"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.FullName}
//                                 onBlur={formik.handleBlur}
//                             />
//                             {formik.touched.FullName && formik.errors.FullName ? (
//                                 <p className="text-red-500">{formik.errors.FullName}</p>
//                             ) : null}
//                         </div>

//                         <div className="input-box">
//                             <label className="text-white">البريد الالكتروني</label>
//                             <input
//                                 type="text"
//                                 placeholder="ادخل البريد الالكتروني"
//                                 name="Email"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.Email}
//                                 onBlur={formik.handleBlur}
//                             />
//                             {formik.touched.Email && formik.errors.Email ? (
//                                 <p className="text-red-500">{formik.errors.Email}</p>
//                             ) : null}
//                         </div>

//                         <div className="column">
//                             <div className="input-box">
//                                 <label className="text-white">رقمك</label>
//                                 <input
//                                     type="text"
//                                     placeholder="ادخل رقمك"
//                                     name="phone"
//                                     onChange={formik.handleChange}
//                                     value={formik.values.phone}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 {formik.touched.phone && formik.errors.phone ? (
//                                     <p className="text-red-500">{formik.errors.phone}</p>
//                                 ) : null}
//                             </div>

//                             <div className="input-box">
//                                 <label className="text-white">رقم ولي الامر</label>
//                                 <input
//                                     type="text"
//                                     placeholder="ادخل رقم ولي الامر"
//                                     name="phone2"
//                                     onChange={formik.handleChange}
//                                     value={formik.values.phone2}
//                                     onBlur={formik.handleBlur}
//                                 />
//                                 {formik.touched.phone2 && formik.errors.phone2 ? (
//                                     <p className="text-red-500">{formik.errors.phone2}</p>
//                                 ) : null}
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-center">
//                             <select
//                                 name="selectgrd" // تصحيح اسم الحقل ليكون متسقًا
//                                 className="mt-4 text-center"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.selectgrd}
//                                 onBlur={formik.handleBlur}
//                             >
//                                 <option value="" disabled>
//                                     اختر الصف الدراسي
//                                 </option>
//                                 <option value="grd-1">الصف الاول الثانوي</option>
//                                 <option value="grd-2">الصف الثاني الثانوي</option>
//                                 <option value="grd-3">الصف الثالث الثانوي</option>
//                             </select>
//                             {formik.touched.selectgrd && formik.errors.selectgrd ? (
//                                 <p className='text-red-500'>{formik.errors.selectgrd}</p>
//                             ) : null}
//                         </div>

//                         <button type="submit" className="btn-send">
//                             ارسال
//                         </button>
//                     </form>
//                     </>
//                        ) : (
//                         <p className='text-red-500 text-center'>يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.</p>
//                     )}
//                 </div>
//             </section>
//         </>
   
//     );
// }

// export default Uniform;






import React, { useContext, useState, useEffect } from 'react';
import './ServiceStyle.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppContext } from "../../Context/AppContext";
import axios from 'axios'; // استيراد مكتبة axios

function Uniform() {
    const { user, isLoading, authError } = useContext(AppContext);
    const [responseMessage, setResponseMessage] = useState(''); // لتخزين رسالة الاستجابة

    const initValues = {
        FullName: "",
        Email: "",
        phone: "",
        phone2: "",
        selectgrd: "",
    };

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
        selectgrd: Yup.string()
            .required("هذا الحقل مطلوب"),
    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: inputValidation,
        onSubmit: async (values) => {
            if (!user) {
                setResponseMessage('يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.');
                return;
            }

            try {
                // إرسال البيانات إلى API Laravel
                const response = await axios.post('/api/services', {
                    data: {
                        FullName: values.FullName,
                        Email: values.Email,
                        phone: values.phone,
                        phone2: values.phone2,
                        selectgrd: values.selectgrd,
                    },
                    type: 'uniform', // تعيين نوع الخدمة كـ 'uniform'
                }, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    withCredentials: true, // إرسال ملفات تعريف الارتباط مع الطلب
                });

                setResponseMessage('تمت إضافة الخدمة بنجاح!');
                console.log(response.data);
                formik.resetForm(); // إعادة تعيين النموذج بعد الإرسال
            } catch (error) {
                console.error('Error details:', error.response ? error.response.data : error.message);
                setResponseMessage('حدث خطأ أثناء إضافة الخدمة.');
            }
        },
    });

    if (isLoading) {
        return <p className='text-white text-center'>جارٍ تحميل...</p>;
    }

    return (
        <>
            <section>
                <div className="container-tabservice">
                    <h1 className="text-white text-center main-txt-tab">حجز الزي المدرسي</h1>
                    {authError && <p className='text-red-500 text-center'>{authError}</p>}
                    {user ? (
                        <>
                    {responseMessage && <p className='text-green-500 text-center'>{responseMessage}</p>} {/* عرض رسالة الاستجابة */}
                    
                        <form className="form" onSubmit={formik.handleSubmit}>
                            <div className="input-box">
                                <label className="text-white label">الاسم بالكامل</label>
                                <input
                                    type="text"
                                    placeholder="ادخل الاسم بالكامل"
                                    name="FullName"
                                    onChange={formik.handleChange}
                                    value={formik.values.FullName}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.FullName && formik.errors.FullName ? (
                                    <p className="text-red-500">{formik.errors.FullName}</p>
                                ) : null}
                            </div>

                            <div className="input-box">
                                <label className="text-white">البريد الالكتروني</label>
                                <input
                                    type="text"
                                    placeholder="ادخل البريد الالكتروني"
                                    name="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.Email}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.Email && formik.errors.Email ? (
                                    <p className="text-red-500">{formik.errors.Email}</p>
                                ) : null}
                            </div>

                            <div className="column">
                                <div className="input-box">
                                    <label className='text-white'>رقمك</label>
                                    <input
                                        type="text"
                                        placeholder="ادخل رقمك"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <p className="text-red-500">{formik.errors.phone}</p>
                                    ) : null}
                                </div>

                                <div className="input-box">
                                    <label className='text-white'>رقم ولي الامر</label>
                                    <input
                                        type="text"
                                        placeholder="ادخل رقم ولي الامر"
                                        name="phone2"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone2}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phone2 && formik.errors.phone2 ? (
                                        <p className="text-red-500">{formik.errors.phone2}</p>
                                    ) : null}
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <select
                                    name="selectgrd" // تصحيح اسم الحقل ليكون متسقًا
                                    className="mt-4 text-center"
                                    onChange={formik.handleChange}
                                    value={formik.values.selectgrd}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="" disabled>
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
                        </>
                    ) : (
                        <p className='text-red-500 text-center'>يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Uniform;
























// import React, { useContext, useState, useEffect } from 'react';
// import './ServiceStyle.css';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { AppContext } from "../../Context/AppContext";
// import axios from 'axios'; // استيراد مكتبة axios

// function Uniform() {
//     const { isAuthenticated, isLoading, login } = useContext(AppContext);
//     const [loginMessage, setLoginMessage] = useState('');
//     const [responseMessage, setResponseMessage] = useState(''); // لتخزين رسالة الاستجابة

//     useEffect(() => {
//         // الحصول على CSRF Token عند تحميل المكون
//         axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
//             .then(response => {
//                 // CSRF Token is set
//             })
//             .catch(error => {
//                 console.error('Error getting CSRF token:', error);
//             });
//     }, []);

//     const initValues = {
//         FullName: "",
//         Email: "",
//         phone: "",
//         phone2: "",
//         selectgrd: "",
//     };

//     const inputValidation = Yup.object({
//         Email: Yup.string()
//             .min(15, "البريد الإلكتروني يجب أن يحتوي على أكثر من 15 حرفًا")
//             .email("يرجى إدخال بريد إلكتروني صالح")
//             .required("هذا الحقل مطلوب"),
//         FullName: Yup.string()
//             .min(3, "الاسم لا يجب أن يقل عن 3 أحرف")
//             .max(80, "الاسم لا يجب أن يزيد عن 80 حرف")
//             .required("هذا الحقل مطلوب"),
//         phone: Yup.string()
//             .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
//             .required("هذا الحقل مطلوب"),
//         phone2: Yup.string()
//             .matches(/^[0-9]{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
//             .required("هذا الحقل مطلوب"),
//         selectgrd: Yup.string()
//             .required("هذا الحقل مطلوب"),
//     });

//     const formik = useFormik({
//         initialValues: initValues,
//         validationSchema: inputValidation,
//         onSubmit: async (values) => {
//             if (!isAuthenticated) {
//                 setLoginMessage('يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.');
//                 return;
//             }

//             try {
//                 // إرسال البيانات إلى API Laravel
//                 const response = await axios.post('/api/services', {
//                     data: {
//                         FullName: values.FullName,
//                         Email: values.Email,
//                         phone: values.phone,
//                         phone2: values.phone2,
//                         selectgrd: values.selectgrd,
//                     },
//                     type: 'uniform', // تعيين نوع الخدمة كـ 'uniform'
//                 }, {
//                     withCredentials: true, // إرسال ملفات تعريف الارتباط مع الطلب
//                 });

//                 setResponseMessage('تمت إضافة الخدمة بنجاح!');
//                 console.log(response.data);
//                 formik.resetForm(); // إعادة تعيين النموذج بعد الإرسال
//             } catch (error) {
//                 console.error('Error details:', error.response ? error.response.data : error.message);
//                 setResponseMessage('حدث خطأ أثناء إضافة الخدمة.');
//             }
//         },
//     });

//     if (isLoading) {
//         return <p className="text-white text-center">جارٍ تحميل...</p>;
//     }

//     return (
//         <>
//             <section>
//                 <div className='container-tabservice'>
//                     <h1 className='text-white text-center main-txt-tab'>حجز الزي المدرسي</h1>
//                     {!isAuthenticated ? (
//                         <p className='text-red-500 text-center'>يجب عليك تسجيل الدخول لاستخدام هذه الخدمة.</p>
//                     ) : (
//                         <>
//                             {loginMessage && <p className='text-red-500 text-center'>{loginMessage}</p>}
//                             {responseMessage && <p className='text-green-500 text-center'>{responseMessage}</p>} {/* عرض رسالة الاستجابة */}
//                             <form className='form' onSubmit={formik.handleSubmit}>
//                                 <div className="input-box">
//                                     <label htmlFor="" className='text-white label'>الاسم بالكامل</label>
//                                     <input
//                                         type="text"
//                                         placeholder='ادخل الاسم بالكامل'
//                                         name='FullName'
//                                         onChange={formik.handleChange}
//                                         value={formik.values.FullName}
//                                         onBlur={formik.handleBlur}
//                                     />
//                                     {formik.touched.FullName && formik.errors.FullName ? (
//                                         <p className='text-red-500'>{formik.errors.FullName}</p>
//                                     ) : null}
//                                 </div>

//                                 <div className="input-box">
//                                     <label htmlFor="" className='text-white'>البريد الالكتروني</label>
//                                     <input
//                                         type="text"
//                                         placeholder='ادخل البريد الالكتروني'
//                                         name='Email'
//                                         onChange={formik.handleChange}
//                                         value={formik.values.Email}
//                                         onBlur={formik.handleBlur}
//                                     />
//                                     {formik.touched.Email && formik.errors.Email ? (
//                                         <p className='text-red-500'>{formik.errors.Email}</p>
//                                     ) : null}
//                                 </div>

//                                 <div className="column">
//                                     <div className="input-box">
//                                         <label className='text-white'>رقمك</label>
//                                         <input
//                                             type="text"
//                                             placeholder='ادخل رقمك'
//                                             name='phone'
//                                             onChange={formik.handleChange}
//                                             value={formik.values.phone}
//                                             onBlur={formik.handleBlur}
//                                         />
//                                         {formik.touched.phone && formik.errors.phone ? (
//                                             <p className='text-red-500'>{formik.errors.phone}</p>
//                                         ) : null}
//                                     </div>

//                                     <div className="input-box">
//                                         <label className='text-white'>رقم ولي الامر</label>
//                                         <input
//                                             type="text"
//                                             placeholder='ادخل رقم ولي الامر'
//                                             name='phone2'
//                                             onChange={formik.handleChange}
//                                             value={formik.values.phone2}
//                                             onBlur={formik.handleBlur}
//                                         />
//                                         {formik.touched.phone2 && formik.errors.phone2 ? (
//                                             <p className='text-red-500'>{formik.errors.phone2}</p>
//                                         ) : null}
//                                     </div>
//                                 </div>

//                                 <div className='flex items-center justify-center'>
//                                     <select
//                                         name="selectgrd"
//                                         className='mt-4 text-center'
//                                         onChange={formik.handleChange}
//                                         value={formik.values.selectgrd}
//                                         onBlur={formik.handleBlur}
//                                     >
//                                         <option value="" disabled>
//                                             اختر الصف الدراسي
//                                         </option>
//                                         <option value="grd-1">الصف الاول الثانوي</option>
//                                         <option value="grd-2">الصف الثاني الثانوي</option>
//                                         <option value="grd-3">الصف الثالث الثانوي</option>
//                                     </select>
//                                     {formik.touched.selectgrd && formik.errors.selectgrd ? (
//                                         <p className='text-red-500'>{formik.errors.selectgrd}</p>
//                                     ) : null}
//                                 </div>

//                                 <button type='submit' className='btn-send'>ارسال</button>
//                             </form>
//                         </>
//                     )}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Uniform;

