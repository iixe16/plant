import React from 'react';
import './Styel.css';
import { FaUser ,FaLock} from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='wa'>
        <form action="">
            <h1>تسجيل الدخول</h1>
            <div className="input-box">
                <input type="text" placeholder='البريد الالكتروني'required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='كلمة السر'required />
                <FaLock className='icon'/>

            </div>
            <div className="register-link">
                <p>  <Link to="/Pass"> نسيت كلمة المرور؟</Link></p>
            </div>
            <button type="submit"><Link to="/Home">تسجيل الدخول</Link></button>
            <div className="register-link">
                <p>ليس لديك حساب؟<Link to="/Singup">انشاء حساب</Link></p>
            </div>
        </form>
    </div>
  );
}

export default Login;
