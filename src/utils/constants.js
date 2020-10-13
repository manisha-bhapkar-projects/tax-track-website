const API_URL = process.env.REACT_APP_API_URL;

export default {
  STORAGE: {
    AUTH: {
      TOKEN: 'auth-token',
      REF_TOKEN: 'refresh-token',
      ADMIN_DATA: 'admin-data',
    },
  },
  ROUTE: {
    LOGIN: {
      LOGIN: '/',
      FORGOT_PASSWORD: '/forgotPassword',

    },
    SIDEBAR: {
      DASHBORD: '/dashboard',
      PROFILE: '/profile',
      CONTACT_US: '/contactUs',
      CHANGE_PASSWORD: '/profile/changePassword',
      VIEW: '/dashboard/view',
      ADD_NEW_CLIENT: '/dashboard/view/addNewClient',
    },
  }

};
