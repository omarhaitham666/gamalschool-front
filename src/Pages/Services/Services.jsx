import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faChildDress } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './ServiceStyle.css';

function Services() {
  return (
    <>
  <section className="sec-1 ">
    <div className="container">
      <div className="box-1 ">
        <div className="content">
          <div className="icon-1"><FontAwesomeIcon icon={faTabletScreenButton}  /></div>
          <div className="text">
            <h3>حجز التابلت</h3>
            <p> ملحوظة:لو عايز لو انت في اولى ثانوي ولسا مستلمتش التابلت او بعد اولى ثانوي ولسا برضه  مستلمتش التابلت الحق احجز علشان تااخده وبس يا صديقي</p>
            <Link className="link-1" to="/TabletService">احجز الان </Link>
          </div>
        </div>
      </div>
    

    
      <div className="box-2 ">
        <div className="content">
          <div className="icon-2"><FontAwesomeIcon icon={faChildDress}   /></div>
          <div className="text">
            <h3>تقديم للزي </h3>
            <p>ملحوظة : لو انت مستلمتش الزي او ضاع منك ومحتاج زي جديد ادخل دلوقتي يا صديقي قدم  </p>
            <Link className="link-2" to="/UniformService">احجز الان </Link>
          </div>
        </div>
      </div>
    

    
      <div className="box-3 ">
        <div className="content">
          <div className="icon-3 "><FontAwesomeIcon icon={faCircleXmark} /></div>
          <div className="text">
            <h3> للاستفسار </h3>
            <p>ملحوظة : لو في مشكلة تقنية عندك في التابلت تقدر دلوقتي تدخل تستفسر وفي حد هيرد عليك في اسرع وقت ممكن </p>
            <Link className="link-3" to="/ReportService">استفسر الان</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Services;