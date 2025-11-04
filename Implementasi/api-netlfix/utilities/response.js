function OK(res, statusCode, data, message) {
    res.status(statusCode).json({ isError: false, data, message })
}

function ERR(res, statusCode, message) {
    res.status(statusCode).json({ isError: true, message })
}

module.exports = { OK, ERR }