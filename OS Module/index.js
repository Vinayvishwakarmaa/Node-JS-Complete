const os = require("os");

console.log("CPU Architecture",os.arch()) // 64
console.log("Free Memory", os.freemem()); //2247528448
console.log("Total Memory", os.totalmem());//8198307840
console.log("Network Interfaces: ", JSON.stringify(os.networkInterfaces()));
console.log("OS default tempt dir:", os.tmpdir()); 
console.log("OS endianess:", os.endianness()); // LE
console.log("cpus:", os.cpus());
console.log("Hostname:", os.hostname());//DESKTOP-81GU59I
console.log("OS type:", os.type());//Windows_NT
console.log("OS Platform", os.platform());//win32
console.log("OS Release:", os.release());//10.0.19045
console.log("getPriority", os.getPriority());
console.log("loadavg", os.loadavg());
console.log("", os.userInfo());


