// asynchronous: not happening at the same time
//node => single threaded
///single threaded: cann perform single operation at a time
//blocking scenario
// time consuming task=> image processing, for loop billion time
//database action, api request

console.log("A");

setTimeout(() => {
  console.log("B");
}, 10000);
setTimeout(() => {
  console.log("D");
}, 3000);

console.log("C");

//event loop
