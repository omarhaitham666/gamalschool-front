import { faArrowLeftLong, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import "./Homestylesheet.css";



function Home() {
  
  const slides = [
    { url: "./images/241119699_1641625112703529_858678295040427675_n.jpg" },
    { url: "./images/241145852_1641624699370237_540227868877421241_n.jpg" },
    { url: "./images/241148083_1641624676036906_5570806721725323771_n.jpg" },
    { url: "./images/240966687_1641621706037203_6680141127474876692_n.jpg" },
    { url: "./images/241143689_1641621299370577_7455268180873316881_n.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-18 px-4 relative group mt-10">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          // style={{ backgroundImage: `url(/images/${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div
          className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}>
          <FontAwesomeIcon icon={faArrowLeftLong} className='rounded-full' />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide} >
          <FontAwesomeIcon icon={faArrowRight}  className='rounded-full'/>
        </div>
      </div>

     

<section>
  <div className="text-center py-6 text-2xl mt-16"> 
    <h5 className='text-gray-400 text-normal font-bold'>من نحن؟</h5>
    <h1 className='text-white text-4xl max-w-lg mx-auto leading-normal font-bold mb-10'>
      اقرأ ماذا نريد ان نقول
    </h1>
    <div className='flex flex-col md:flex-row max-w-5xl gap-6 md:gap-12 mx-auto group px-4  '>

      <div className='bg-white/10 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity'>
        <img src="./images/ceo-midjourney-office.webp" alt="" className='h-20 rounded-full  mx-auto' />
        <h4 className='text-xl font-bold text-white'>السيدة/ سحر  </h4>
        <small className='text-white font-bold'>مديرة المدرسة</small>
        <p className='text-md leading-7 my-3 font-light opacity-50 text-white'>
          "في مدرستنا، نؤمن بأن التعليم ليس مجرد نقل للمعرفة، بل هو بناء للأجيال القادرة على مواجهة تحديات المستقبل بثقة وإبداع. نسعى دائمًا لخلق بيئة تعليمية محفزة تتيح لكل طالب فرصة التألق والتميز."
        </p>
      </div>

      <div className='bg-white/10 p-8  duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity'>
        {/* <img src=".public/images/ceo-midjourney-office.webp" alt="" className='h-20 rounded-full    mx-auto' /> */}
        <img src="../../../public/images/27.jpg" alt="" className='h-20 rounded-full    mx-auto' />
        <h4 className='text-xl font-bold text-white'>السيدة/ سحر  </h4>
        <small className='text-white font-bold'>مديرة المدرسة</small>
        <p className='text-md leading-7 my-3 font-light opacity-50 text-white'>
          "في مدرستنا، نؤمن بأن التعليم ليس مجرد نقل للمعرفة، بل هو بناء للأجيال القادرة على مواجهة تحديات المستقبل بثقة وإبداع. نسعى دائمًا لخلق بيئة تعليمية محفزة تتيح لكل طالب فرصة التألق والتميز."
        </p>
      </div>

      <div className='bg-white/10 p-8 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity'>
        <img src="./images/ceo-midjourney-office.webp" alt="" className='h-20 rounded-full  mx-auto' />
        <h4 className='text-xl font-bold text-white'>السيدة/ سحر  </h4>
        <small className='text-white font-bold'>مديرة المدرسة</small>
        <p className='text-md leading-7 my-3 font-light opacity-50 text-white'>
          "في مدرستنا، نؤمن بأن التعليم ليس مجرد نقل للمعرفة، بل هو بناء للأجيال القادرة على مواجهة تحديات المستقبل بثقة وإبداع. نسعى دائمًا لخلق بيئة تعليمية محفزة تتيح لكل طالب فرصة التألق والتميز."
        </p>
      </div>

    </div>
  </div>
</section>


{/* <div className=' flex flex-col  mt-28'>
<h2 className=' text-center text-3xl text-gray-400 text-normal font-bold'>
      تاريخنا
    </h2>
  <div className=' bg-white/10 p-10 mt-3'>
    <p className='text-lg leading-7 my-1 font-light opacity-50 text-white'> " تاسست عام 1971م في عهد الرئيس محمد انور السادات  افتتحت يوم الاحد 28 رجب الموافق 18 اكتوبر بحضور السيد الدكتور محمد حافظ غانم وزير التربية والتعليم و السيد الدكتور محمد فؤاد محي الدين محافظ الاسكندرية و السيد الاستاذ فهمي جبر قاسم وكيل وزارة التربية والتعليم و السيد الاستاذ عبدالعزيز عبد الجواد مدير عام التربية والتعليم والسيد الاستاذ محمود عبده المليجي مدير التعليم الثانوي والسيد الاستاذ عبد الكريم محمد المصري ناظر المدرسة"</p>
  </div>
</div> */}

<div className='flex flex-col mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
  <h2 className='text-center text-3xl sm:text-4xl text-gray-400 font-bold'>
    تاريخنا
  </h2>
  <div className='bg-white/10 p-6 sm:p-10 mt-3'>
    <p className='text-base sm:text-lg leading-6 sm:leading-7 font-light opacity-50 text-white'>
      "تاسست عام 1971م في عهد الرئيس محمد انور السادات افتتحت يوم الاحد 28 رجب الموافق 18 اكتوبر بحضور السيد الدكتور محمد حافظ غانم وزير التربية والتعليم و السيد الدكتور محمد فؤاد محي الدين محافظ الاسكندرية و السيد الاستاذ فهمي جبر قاسم وكيل وزارة التربية والتعليم و السيد الاستاذ عبدالعزيز عبد الجواد مدير عام التربية والتعليم والسيد الاستاذ محمود عبده المليجي مدير التعليم الثانوي والسيد الاستاذ عبد الكريم محمد المصري ناظر المدرسة"
    </p>
  </div>
</div>




<div className='flex justify-center items-center mt-28'>
  <div className="container  ">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.4764547966713!2d29.97986287677831!3d31.249726900000034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dacbe7930de7%3A0xaf093baf6606373f!2z2YXYr9ix2LPZhyDYrNmF2KfZhCDYudio2K8g2KfZhNmG2KfYtdixINin2YTYq9in2YbZiNmK2Ycg2KfZhNi52LPZg9ix2YrZhyDYqNmG2YrZhg!5e0!3m2!1sar!2seg!4v1725944249617!5m2!1sar!2seg"
    
   className='school-map w-[900px] h-[600px]'
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  </div>
</div>



    </>


  );
}

export default Home;


