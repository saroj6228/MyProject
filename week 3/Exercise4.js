// Using Node.js Core Module (os) for system information
const os = require("os");
const util = require("util");

// Displaying system information
console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + " Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Memory: " + (os.totalmem() / 1e9).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1e9).toFixed(2) + " GB");
console.log("CPU Details: " + util.inspect(os.cpus()));
console.log("Network: " + util.inspect(os.networkInterfaces()));
console.log("Program Ended");
