import React, { useContext } from 'react';
import './Login.scss';
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import loginimg from '../../assets/img/login-img.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/authProvider/AuthProvider';

const Login = () => {

    const {login} = useContext(authContext);

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })

        .then(err => console.error(err)); 
    }

    return (
        <>
            <section className='login'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='l_from'>
                                <form onSubmit={handelLogin}>
                                    <h3>Login Here</h3>
                                    <input type="text" name='email' placeholder="Email" id="username" />
                                    <input type="password" name='password' placeholder="Password" id="password" />
                                    <button className='submit_btn'><BiLogInCircle/> Log In</button>
                                    <p>or login with</p>
                                    <div className="social">
                                        <div className="l_ivon go"><FcGoogle/> Google</div>
                                        <div className="l_ivon fb"><FaFacebookF/>  Facebook</div>
                                    </div>
                                    <p>New to buy Cycle? <Link to='/register'>Register Now</Link></p>
                                </form>

                            </div>
                        </div>

                        <div className='col-md-7'>
                            <div className='login_right'>
                                <img src={loginimg} alt='' />
                                {/* <h3>welcome!</h3>
                                <p>enter your deatils and start journey wuth us </p>
                                <a class="submit_btn" href="/">
                                    <BiLogOutCircle />
                                    <span>sing up</span></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Login;