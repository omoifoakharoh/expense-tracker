// get element reference from html
const element = document.querySelector("#btnAddExpense")
const inputExpense = document.querySelector("#inputExpense")
const showExpense = document.querySelector("#showExpense")

// init value of expense at 0
let totalExpense = 0
// get the heading element
showExpense.textContent = totalExpense

// onButtonClick add inputAmount to totalExpense
function addExpenseToTotal(){
    // read value from inputAmount
   const getExpense = inputExpense.value
    // convert it to number
   const expense = parseInt(getExpense)
   // add that value to totalExpense
   totalExpense = totalExpense + expense
  // display the heading element on the screen by setting element to totalExpense
    showExpense.textContent = totalExpense
}
    

   

    



// add event listener
element.addEventListener("click", addExpenseToTotal, false)