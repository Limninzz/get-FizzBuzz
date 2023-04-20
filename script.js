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

    if (numb === undefined || numb === 0 || isNaN(numb)) {
    result = "Invalid input!";
    } else if (numb % 15 === 0) {
    fizz.style.display="block";
    buzz.style.display="block";
    // result = "FIZZBUZZ";
    // console.log(result, numb);
    } else if (numb % 3 === 0) {
    fizz.style.display="block";
    result = "FIZZ";
    console.log(result, numb);
    } else if (numb % 5 === 0) {
    buzz = 
    buzz.style.display="block";
    result = "BUZZ";
    console.log(result, numb);
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