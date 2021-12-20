/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/app-view/Dashboard.js";
import TableList from "views/app-view/TableList.js";
import TestAntDesign from "./views/app-view/TestAntDesign";
import UserProfileTest from "views/app-view/UserProfileTest";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    renderSidebar: true,
    isExact: false,
  },
  {
    path: "/classroom",
    name: "Classroom",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    renderSidebar: true,
    isExact: true,
  },
  {
    path: "/classroom/:id",
    name: "Classroom",
    icon: "nc-icon nc-notes",
    component: Dashboard,
    layout: "/admin",
    renderSidebar: false,
    isExact: false,
  },
  {
    path: "/antd",
    name: "Test Ant Design",
    icon: "nc-icon nc-bell-55",
    component: TestAntDesign,
    layout: "/admin",
    renderSidebar: true,
    isExact: false,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfileTest,
    layout: "/admin",
    renderSidebar: false,
    isExact: true,
  },
];

// const dashboardRoutes = [
//   {
//     upgrade: true,
//     path: "/upgrade",
//     name: "Upgrade to PRO",
//     icon: "nc-icon nc-alien-33",
//     component: Upgrade,
//     layout: "/admin",
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: "nc-icon nc-chart-pie-35",
//     component: Dashboard,
//     layout: "/admin",
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: "nc-icon nc-circle-09",
//     component: UserProfile,
//     layout: "/admin",
//   },
//   {
//     path: "/table",
//     name: "Table List",
//     icon: "nc-icon nc-notes",
//     component: TableList,
//     layout: "/admin",
//   },
//   {
//     path: "/typography",
//     name: "Typography",
//     icon: "nc-icon nc-paper-2",
//     component: Typography,
//     layout: "/admin",
//   },
//   {
//     path: "/icons",
//     name: "Icons",
//     icon: "nc-icon nc-atom",
//     component: Icons,
//     layout: "/admin",
//   },
//   {
//     path: "/maps",
//     name: "Maps",
//     icon: "nc-icon nc-pin-3",
//     component: Maps,
//     layout: "/admin",
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     icon: "nc-icon nc-bell-55",
//     component: Notifications,
//     layout: "/admin",
//   },
//   {
//     path: "/antd",
//     name: "Test Ant Design",
//     icon: "nc-icon nc-bell-55",
//     component: TestAntDesign,
//     layout: "/admin",
//   },
// ];

export default dashboardRoutes;
