// var mdns = require('multicast-dns')()

// mdns.on('warning', function (err) {
//   console.log(err.stack)
// })

// mdns.on('query', function (query) {
//   query.questions.forEach(function (q) {
//     if (q.type === 'PTR' && q.name === '_http._tcp.local') {
    
//       // console.log('got a query packet:', q)
      
//       mdns.respond({
        
//         //questions: [{
//         //name: '_http._tcp.local',
//         //type: 'PTR',
//         //class: 1
//         //}],        
        
//         answers: [
//         {
//           name: '_http._tcp.local',
//           type: 'PTR',
//           class: 1,
//           flush: false,
//           ttl: 10,
//           data: 'ABCDEFG._http._tcp.local'
//         },
//         {
//           name: 'ABCDEFG._http._tcp.local',
//           type: 'TXT',
//           class: 1,
//           flush: false,
//           ttl: 10,
//           data: ''
//         },
//         {
//           name: 'ABCDEFG._http._tcp.local',
//           type: 'SRV',
//           class: 1,
//           flush: false,
//           ttl: 10,
//           data: {
//             port:3001,
//             weigth: 0,
//             priority: 0,
//             target: 'ABCDEFGHIJKLMN.local'
//           }
//         },
//         {
//           name: 'ABCDEFGHIJKLMN.local',
//           type: 'AAAA',
//           class: 1,
//           flush: false,
//           ttl: 10,
//           data: 'fe80::20c:29ff:fe62:a86f'
//         },
//         {
//           name: 'ABCDEFGHIJKLMN.local',
//           type: 'A',
//           class: 1,
//           flush: false,
//           ttl: 10,
//           data: '192.168.5.111'
//         }
//       ]})
//     }
//   })
// })


var mdns = require('multicast-dns')()

mdns.on('warning', function (err) {
  console.log(err.stack)
})

mdns.query(
{
  questions: 
  [
    {
      name: 'ABCDEFG._http._tcp.local',
      type: 'ANY',
      class: 1
    }
  ],
  answers: [],
  authorities: 
  [
    {
      name: 'ABCDEFG._http._tcp.local',
      type: 'SRV',
      class: 1,
      ttl: 120,
      flush: false,
      data: 
      {
        port: 9999,
        weigth: 0,
        priority: 0,
        target: 'ABCDEFGHIJKLMN.local'        
      }
    },
    {
      name: 'ABCDEFG._http._tcp.local',
      type: 'TXT',
      class: 1,
      ttl: 4500,
      flush: false,
      data: 0x0
    }
  ],
  additionals: []
})

// mdns.query({
//   questions: [{
//     name: '_http._tcp.local',
//     type: 'PTR'
//   }],
//   answers: [],
//   authorities: 
//   [
//     {
//       name: '_http._tcp.local',
//       type: 'PTR',
//       // class: 1,
//       // ttl: 4500,
//       // flush: false,
//       data: 'ABCDEFG._http._tcp.local'
//     }
//   ],
//   additionals: []  
// })

// mdns.query({
//   questions: [{
//     name: '_services._dns-sd._udp.local',
//     type: 'PTR'
//   }],
//   answers: [],
//   authorities: 
//   [
//     {
//       name: '_services._dns-sd._udp.local',
//       type: 'PTR',
//       // class: 1,
//       // ttl: 4500,
//       // flush: false,
//       data: '_http._tcp.local'
//     }
//   ],
//   additionals: []  
// })

// mdns.query({
//   questions: [{
//     name: '_http._tcp.local',
//     type: 'PTR'
//   }],
//   answers: [],
//   authorities: 
//   [
//     {
//       name: '_http._tcp.local',
//       type: 'PTR',
//       // class: 1,
//       // ttl: 4500,
//       // flush: false,
//       data: 'ABCDEFG._http._tcp.local'
//     }
//   ],
//   additionals: []  
// })


mdns.respond({
        
        questions: [],        
        
  answers: 
   [ { name: 'ABCDEFG._http._tcp.local',
       type: 'TXT',
       class: 1,
       ttl: 0,
       flush: true,
       data: 0x0 },
     { name: '_http._tcp.local',
       type: 'PTR',
       class: 1,
       ttl: 0,
       flush: false,
       data: 'ABCDEFG._http._tcp.local' },
     { name: 'ABCDEFG._http._tcp.local',
       type: 'SRV',
       class: 1,
       ttl: 0,
       flush: true,
       data: 
       {
         port: 9999,
         weigth: 0,
         priority: 0,
         target: 'ABCDEFGHIJKLMN.local'        
       }    
     },
     { name: 'ABCDEFGHIJKLMN.local',
       type: 'AAAA',
       class: 1,
       ttl: 120,
       flush: true,
       data: 'fe80::d529:4ea4:7354:3163' },
     { name: 'ABCDEFGHIJKLMN.local',
       type: 'A',
       class: 1,
       ttl: 120,
       flush: true,
       data: '192.168.1.6' },
     { name: '_services._dns-sd._udp.local',
       type: 'PTR',
       class: 1,
       ttl: 0,
       flush: false,
       data: '_http._tcp.local' } ],
  authorities: [],
  additionals: []
    })


mdns.on('query', function (query) {

console.log('got a query packet:', query)

  query.questions.forEach(function (q) {
    if (q.type === 'PTR' && q.name === '_http._tcp.local') {
    
      console.log('got a query packet:', q)
      
  //     mdns.respond({
        
  //       questions: [],        
        
  // answers: 
  //  [ { name: 'ABCDEFG._http._tcp.local',
  //      type: 'TXT',
  //      class: 1,
  //      ttl: 0,
  //      flush: true,
  //      data: '' },
  //    { name: '_http._tcp.local',
  //      type: 'PTR',
  //      class: 1,
  //      ttl: 0,
  //      flush: false,
  //      data: 'ABCDEFG._http._tcp.local' },
  //    { name: 'ABCDEFG._http._tcp.local',
  //      type: 'SRV',
  //      class: 1,
  //      ttl: 0,
  //      flush: true,
  //      data: 
  //      {
  //        port: 9999,
  //        weigth: 0,
  //        priority: 0,
  //        target: 'ABCDEFGHIJKLMN.local'        
  //      }    
  //    },
  //    { name: 'ABCDEFGHIJKLMN.local',
  //      type: 'AAAA',
  //      class: 1,
  //      ttl: 120,
  //      flush: true,
  //      data: 'fe80::d529:4ea4:7354:3163' },
  //    { name: 'ABCDEFGHIJKLMN.local',
  //      type: 'A',
  //      class: 1,
  //      ttl: 120,
  //      flush: true,
  //      data: '192.168.1.6' },
  //    { name: '_services._dns-sd._udp.local',
  //      type: 'PTR',
  //      class: 1,
  //      ttl: 0,
  //      flush: false,
  //      data: '_http._tcp.local' } ],
  // authorities: [],
  // additionals: []
  //   })
    }
  })
})
