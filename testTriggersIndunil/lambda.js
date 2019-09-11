let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    if (event) {
        callback(event);
    }
    sns.subscribe({
        Protocol: 'https',
        Endpoint: 'https://mf4e09unvf.execute-api.eu-west-1.amazonaws.com/Test/qa/indu	',
        TopicArn: 'arn:aws:sns:eu-west-1:318300609668:i'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}