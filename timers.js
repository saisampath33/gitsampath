//set timeout
const delayedFunction = () => {
    console.log('timeout by 2s');
}
//setinterval
let inter = setInterval(delayedFunction,1000);

setTimeout(()=>{
    clearInterval(inter);
}, 3000);