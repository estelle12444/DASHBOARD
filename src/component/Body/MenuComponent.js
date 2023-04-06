import React from "react";
import vaccination from "../../vaccination.png";
import covid from "../../covid.png";
import tourisme from "../../tourisme.png";
import { Link } from "react-router-dom";
import { ImageContext, LinkContext } from "./ContextComponent";
import { useContext } from "react";

const Choix = [
    {
        id: "1", title: "tracetube"
    },
    {
        id: "2", title: "vaccincation"
    },
    {
        id: "3", title: "tourisme"
    }
]


function ContentHeader(props) {
    return (
        <div class="content-header row ">
            <div class="content-header-center col-md-6 col-sm-12 mb-2 breadcrumb-new">
                <h4 style={{ float: "right" }}> Hi {props.name}</h4>
                <h4 style={{ float: "right" }}>Quelle application recherchez vous?</h4>
            </div>

        </div>
    )
}

function Search() {
    return (
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
    )
}

function Content(props) {
    return (
        <div>
            <div class="product-img d-flex align-items-center">
                <ContentImage value={props.title}> </ContentImage>
            </div>

            <h4 class="product-title " style={{ textAlign: "center" }}>{props.title}</h4>
            <div class="price-reviews">
                <span class="ratings float-right"></span>
            </div>
        </div>
    )

}

function ContentLinked({ children }) {
    const Link = useContext(LinkContext)

    switch (Link) {
        case 'tracetube':
            return <Link to="/Tracetube"> {children} </Link>
        case 'vaccination':
            return <Link to="/Vaccination"> {children} </Link>
        case 'tourisme':
            return <Link to="/Tourisme"> {children}</Link>
        case 'menu':
        default:
            return <Link to="/Menu"> {children} </Link>
    }
}



function ContentImage({ children }) {
    const image = useContext(ImageContext)

    switch (image) {
        case 'tracetube':
            return <img class="img-fluid mb-1" src={covid} alt="Covid" />
        case 'vaccination':
            return <img class="img-fluid mb-1" src={vaccination} alt="vaccination" />
        case 'tourisme':
            return <img class="img-fluid mb-1" src={tourisme} alt="tourisme" />
        default:
            return <img class="img-fluid mb-1" src={""} alt="menu" />
    }
}

function ContentBody({ CardItems }) {
    return (
        <div>
            {CardItems.map((Item) =>
                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6" key={Item.id}>
                    <div class="card pull-up" >
                        <div class="card-content">
                            <div class="card-body">
                                <ContentLinked value={Item.title}>
                                    <Content title={Item.title} />
                                </ContentLinked>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}



function Menu() {
    return (
        <div class="app-content content">

            <div class="content-wrapper-center">
                <ContentHeader name="Pascale" />
                <div class="content-detached content-right">
                    <div class="content-body ">
                        <div class="product-shop ">
                            <Search />
                            <div class="row match-height">
                                <ContentBody CardItems={Choix} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Menu;
