import React, { useContext, useState } from 'react';
import './login.style.scss';
import './login-responsive.style.scss';
import HOC from '../../HOC/HOC';
import back from '../../assets/bg_login.jpg';
import Breadcrumb from '../../page/Breadcrumb/breadcrumb.page';
import validate from './validateInfo';
import swal from 'sweetalert';
import loginUser from '../../utils/loginUser';
import { UserContext } from '../../context/user.context';
import {Link, useHistory} from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const { userLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    // const [username, setUsername] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        setErrors(validate(email, password ));

        let response;

        response = await loginUser({ email, password });

        if(response){
            const {jwt:token, user} = response.data;
            const newUser = {
                token,
                username: user.username
            };
            userLogin(newUser);
            console.log(newUser);

            swal({
                title: "Good job!",
                text: `chúc mừng bạn đã nhập thông tin thành công`,
                icon: "success",
                button: "Ok",
              });

            history.push('/')
          } else {
            swal({
                title: "Warning!",
                text: `Xin lỗi bạn đã nhập thông tin không thành công`,
                icon: "danger",
                button: "Ok",
              });
          }


          return response;

    }

    return (
        <div className='login'>
            <Breadcrumb breadcrumb='Đăng ký tài khoản'/>
            <div className='container'>
                <div className='login-content'>
                    <div className='login-content__image'>
                        <img src={back} alt="background"/>
                    </div>
                    <div className='login-content__info'>
                        <div className='page-content'>
                        <h2>Đăng Nhập tài khoản</h2>
                           <form onSubmit={handleSubmit}>
                                {/* <div className='form-group'>
                                    <label htmlFor="username">Họ và tên</label>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name='username' className='form-control' placeholder='Họ và tên'/>
                                    {errors.username && <p className="text_eror">{errors.username}</p>}
                               </div> */}

                               <div className='form-group'>
                                    <label htmlFor="email">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name='email' className='form-control' placeholder='Email'/>
                                    {errors.email && <p className="text_eror">{errors.email}</p>}
                               </div>

                               <div className='form-group'>
                                    <label htmlFor="password">Mật khẩu</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='password' className='form-control' placeholder='Mật khẩu'/>
                                    {errors.email && <p className="text_eror">{errors.email}</p>}
                               </div>

                               <button type="submit">ĐĂNG Nhập</button>
                           </form>

                           <p>Bạn chưa có tài khoản, vui lòng đăng kí <Link to='/register' className='link'>tại đây</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginPage = HOC(Login)

export default LoginPage;