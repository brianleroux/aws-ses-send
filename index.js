var aws = require('aws-sdk')
aws.config.update({region:process.env.REGION})
var ses = new aws.SES // this must come after config :/


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
