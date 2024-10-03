import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

function Uniform() {
    const initValues = {
        FullName: "",
        Email: "",
        phone: "",
        phone2: "",
        code: "",
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
    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: inputValidation,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <section>
                <div className="container-tabservice">
                    <h1 className="text-white text-center main-txt-tab">حجز الزي المدرسي</h1>
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
                                <label className="text-white">رقمك</label>
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
                                <label className="text-white">رقم ولي الامر</label>
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

                      

                        <div className="flex items-center justify-center">
                            <select name="select-grd" id="" className="mt-4 text-center" onChange={formik.handleChange} value={formik.values.selectgrd} onBlur={formik.handleBlur} >
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

                        <button type="submit" className="btn-send">
                            ارسال
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Uniform;
