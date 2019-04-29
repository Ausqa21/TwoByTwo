// Variables
const btnChnge = document.getElementById("btnChnge"),
      output1 = document.getElementById("output1"),
      input11 = document.getElementById("input11"),
      input12 = document.getElementById("input12"),
      input13 = document.getElementById("input13"),
      error_msg = document.getElementById("error-msg"),
      form1 = document.getElementById("form1");


// Event Listeners
eventListeners();

function eventListeners() {
    // calculate value and display
    btnChnge.addEventListener("click", calculation);
}


// Functions
function calculation() {
    if(input11.value === "" || input12.value === "" || input13.value === "") {
        form1.reset();
        return;
    }
    if(parseInt(input13.value) < 1 || parseInt(input13.value) > 365) {
        error_msg.innerHTML = "Inputs can't be less than 1 or greater than 365";
        error_msg.style.backgroundColor = 'red';
        error_msg.style.color = 'black';
        error_msg.style.paddingLeft = '.7rem';
        setTimeout(function() {
            form1.reset();
            error_msg.innerHTML = '';
            error_msg.style.paddingLeft = '0';
        }, 3000);
        return;
    }
    investment = parseFloat(input11.value);
    interest = parseFloat(input12.value);
    days_inv = parseFloat(input13.value);
    value = investment*(1+(interest/100))**days_inv;
    output1.innerHTML = value.toFixed(6);
    output1.style.border = '1px solid grey';
    output1.style.backgroundColor = 'green';
    output1.style.paddingLeft = '1rem';
    output1.style.color = '#fff';
    output1.style.borderRadius = '3px 3px 3px 3px';
}