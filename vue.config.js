if (process.env.NODE_ENV == 'production') {
  module.exports = { productionSourceMap: false };
}
module.exports = {
  transpileDependencies: ['vuetify'],
};
