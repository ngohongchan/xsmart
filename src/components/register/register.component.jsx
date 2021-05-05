import React, { useState } from 'react';
import './register.style.scss';
import './register-responsive.style.scss';
import HOC from '../../HOC/HOC';
import back from '../../assets/bg_login.jpg';
import Breadcrumb from '../../page/Breadcrumb/breadcrumb.page';
import { Link } from 'react-router-dom';
import validate from './validateInfo';
import registerUser from '../../utils/registerUser';
import swal from 'sweetalert';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();

        setErrors(validate( username, email, password ));

        let response;

        response = await registerUser({ username, email, password });

        if(response) {
            const {user: {username}} = response.data;
            swal({
              title: "Good job!",
              text: `chúc mừng ${username} đã nhập thông tin thành công`,
              icon: "success",
              button: "Ok",
            });
        }
        console.log({response});
        return response;
    }

    return (
        <div className='register'>
            <Breadcrumb breadcrumb='Đăng ký tài khoản'/>
            <div className='container'>
                <div className='register-content'>
                    <div className='register-content__image'>
                        <img src={back} alt="background"/>
                    </div>
                    <div className='register-content__info'>
                        <div className='page-content'>
                        <h2>Đăng ký tài khoản</h2>
                           <form onSubmit={handleSubmit}>
                               <div className='form-group'>
                                    <label htmlFor="username">Họ và tên</label>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name='username' className='form-control' placeholder='Họ và tên'/>
                                    {errors.username && <p className="text_eror">{errors.username}</p>}
                               </div>

                               <div className='form-group'>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' className='form-control' placeholder='Email'/>
                                    {errors.email && <p className="text_eror">{errors.email}</p>}
                               </div>

                               <div className='form-group'>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='password' className='form-control' placeholder='Mật khẩu'/>
                                    {errors.password && <p className="text_eror">{errors.password}</p>}
                               </div>

                               <button type="submit">ĐĂNG KÝ</button>
                           </form>
                           <p>Bạn đã có tài khoản, vui lòng đăng nhập <Link to='/login' className='link'>tại đây</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RegisterPage = HOC(Register)

export default RegisterPage;