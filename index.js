var aws = new require('aws-sdk')
aws.config.loadFromPath('config.json')
var ses = new aws.SES //({region:'us-east-1'})

module.exports = function sendEmail(message, cb) {

  var to = message.to
    , from = message.from
    , subject = message.subject
    , body = message.body

    var msg = { 
        Source:from, 
        Destination:{ToAddresses:[to]},
        Message: {
            Subject:{Data:subject},
            Body: {Text:{Data:body}}
        }
    }

    ses.sendEmail(msg, function(err, data) {
        if(err)cb(err)
        cb(null, data)
    })
}
