import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Register() {
    return (
        <div class="app-content content">
            <div class="content-overlay"></div>
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <section class="row flexbox-container">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <div class="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                                <div class="card border-grey border-lighten-3 px-2 py-2 m-0">
                                    <div class="card-header border-0">
                                        <div class="card-title text-center">
                                            <img src={logo} style={{ height: "100px", width: "300px" }} alt="Sah Analytics" />
                                        </div>
                                        <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span>Create Account</span>
                                        </h6>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            <form class="form-horizontal form-simple" action="index.html" novalidate>
                                                <fieldset class="form-group position-relative has-icon-left mb-1">
                                                    <input type="text" class="form-control form-control-lg input-lg" id="user-name" placeholder="User Name" />
                                                    <div class="form-control-position">
                                                        <i class="la la-user"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left mb-1">
                                                    <input type="email" class="form-control form-control-lg input-lg" id="user-email" placeholder="Your Email Address" required />
                                                    <div class="form-control-position">
                                                        <i class="la la-envelope"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="password" class="form-control form-control-lg input-lg" id="user-password" placeholder="Enter Password" required />
                                                    <div class="form-control-position">
                                                        <i class="la la-key"></i>
                                                    </div>
                                                </fieldset>
                                                <button type="submit" class="btn btn-warning btn-lg btn-block"><i class="ft-unlock"></i> Register</button>
                                            </form>
                                        </div>
                                        <p class="text-center">Already have an account ? <Link to="/login" class="card-link">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default Register;
