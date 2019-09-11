exports.handler = function(event, context, callback) {
    callback(event);
    callback(null, {"message": "Successfully executed"});
}