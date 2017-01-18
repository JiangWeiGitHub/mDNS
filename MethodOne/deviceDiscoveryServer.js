var mdns = require('multicast-dns')()

mdns.on('warning', function (err) {
  console.log(err.stack)
})


mdns.query(
{
  questions: 
  [
    {
      name: 'WISNUC._http._tcp.local',
      type: 'ANY',
      class: 1
    }
  ],
  answers: [],
  authorities: 
  [
    {
      name: 'WISNUC._http._tcp.local',
      type: 'SRV',
      class: 1,
      ttl: 120,
      flush: false,
      data: 
      {
        port: 9999,
        weigth: 0,
        priority: 0,
        target: 'WISNUC.local'
      }
    },
    {
      name: 'WISNUC._http._tcp.local',
      type: 'TXT',
      class: 1,
      ttl: 4500,
      flush: false,
      data: ''
    }
  ],
  additionals: []
})

mdns.respond({
        
  questions: [],        
        
  answers: 
  [
    {
      name: 'WISNUC._http._tcp.local',
      type: 'TXT',
      class: 1,
      ttl: 4500,
      flush: true,
      data: ''
    },
    {
      name: '_http._tcp.local',
      type: 'PTR',
      class: 1,
      ttl: 4500,
      flush: false,
      data: 'WISNUC._http._tcp.local'
    },
    {
      name: 'WISNUC._http._tcp.local',
      type: 'SRV',
      class: 1,
      ttl: 120,
      flush: true,
      data: 
      {
        port: 9999,
        weigth: 0,
        priority: 0,
        target: 'WISNUC.local'        
      }    
    },
    {
      name: 'WISNUC.local',
      type: 'AAAA',
      class: 1,
      ttl: 120,
      flush: true,
      data: 'fe80::d529:4ea4:7354:3163'
    },
    {
      name: 'WISNUC.local',
      type: 'A',
      class: 1,
      ttl: 120,
      flush: true,
      data: '192.168.111.111'
    },
    {
      name: '_services._dns-sd._udp.local',
      type: 'PTR',
      class: 1,
      ttl: 4500,
      flush: false,
      data: '_http._tcp.local'
    }
  ],

  authorities: [],

  additionals: []
})