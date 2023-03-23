import React from "react";
import { Link } from "react-router-dom";

function Search() {
    return (
        <div class="page-wrapper">
            <div class="page-content--bge5">
                <div class="container">
                    <div class="login-wrap">
                        <div class="login-content">
                            <h3 class="title-2 m-b-40">Hi Franck, rechercher votre application?</h3>
                            <div class="login-logo">
                                <form class="form-header" action="" method="POST">
                                    <input class="au-input au-input--xl" type="text" name="search" placeholder="Rechercher une application..." />
                                    <button class="au-btn--submit" type="submit">
                                        <i class="zmdi zmdi-search"></i>
                                    </button>
                                </form>
                            </div>
                            <div class="login-form">

                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="au-card m-b-30">
                                                <div class="au-card-inner">
                                                    <h3 class="title-2 m-b-40">TRACETUBE</h3>
                                                    <Link to="/Accueil" class="btn btn-primary">voir plus</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="au-card m-b-30">
                                                <div class="au-card-inner">
                                                    <h3 class="title-2 m-b-40">VACCINATION</h3>
                                                    <a href="#" class="btn btn-primary">Voir plus</a>

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

        </div>
    );
}

export default Search;