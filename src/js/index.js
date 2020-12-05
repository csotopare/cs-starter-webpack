function html() {
   if (process.env.NODE_ENV === 'development') {
      require('../index.html');
   }
}

export {
   html
};
