class ConnectionError extends error {
    constructor (...args) {
        super(...args)
        this.name = ConnectionError
    }
}

class ConfigError extends error {
    constructor (...args) {
        super(...args)
        this.name = ConfigError
    }
}

module.exports = {
    ConfigError,
    ConnectionError
}