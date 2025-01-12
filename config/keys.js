if (process.env.NODE_ENV === 'production') {
    // we are in profuction - return the prod set of keys
    module.exports = require('./prod')
} else {
    // we are in dev - retun the dev keys
    module.exports = require('./dev')
}