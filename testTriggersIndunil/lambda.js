exports.handler = function(event, context, callback) {
      if (event) {
callback(event);}
    callback(null, {"message": "Successfully executed"});
}