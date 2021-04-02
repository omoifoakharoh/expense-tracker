// get element reference from html
const element = document.querySelector("#btnAddExpense");
const inputExpense = document.querySelector("#inputExpense");
const showExpense = document.querySelector("#showExpense");
const inputDesc = document.querySelector("#inputDesc");
// Get the ref to table
const expenseTableEl = document.querySelector("#expenseTable");

// init value of expense at 0
let totalExpense = 0;
// get the heading element
showExpense.textContent = totalExpense;

// allExpense array to push items into object
const allExpense = [];

// onButtonClick add inputAmount to totalExpense
function addExpenseToTotal(){

  // read input and parse it to allExpense array and then add it to the object
  const expenseItem = {};

    // read value from inputAmount
   const getExpense = inputExpense.value;
   // get the input text
   const textDesc = inputDesc.value;
    // convert it to number
    const expense = parseInt(getExpense);
    // add that value to totalExpense
   // put in object
   expenseItem.desc = textDesc;
   expenseItem.amount = expense;
  

   allExpense.push(expenseItem);
  //  console.table(allExpense);
   
   totalExpense = totalExpense + expense;
   const sometext = `The expense for this month is:${totalExpense} `
  // display the heading element on the screen by setting element to totalExpense
    showExpense.textContent = sometext;

    const allExpenseHTML = allExpense.map(expense => {
      return `<div>${expense.amount} :: ${expense.desc} </div>`
    });

    console.log(allExpenseHTML);

    const joinedAllExpenseHTML = allExpenseHTML.join("");

    expenseTableEl.innerHTML = joinedAllExpenseHTML;
}
 // add event listener
element.addEventListener("click", addExpenseToTotal, false)

