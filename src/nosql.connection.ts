let mongoose = require('mongoose');

class Database {
    private server = '127.0.0.1:27017'
    private database = 'user'
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(`mongodb://${this.server}/${this.database}`)
            .then(() => {
                // console.log('Database connection successful')
            })
            .catch(err => {
                // console.error('Database connection error')
            })
    }
    _disconnect(){
        mongoose.connection.close()
    }


}

module.exports = new Database()