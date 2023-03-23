import React from "react";
import vaccination from "../../vaccination.png";
import covid from "../../covid.png";
import tourisme from "../../tourisme.png";
import { Link } from "react-router-dom";

function Liste() {
    return (
        <div class="app-content content">

            <div class="content-wrapper-center">
                <div class="content-header row ">
                    <div class="content-header-center col-md-6 col-sm-12 mb-2 breadcrumb-new">
                        <h4 style={{ float: "right" }}> Hi Pascale, Quelle app recherchez vous?</h4>

                    </div>

                </div>
                <div class="content-detached content-right">
                    <div class="content-body ">
                        <div class="product-shop ">
                            <section class="row">
                                <div class="col-xl-6 col-lg-6 col-md-9 col-sm-11">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="bug-list-search">
                                                <div class="bug-list-search-content">
                                                    <div class="sidebar-toggle d-block d-lg-none"><i class="ft-menu font-large-1"></i></div>
                                                    <form action="#">
                                                        <div class="position-relative">
                                                            <input type="search" id="search-contacts" class="form-control" placeholder="Search contacts..." />
                                                            <div class="form-control-position">
                                                                <i class="la la-search text-size-base text-muted la-rotate-270"></i>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div class="row match-height">
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                    <div class="card pull-up">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <Link to="/Tracetube">
                                                    <div class="product-img d-flex align-items-center">

                                                        <img class="img-fluid mb-1" src={covid} alt="Card image cap" />
                                                    </div>
                                                    <h4 class="product-title " style={{ textAlign: "center" }}>TRACETUBE</h4>
                                                    <div class="price-reviews">

                                                        <span class="ratings float-right"></span>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                    <div class="card pull-up">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <Link to="/Vaccination">
                                                    <div class="product-img d-flex align-items-center">
                                                        <img class="img-fluid mb-1" src={vaccination} alt="Card image cap" />
                                                    </div>
                                                    <h4 class="product-title " style={{ textAlign: "center" }}>VACCINATION</h4>
                                                    <div class="price-reviews">

                                                        <span class="ratings float-right"></span>
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <div class="card pull-up">
                                        <div class="card-content">
                                            <div class="card-body">
                                                <a href="ecommerce-product-detail.html">
                                                    <div class="product-img d-flex align-items-center">
                                                        <img class="img-fluid mb-1" src={tourisme} alt="Card image cap" />
                                                    </div>
                                                    <h4 class="product-title " style={{ textAlign: "center" }}>TOURISME</h4>

                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Liste;
