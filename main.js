let inputField = document.getElementById("keypress-input");
let outputField1 = document.getElementById('article1');
let outputField2 = document.getElementById('article2');

inputField.addEventListener("keyup", function (event) {
    outputField1.innerHTML = event.target.value
})

inputField.addEventListener("keyup", function (event) {
    outputField2.innerHTML = event.target.value
})

// ATTEMPTS AT A FOR LOOP TO ELIMINATE TWO OUTPUTFIELD ELEMENTS

// for (i = 0; i <= outputField.length; i++) {
//     outputField.innerHTML = event.target.value
// }

// inputField.addEventListener("keyup", function (event) {
//     for (i = 0; i <= outputField.length; i++) {
//         outputField.innerHTML = event.target.value
//     }
// })