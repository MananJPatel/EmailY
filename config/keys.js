if (process.env.NODE_ENV === 'production') {
    //in production
    module.exports = require('./prod');
}
else {
    //in dev
    module.exports = require('./dev');
}