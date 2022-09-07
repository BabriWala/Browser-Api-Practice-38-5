// Some Middle Console Log Will Be Logged after 3.5 Seconds
console.log("First");
const delay = setTimeout(()=>{
    console.log("Second")
}, 3500);
console.log("third");