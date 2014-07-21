var test = require('tape')
  , send = require('./../index')

var msg = { 
    to:'no-reply@brian.io', 
    from:'b@brian.io',
    subject:'test subject from ses',
    body:'test body from ses'
}

test('sending an email', function(t) {
    send(msg, function(err, data) {
        if (err) t.fail(err)
        t.ok(data, data)
        t.end()
    })
})
