import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Login() {
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
                                <div class="card border-grey border-lighten-3 m-0">
                                    <div class="card-header border-0">
                                        <div class="card-title text-center">
                                            <div class="p-1"><img src={logo} style={{ height: "100px", width: "300px" }} alt="Sah Analytics" /></div>
                                        </div>
                                        <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span>Login with Modern</span>
                                        </h6>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            <form class="form-horizontal form-simple" action="index.html" novalidate>
                                                <fieldset class="form-group position-relative has-icon-left mb-0">
                                                    <input type="text" class="form-control" id="user-name" placeholder="Your Username" required />
                                                    <div class="form-control-position">
                                                        <i class="la la-user"></i>
                                                    </div>
                                                </fieldset>
                                                <fieldset class="form-group position-relative has-icon-left">
                                                    <input type="password" class="form-control" id="user-password" placeholder="Enter Password" required />
                                                    <div class="form-control-position">
                                                        <i class="la la-key"></i>
                                                    </div>
                                                </fieldset>
                                                <div class="form-group row">
                                                    <div class="col-sm-6 col-12 text-center text-sm-left">
                                                        <fieldset>
                                                            <input type="checkbox" id="remember-me" class="chk-remember" />
                                                            <label for="remember-me"> Remember Me</label>
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-sm-6 col-12 text-center text-sm-right"><Link to="recover-password.html" class="card-link">Forgot Password?</Link></div>
                                                </div>
                                                <button type="submit" class="btn btn-warning btn-block"><i class="ft-unlock"></i><Link to="/Liste" class="card-link">Login</Link> </button>

                                            </form>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <div class="">
                                            <p class="float-xl-left text-center m-0"><Link to="/RecoverPassword" class="card-link">Recover
                                                password</Link></p>
                                            <p class="float-xl-right text-center m-0">New to Moden Admin? <Link to="/register" class="card-link">Inscription</Link></p>
                                        </div>
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

export default Login;
