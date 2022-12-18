//TASK1
let num1=document.getElementById("first_value");
let num2=document.getElementById("second_value");
let oper=document.getElementById("operator");
let res_span=document.getElementById("res_calc");

function calculation() {
    const num1_dig=+num1.value;
    const num2_dig=+num2.value;
    switch (oper.value) {
        case "+":
            res_span.textContent = num1_dig + num2_dig;
            break;
        case "-":
            res_span.textContent = num1_dig - num2_dig;
            break;
        case "*":
            res_span.textContent = num1_dig * num2_dig;
            break;
        case "/":
            if (num2_dig===0) {
                res_span.textContent="Divide by 0";
            } else res_span.textContent = num1_dig / num2_dig;
            break;
        default:
            res_span.textContent = "ERROR";
    }
}

//TASK2
let item_input=document.getElementById("item_input");
let sum_item=document.getElementById("sum_item");
let array_result=document.getElementById("array_result");
let arr1 = [];
function AddArray() {
    arr1.push(item_input.value);
    let sum=0;
    for (const arr1Element of arr1) {
        const num_input=+arr1Element;
        sum=sum+num_input;
    }
    sum_item.textContent=sum;
    array_result.textContent=`Array ${JSON.stringify(arr1)}`;
}

//TASK3
let number_input=document.getElementById("number_input");
let reverse_result=document.getElementById("reverse_result");
function reverseNumber() {
    let reverse=+number_input.value;
    let div=reverse%10;
    let reverse_string=""+div;
    let i=(reverse-div)/10;
    while (i>0) {
        div=i%10;
        i=(i-div)/10;
        reverse_string=reverse_string+div;
    }
    reverse_result.textContent=reverse_string;
}