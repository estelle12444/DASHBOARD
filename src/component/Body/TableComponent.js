import React from "react";
import { Link } from "react-router-dom";
import { TableContext } from "./ContextComponent";



function CardHeader({ title }) {
    return (
        <div class="card-header" >
            <h4 class="card-title"  >{title}</h4>
            <Link class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></Link>
            <div class="heading-elements">
                <ul class="list-inline mb-0">
                    <li><Link data-action="collapse"><i class="ft-minus"></i></Link></li>
                    <li><Link data-action="reload"><i class="ft-rotate-cw"></i></Link></li>
                    <li><Link data-action="expand"><i class="ft-maximize"></i></Link></li>
                    <li><Link data-action="close"><i class="ft-x"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}
function TableHeader({ items }) {
    return (
        <thead>
            <tr >
                {items.map((item) => {
                    return <th >{item}</th>;
                })}
            </tr>
        </thead>
    )
}

function TableBody({ subItems }) {
    return (
        <tbody>
            {subItems.map((subItem) => {
                return (
                    <tr key={subItem.id}>
                        <td>{subItem.Name}</td>
                        <td>{subItem.Position}</td>
                        <td>{subItem.Office}</td>
                        <td>{subItem.Age}</td>
                        <td>{subItem.Start_date}</td>
                        <td>{subItem.Salary}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}


function Table({ donnee, value }) {
    return (

        <div class="col-md-4 ">
            <section id="scroll-dynamic  ">
                <div class="row ">
                    <div class="col-12  ">
                        <TableContext.Provider>
                            <div class="card  taille">
                                <CardHeader title=" Je suis le titre" />
                                <div class="card-content collapse show  ">
                                    <div class="card-body card-dashboard">

                                        <div class=" card-dashboard">

                                            <table class="table table-striped table-bordered dynamic-height">
                                                <TableHeader items={donnee} />
                                                <TableBody subItems={value} />

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TableContext.Provider>
                    </div>
                </div>
            </section>

        </div>

    );

}

export default Table;