import React from 'react';
import { FaUser ,FaLock} from "react-icons/fa6";
import './Styel.css';
import { Link } from 'react-router-dom';
const Singup= () => {
  return (
    <div className='wa'>
        <form action="">
            <h1>انشاء حساب</h1>
            <div className="input-box">
                <input type="text" placeholder='الاسم'required />
                <FaUser className='icon'/>
               <p>الاسم باللغه العربيه  فقط,بين 2-30 حرف,  </p>
            </div>
            <div className="input-box">
                <input type="text" placeholder='البريد الالكتروني'required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='كلمة السر'required />
                <FaLock className='icon'/>

            </div>
            <div className="input-box">
                <input type="password" placeholder='تاكيد كلمة السر'required />
                <FaLock className='icon'/>

            </div>
            <div ul class="custom-list">
            <ul class="custom-list">
  <li>تكون باللغة الإنجليزية فقط (بين 8 و16 حرفًا أو رقمًا).</li>
  <li>تحتوي على حرف كبير وحرف صغير باللغة الإنجليزي</li>
  <li>يحتوي على رقم ورمز خاص على الأقل.</li>
  <li> الرموز المسموح بها فقط(#و%)</li>

</ul>
            </div>
            <button type="submit"><Link to="/Home">انشاءحساب</Link></button>
            <div className="register-link">
                <p> لديك حساب بالفعل؟<Link to="/Login">تسجيل دخول </Link></p>
            </div>
        </form>
    </div>
  );
}

export default Singup;
