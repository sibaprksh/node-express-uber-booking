Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
console.log('current event loop');
