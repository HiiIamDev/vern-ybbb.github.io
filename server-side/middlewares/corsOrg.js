const cors = require('cors')
require('express')

function corsOrigin () {
    const option = {
        'methods' : 'GET, POST'
    }

    return cors(option)
}

module.exports = corsOrigin