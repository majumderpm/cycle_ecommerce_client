import React, { useContext } from 'react';
// import './Login.scss';
import { BiLogInCircle } from "react-icons/bi";
// import { BiLogOutCircle } from "react-icons/bi";
import loginimg from '../../assets/img/login-img.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authProvider/AuthProvider';

const Register = () => {
    const navigator = useNavigate();
    
    const {createUser} = useContext(authContext);
    const handelSingup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 
        const name = form.name.value; 
         console.log(email, password);

         
        createUser(email, password, name)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigator('/login');
        })
        .catch(err => console.error(err));
    }

    return (
        <>
            <section className='login'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='l_from'>
                                <form onSubmit={handelSingup}>
                                    <h3>Register Here</h3>
                                    <input type="text"  name="name" placeholder="Enter Name" id="username" />
                                    <input type="email"  name="email" placeholder="Email " id="username" />
                                    <input type="password"  name="password" placeholder="Password" id="password" />
                                    <button type="submit" className='submit_btn'><BiLogInCircle/> sing up</button>
                                  
                                    <p>or login with</p>
                                    <div className="social">
                                        <div className="l_ivon go"><FcGoogle/> Google</div>
                                        <div className="l_ivon fb"><FaFacebookF/>  Facebook</div>
                                    </div>
                                    <p>Already have an Account? <Link to='/login'>Login Now</Link></p>
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

export default Register;