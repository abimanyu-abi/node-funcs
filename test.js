var test="mrio";
console.log(test);

const great=(test)=>{
    console.log("hello",test);
}


great(test);

great("abi");

//Global object
console.log(global);

setTimeout(()=>{
    console.log("hi this is abimanyu");
    clearInterval(interval);
},3000);


const interval = setInterval(()=>{
    console.log("in the interval")
},1000);


console.log(__dirname);
console.log(__filename);