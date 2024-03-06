const log = require('simple-node-logger').createSimpleLogger();

process
  .on('SIGTERM', shutdown('SIGTERM'))
  .on('SIGINT', shutdown('SIGINT'))

function shutdown(signal) {
    return (err) => {
        console.log(`${ signal }...`);
        process.exit();
    };
}

setInterval(function(){ log.info('Some log') },1000)
