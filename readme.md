# AWS Simple Email Service Send

### Install
    
    npm i aws-ses-send

### Configure

Ensure you have verified an email and/or domain in the AWS SES console, and `~/.aws/credentials` setup. This module also expects a `REGION` environment variable. (Ex. `REGION=us-east-1 node my-script-that-uses-this-module.js`)

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
