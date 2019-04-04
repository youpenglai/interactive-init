const config = require('./public/plinteractive.json');

module.exports = {
    publicPath: `/app/assets/${config.appId}`
};
