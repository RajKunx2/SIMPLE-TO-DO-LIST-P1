const form = document.getElementById("listitems");
const input = document.getElementById("name");
const list = document.getElementById("list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (input.value == 0) {
    alert("Please Enter a New Task!");
  } else {
    const value = input.value;
    input.value = "";

    const item = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = value;

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("id","delete")

    item.appendChild(span);
    item.appendChild(button);
    list.appendChild(item);

    button.addEventListener("click", () => {
      list.removeChild(item);
      // .setAttribute("id","details");
    });
  }
});

let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  let list = document.getElementById("list");
  list.remove();
  const newul = document.getElementById("newform");
  const newli = document.createElement("ul");
  newul.appendChild(newli);
  newli.setAttribute("id","list");
  document.theform.submit();
  });

  




