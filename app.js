//

let btn = document.getElementsByClassName("btn");
let displayresult = document.getElementById("display");
let string = "";

Array.from(btn).forEach((element) => {
    element.addEventListener('click', (e) =>{
        //console.log('clicked!!');
        let value = e.target.innerHTML;

        if(value == "="){
            string = eval(string);
            displayresult.value = string;
        }
        else if(value == "C"){
            string = "";
            displayresult.value = "";
        }
        else{
            string = string +value;
            displayresult.value = string;
        }
    })
})