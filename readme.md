# AWS Simple Email Service Send

### Install
    
    npm i aws-ses-send

### Configure

Ensure you have verified an email and/or domain in the AWS SES console, and `config.json` in your project root.

    {"accessKeyId":"", "secretAccessKey":"", "region":"us-west-1"}

### Usage

```
    var send = require('aws-ses-send')
      , msg = {to:'b@brian.io', from:'no-reply@brian.io', subject:'solid email', body:'srs, nice stuff'}
    
    send(msg, function(err, response) {
        if(err) {
            console.error(err) 
        }
        else {
            console.log(response)
        }
    })
```
