let button = document.querySelectorAll(".button");
    let calculator_screen = document.querySelector(".calculator_screen");
    let allclear_button = document.querySelector(".allclear_button");
    let delete_button = document.querySelector(".delete_button");
    let equal = document.querySelector(".equal");

    allclear_button.onclick = function(){
        calculator_screen.value = "";
    }
    delete_button.onclick = function(){
        calculator_screen.value = calculator_screen.value.substring(0 , calculator_screen.value.length - 1);
    }
    equal.onclick = function(){
        let answer = eval(calculator_screen.value);

        calculator_screen.value = "= " + answer;
    }

    button.forEach(button => {
        button.onclick = function(){
            if(calculator_screen.value.substring(0 , 1) == "="){
                calculator_screen.value = "";
                calculator_screen.value += button.innerHTML;

            }else{
                calculator_screen.value += button.innerHTML;
            }
        }
    });
