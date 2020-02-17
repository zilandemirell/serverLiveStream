const {NodeMediaServer} = require('node-media-server');


const config = {
  rtmp:  {
    port: 1935,
    chunk_size: 10000,
    gop_cache: false,
    ping: 1,
    ping_timeout: 1
    },
  http: {
    port: 3000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
