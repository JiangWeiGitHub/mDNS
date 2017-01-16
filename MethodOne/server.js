var mdns = require('multicast-dns')()

mdns.on('query', function(query) {

  if (query.questions[0] && query.questions[0].name.indexOf('hahaha') != -1) {
  
    console.log(query)
    
    mdns.respond(
      {
        answers:
        [
          {
            name: 'hahaha-hehehe',
            type: 'A',
            ttl: 300,
            data: '192.168.5.213'
          }
        ]
      }
    )
  }
})

//mdns.destroy()

