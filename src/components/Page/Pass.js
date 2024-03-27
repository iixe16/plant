import React from 'react';
import './Styel.css';
import { FaUser ,FaLock} from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='wa'>
        <form action="">
            <h1>نسيت كلمة السر؟</h1>
            <h2>ولا يهمك ادخل بريدك الالكتروني</h2>
            <h3>بنرسل لك رابط لإعادة تعيين كلمة المرور الخاصه بك</h3>
            <div className="input-box">
                <input type="text" placeholder=' ادخل البريد الالكتروني'required />
                <FaUser className='icon'/>
            </div>
           
            <button type="submit"><Link to="/Login">استمر</Link></button>
            <div className="register-link">
            <div className="register-link">
                <p>  <Link to="/Login"> العوده لتسجيل الدخول</Link></p>
            </div>
            </div>
        </form>
    </div>
  );
}

export default Login;
