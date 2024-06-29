let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
const welcomeEl = document.getElementById("welcome-el");

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Howdy", "James", "🔥");
// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)); // should log 7
console.log(add(9, 102)); // should log 111
// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments

//.                parameters
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);
