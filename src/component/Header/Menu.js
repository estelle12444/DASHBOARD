

import React from "react";

function Menu() {
    return (
        <div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true">
        <div class="main-menu-content">
            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li class=" nav-item"><a href="index.html"><i class="la la-home"></i><span class="menu-title" data-i18n="Dashboard Hospital">Dashboard Hospital</span></a>
                </li>
                <li class=" navigation-header"><span data-i18n="Professional">Professional</span><i class="la la-ellipsis-h" data-toggle="tooltip" data-placement="right" data-original-title="Professional"></i>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-edit"></i><span class="menu-title" data-i18n="Appointment">Appointment</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="hospital-doctor-schedule.html"><i></i><span>Doctor Schedule</span></a>
                        </li>
                        <li><a class="menu-item" href="hospital-book-appointment.html"><i></i><span>Book Appointment</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-stethoscope"></i><span class="menu-title" data-i18n="Doctors">Doctors</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="hospital-doctors-list.html"><i></i><span>All Doctors</span></a>
                        </li>
                        <li><a class="menu-item" href="hospital-add-doctor.html"><i></i><span>Add Doctors</span></a>
                        </li>
                        <li><a class="menu-item" href="hospital-doctor-profile.html"><i></i><span>Doctor Profile</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-users"></i><span class="menu-title" data-i18n="Patients">Patients</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="hospital-patients-list.html"><i></i><span>All Patients</span></a>
                        </li>
                        <li><a class="menu-item" href="hospital-add-patient.html"><i></i><span>Add Patients</span></a>
                        </li>
                        <li class="active"><a class="menu-item" href="hospital-patient-profile.html"><i></i><span>Patient Profile</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="hospital-payment-reports.html"><i class="la la-bar-chart"></i><span class="menu-title" data-i18n="Report">Report</span></a>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-dollar"></i><span class="menu-title" data-i18n="Payments">Payments</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="hospital-payments.html"><i></i><span>Payments</span></a>
                        </li>
                        <li><a class="menu-item" href="hospital-add-payments.html"><i></i><span>Add Payments</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-clipboard"></i><span class="menu-title" data-i18n="Invoice">Invoice</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="invoice-summary.html"><i></i><span data-i18n="Invoice Summary">Invoice Summary</span></a>
                        </li>
                        <li><a class="menu-item" href="invoice-template.html"><i></i><span data-i18n="Invoice Template">Invoice Template</span></a>
                        </li>
                        <li><a class="menu-item" href="invoice-list.html"><i></i><span data-i18n="Invoice List">Invoice List</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" navigation-header"><span data-i18n="Apps">Apps</span><i class="la la-ellipsis-h" data-toggle="tooltip" data-placement="right" data-original-title="Apps"></i>
                </li>
                <li class=" nav-item"><a href="full-calender-basic.html"><i class="la la-calendar"></i><span class="menu-title" data-i18n="Calendar">Calendar</span></a>
                </li>
                <li class=" nav-item"><a href="app-email.html"><i class="la la-envelope"></i><span class="menu-title" data-i18n="Inbox">Inbox</span></a>
                </li>
                <li class=" nav-item"><a href="app-chat.html"><i class="la la-comments"></i><span class="menu-title" data-i18n="Chat">Chat</span></a>
                </li>
                <li class=" nav-item"><a href="app-kanban.html"><i class="la la-file-text"></i><span class="menu-title" data-i18n="Kanban">Kanban</span></a>
                </li>
                <li class=" navigation-header"><span data-i18n="User Interface">User Interface</span><i class="la la-ellipsis-h" data-toggle="tooltip" data-placement="right" data-original-title="User Interface"></i>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-server"></i><span class="menu-title" data-i18n="Components">Components</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="component-alerts.html"><i></i><span data-i18n="Alerts">Alerts</span></a>
                        </li>
                        <li><a class="menu-item" href="component-callout.html"><i></i><span data-i18n="Callout">Callout</span></a>
                        </li>
                        <li><a class="menu-item" href="#"><i></i><span data-i18n="Buttons">Buttons</span></a>
                            <ul class="menu-content">
                                <li><a class="menu-item" href="component-buttons-basic.html"><i></i><span data-i18n="Basic Buttons">Basic Buttons</span></a>
                                </li>
                                <li><a class="menu-item" href="component-buttons-extended.html"><i></i><span data-i18n="Extended Buttons">Extended Buttons</span></a>
                                </li>
                            </ul>
                        </li>
                        <li><a class="menu-item" href="component-carousel.html"><i></i><span data-i18n="Carousel">Carousel</span></a>
                        </li>
                        <li><a class="menu-item" href="component-collapse.html"><i></i><span data-i18n="Collapse">Collapse</span></a>
                        </li>
                        <li><a class="menu-item" href="component-dropdowns.html"><i></i><span data-i18n="Dropdowns">Dropdowns</span></a>
                        </li>
                        <li><a class="menu-item" href="component-list-group.html"><i></i><span data-i18n="List Group">List Group</span></a>
                        </li>
                        <li><a class="menu-item" href="component-modals.html"><i></i><span data-i18n="Modals">Modals</span></a>
                        </li>
                        <li><a class="menu-item" href="component-pagination.html"><i></i><span data-i18n="Pagination">Pagination</span></a>
                        </li>
                        <li><a class="menu-item" href="component-navs-component.html"><i></i><span data-i18n="Navs Component">Navs Component</span></a>
                        </li>
                        <li><a class="menu-item" href="component-tabs-component.html"><i></i><span data-i18n="Tabs Component">Tabs Component</span></a>
                        </li>
                        <li><a class="menu-item" href="component-pills-component.html"><i></i><span data-i18n="Pills Component">Pills Component</span></a>
                        </li>
                        <li><a class="menu-item" href="component-tooltips.html"><i></i><span data-i18n="Tooltips">Tooltips</span></a>
                        </li>
                        <li><a class="menu-item" href="component-popovers.html"><i></i><span data-i18n="Popovers">Popovers</span></a>
                        </li>
                        <li><a class="menu-item" href="component-badges.html"><i></i><span data-i18n="Badges">Badges</span></a>
                        </li>
                        <li><a class="menu-item" href="component-pill-badges.html"><i></i><span>Pill Badges</span></a>
                        </li>
                        <li><a class="menu-item" href="component-progress.html"><i></i><span data-i18n="Progress">Progress</span></a>
                        </li>
                        <li><a class="menu-item" href="component-media-objects.html"><i></i><span data-i18n="Media Objects">Media Objects</span></a>
                        </li>
                        <li><a class="menu-item" href="component-scrollable.html"><i></i><span data-i18n="Scrollable">Scrollable</span></a>
                        </li>
                        <li><a class="menu-item" href="component-spinners.html"><i></i><span data-i18n="Spinners">Spinners</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-unlock"></i><span class="menu-title" data-i18n="Authentication">Authentication</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="login-with-bg-image.html" target="_blank"><i></i><span>Login</span></a>
                        </li>
                        <li><a class="menu-item" href="register-with-bg-image.html" target="_blank"><i></i><span>SignIn</span></a>
                        </li>
                        <li><a class="menu-item" href="recover-password.html" target="_blank"><i></i><span>Forgot Password</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-file-text"></i><span class="menu-title" data-i18n="Form Layouts">Form Layouts</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="form-layout-basic.html"><i></i><span data-i18n="Basic Forms">Basic Forms</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-horizontal.html"><i></i><span data-i18n="Horizontal Forms">Horizontal Forms</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-hidden-labels.html"><i></i><span data-i18n="Hidden Labels">Hidden Labels</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-form-actions.html"><i></i><span data-i18n="Form Actions">Form Actions</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-row-separator.html"><i></i><span data-i18n="Row Separator">Row Separator</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-bordered.html"><i></i><span data-i18n="Bordered">Bordered</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-striped-rows.html"><i></i><span data-i18n="Striped Rows">Striped Rows</span></a>
                        </li>
                        <li><a class="menu-item" href="form-layout-striped-labels.html"><i></i><span data-i18n="Striped Labels">Striped Labels</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-paste"></i><span class="menu-title" data-i18n="Form Wizard">Form Wizard</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="form-wizard-circle-style.html"><i></i><span data-i18n="Circle Style">Circle Style</span></a>
                        </li>
                        <li><a class="menu-item" href="form-wizard-notification-style.html"><i></i><span data-i18n="Notification Style">Notification Style</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-table"></i><span class="menu-title" data-i18n="Bootstrap Tables">Bootstrap Tables</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="table-basic.html"><i></i><span data-i18n="Basic Tables">Basic Tables</span></a>
                        </li>
                        <li><a class="menu-item" href="table-border.html"><i></i><span data-i18n="Table Border">Table Border</span></a>
                        </li>
                        <li><a class="menu-item" href="table-sizing.html"><i></i><span data-i18n="Table Sizing">Table Sizing</span></a>
                        </li>
                        <li><a class="menu-item" href="table-styling.html"><i></i><span data-i18n="Table Styling">Table Styling</span></a>
                        </li>
                        <li><a class="menu-item" href="table-components.html"><i></i><span data-i18n="Table Components">Table Components</span></a>
                        </li>
                    </ul>
                </li>
                <li class=" nav-item"><a href="#"><i class="la la-area-chart"></i><span class="menu-title" data-i18n="Chartjs">Chartjs</span></a>
                    <ul class="menu-content">
                        <li><a class="menu-item" href="chartjs-line-charts.html"><i></i><span data-i18n="Line charts">Line charts</span></a>
                        </li>
                        <li><a class="menu-item" href="chartjs-bar-charts.html"><i></i><span data-i18n="Bar charts">Bar charts</span></a>
                        </li>
                        <li><a class="menu-item" href="chartjs-pie-doughnut-charts.html"><i></i><span data-i18n="Pie &amp; Doughnut charts">Pie &amp; Doughnut charts</span></a>
                        </li>
                        <li><a class="menu-item" href="chartjs-scatter-charts.html"><i></i><span data-i18n="Scatter charts">Scatter charts</span></a>
                        </li>
                        <li><a class="menu-item" href="chartjs-polar-radar-charts.html"><i></i><span data-i18n="Polar &amp; Radar charts">Polar &amp; Radar charts</span></a>
                        </li>
                        <li><a class="menu-item" href="chartjs-advance-charts.html"><i></i><span data-i18n="Advance charts">Advance charts</span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Menu;