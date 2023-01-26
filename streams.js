const fs = require("fs");

const readStream=fs.createReadStream("./docs/blogs.txt",{encoding:"utf8"});
const writeStream =fs.createWriteStream("./docs/blogs1.txt");

readStream.on("data",(chunk)=>{
    console.log(chunk);
    writeStream.write(chunk);
})

readStream.pipe(writeStream);