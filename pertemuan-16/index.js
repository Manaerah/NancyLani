//asynchronous

//synchronous -> single thread -> blocking 
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses yang memakan waktu yang lama");
// console.log("proses 4");

//asynchronous JS -> multi tread -> non-blocking
//1. parallel 
setTimeout(()=>{
    console.log ("proses 1");
},5000);
console.log ("proses 2");
setTimeout(()=>{
    console.log ("proses 3");
},3000);
    console.log ("proses 4");