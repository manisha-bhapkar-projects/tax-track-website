import constants from "../constants";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Profile from "../../Pages/Profile/Profile";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import ChangePassword from "../../Pages/ChangePassword/ChangePassword";
import View from "../../Pages/View/View";
import AddNewClient from "../../Pages/AddNewClient/AddNewClient";





export const sideBarRoutes = [
    {
        path: constants.ROUTE.SIDEBAR.DASHBORD,
        component: Dashboard,
        sidebar: true,

    },

    {
        path: constants.ROUTE.SIDEBAR.PROFILE,
        component: Profile,
        sidebar: true,

    },
    {
        path: constants.ROUTE.SIDEBAR.CONTACT_US,
        component: ContactUs,
        sidebar: true,

    },
    {
        path: constants.ROUTE.SIDEBAR.CHANGE_PASSWORD,
        component: ChangePassword,
        sidebar: true,

    },
    {
        path: constants.ROUTE.SIDEBAR.VIEW,
        component: View,
        sidebar: true,

    },
    {
        path: constants.ROUTE.SIDEBAR.ADD_NEW_CLIENT,
        component: AddNewClient,
        sidebar: true,

    },





]