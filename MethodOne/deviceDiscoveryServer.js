var mdns = require('multicast-dns')()

mdns.on('warning', function (err) {
  console.log(err.stack)
})

mdns.on('query', function (query) {
  query.questions.forEach(function (q) {
    if (q.type === 'PTR' && q.name === '_http._tcp.local') {
    
      // console.log('got a query packet:', q)
      
      mdns.respond({
        
        //questions: [{
        //name: '_http._tcp.local',
        //type: 'PTR',
        //class: 1
        //}],        
        
        answers: [
        {
          name: '_http._tcp.local',
          type: 'PTR',
          class: 1,
          flush: false,
          ttl: 10,
          data: 'ABCDEFG._http._tcp.local'
        },
        {
          name: 'ABCDEFG._http._tcp.local',
          type: 'TXT',
          class: 1,
          flush: false,
          ttl: 10,
          data: ''
        },
        {
          name: 'ABCDEFG._http._tcp.local',
          type: 'SRV',
          class: 1,
          flush: false,
          ttl: 10,
          data: {
            port:3001,
            weigth: 0,
            priority: 0,
            target: 'ABCDEFGHIJKLMN.local'
          }
        },
        {
          name: 'ABCDEFGHIJKLMN.local',
          type: 'AAAA',
          class: 1,
          flush: false,
          ttl: 10,
          data: 'fe80::20c:29ff:fe62:a86f'
        },
        {
          name: 'ABCDEFGHIJKLMN.local',
          type: 'A',
          class: 1,
          flush: false,
          ttl: 10,
          data: '192.168.5.111'
        }
      ]})
    }
  })
})
