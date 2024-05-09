class userError extends Error {
    constructor(message, statusCode){
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode; //status code
    }
}
module.exports = { userError }