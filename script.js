//your code here!

const infiList = document.querySelector("#infi-list");

// Add 10 list items to the ol element by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = "List item " + i;
  infiList.appendChild(li);
}

// Add event listener to detect when user has scrolled to the end of the list
infiList.addEventListener("scroll", function() {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    // If user has reached the end of the list, add 2 more list items
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = "List item " + (infiList.childElementCount + i);
      infiList.appendChild(li);
    }
  }
});
