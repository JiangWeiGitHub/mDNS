var ifaces = require('os').networkInterfaces()
var mdns = require('multicast-dns')()

var getIP = () => {

  var ipAddress = {
    ipv4: '',
    ipv6: ''
  }

  Object.keys(ifaces).forEach( (ifname) => {

    ifaces[ifname].forEach( (iface) => {
      if ('IPv4' === iface.family || iface.internal !== false)
      {
        // skip over internal (i.e. 127.0.0.1)
        ipAddress.ipv4 = iface.address
      }
      else if ('IPv6' === iface.family || iface.internal !== false)
      {
        // skip over internal (i.e. 127.0.0.1)
        ipAddress.ipv6 = iface.address
      }
     
    })
  })

  return ipAddress

}

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
      data: getIP().ipv6.toString()
    },
    {
      name: 'WISNUC.local',
      type: 'A',
      class: 1,
      ttl: 120,
      flush: true,
      data: getIP().ipv4.toString()
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