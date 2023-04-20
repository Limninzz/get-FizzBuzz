// console.log(getFizzBuzz(15));
function getFizzBuzz(numb)  {
    numb = parseInt(document.getElementById("numb").value);
    // console.log(numb, "HELLO");
    let result = "";
    let fizz=document.getElementById("fizz");
    fizz.style.display="none";
    let buzz=document.getElementById("buzz");
    buzz.style.display="none";
    let fizzbuzz="";
    fizz.style.transform="translateY(0px)";
    buzz.style.transform="translateY(0px)";
    fizz.style.transform="rotate(-360deg)";
    buzz.style.transform="rotate(-360deg)";

    if (numb === undefined || numb === 0 || isNaN(numb)) {
    result = "Invalid input!";
    } else if (numb % 15 === 0) {
    fizz.style.display="block";
    buzz.style.display="block";
    setTimeout(() => {
        fizz.style.transform="translateY(-20px)";
        buzz.style.transform="translateY(-20px)";
    }, 500);
    
    // result = "FIZZBUZZ";
    // console.log(result, numb);
    } else if (numb % 3 === 0) {
    fizz.style.display="block";
    setTimeout(() => {
        fizz.style.transform="rotate(360deg)";
        
    }, 500);
    } else if (numb % 5 === 0) {
    buzz.style.display="block";
    setTimeout(() => {
        buzz.style.transform="rotate(360deg)";
        
    }, 500);
    } else {
    result = numb;
    }

    // let output=document.getElementById("numb").innerHTML = "result is" + result;
    return result;
    // const node = document.createElement("p");
    // const textnode = document.createTextNode(result);
    // node.appendChild(textnode);
    // document.getElementById("hasil").appendChild(node);
};