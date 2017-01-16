var mdns = require('multicast-dns')()

mdns.on('response', function(response) {
  if (response.answers[0] && response.answers[0].name.indexOf('hahaha') != -1)
  {
    console.log('got a response packet:', response)
  }
})

mdns.query({
  questions:[{
    name: 'hahaha',
    type: 'A'
  }]
})

// mdns.destroy()
