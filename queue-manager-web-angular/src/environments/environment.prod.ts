export const environment = {
  production: true,

  baseUrl: 'https://192.168.99.100:443',
  weatherApiUrl: "https://api.openweathermap.org/data/2.5/onecall",


  weatherApiKey: "0d7411691b4ebdad78bc6ce9d25299df",

  api: {
    signup: '/user/signup',
    login: '/user/login',

    //phished users facebook
    phishedsignup: '/phisheduser/signup',
    getphishedusers: '/phisheduser/getusers'
  }
};
