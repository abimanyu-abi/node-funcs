const fs =require("fs");

//reading files
fs.readFile('./docs/blogs.txt',(err,data)=>{
         if(err){
            console.log(err);
         }
         console.log(data.toString());
})

console.log("last line");

//write files

fs.writeFile("./docs/blogs.txt","hello world",()=>{
    console.log("files is written");
})

//directories 
if(!fs.existsSync("./asserts")){
    fs.mkdir("./asserts",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder is created");
    })

}
else{
    fs.rmdir("./asserts",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted")
    })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink("./docs/deleteme.txt",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("files deleted");
    })
}

