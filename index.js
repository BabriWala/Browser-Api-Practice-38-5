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

// What it Cookies, Writing in English at Least 5-7 lines

/*
    Cookies are DAta, Stored in small text files, on our computer.
    When a web server has sent a web page to a browser, the connection is shutdown, and the server forgets everything about the users.
    Cookies Were inventend to solve the problem "How to remember information about the user":
    Whaen a user visits a web page, his/her name can be stored in a cookie.
    Next time the user visits the page, the cookie "remembers" his/her name.
    Cookies are saved in name-value pairs lik: username = john
    When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remmeber" infromation about server.
*/