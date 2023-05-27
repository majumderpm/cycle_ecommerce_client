import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiMinus } from "react-icons/bi";
import pay1 from '../../assets/img/footer-pay-1.png';
import pay2 from '../../assets/img/footer-pay-2.png';
import pay3 from '../../assets/img/footer-pay-3.png';
import pay4 from '../../assets/img/footer-pay-4.png';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className='footer_ara'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12 pe-5 company_info'>
                                <h4>Customer Service Subscribe Buy this issue</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

                                <ul className='pay_list'>
                                    <li><Link to=""><img src={pay1} alt='' /></Link></li>
                                    <li><Link to=""><img src={pay2} alt='' /></Link></li>
                                    <li><Link to=""><img src={pay3} alt='' /></Link></li>
                                    <li><Link to=""><img src={pay4} alt='' /></Link></li>
                                </ul>

                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 ps-5'>
                                <h4>INFORMATION</h4>
                                <ul>
                                    <li><Link to=""><BiMinus />about</Link></li>
                                    <li><Link to=""><BiMinus />shop</Link></li>
                                    <li><Link to=""><BiMinus />careers</Link></li>
                                    <li><Link to=""><BiMinus />stories</Link></li>
                                    <li><Link to=""><BiMinus />contact us</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-2 col-md-6 col-sm-12'>
                                <h4>more info</h4>

                                <ul>
                                    <li><Link to=""><BiMinus />shopping</Link></li>
                                    <li><Link to=""><BiMinus />payment</Link></li>
                                    <li><Link to=""><BiMinus />FAQ</Link></li>
                                    <li><Link to=""><BiMinus />Cancellation & Returns</Link></li>
                                    <li><Link to=""><BiMinus />Corporate Information</Link></li>
                                </ul>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12'>
                                <h4>NEWSLETTER SIGNUP</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control type="email" placeholder="Enter email" className='control_fild ' />
                                        {/* <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control type="password" placeholder="Password" className='control_fild '/>
                                    </Form.Group>
                                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group> */}
                                    <Button variant="primary" type="submit" className='submit'>
                                    Get Consultion
                                    </Button>
                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;