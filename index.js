// Some Middle Console Log Will Be Logged after 3.5 Seconds
console.log("First");
const delay = setTimeout(()=>{
    console.log("Second")
}, 3500);
console.log("third");

// take a number from users, using prompt and add 250 to that number
document.getElementById('giveNumber').addEventListener('click', ()=>{
    const number = prompt('Give a Number');
    // console.log(typeof number)
    const convertingNumber = parseInt(number);
    const newNumber = convertingNumber + 250;
    alert(newNumber);
})

