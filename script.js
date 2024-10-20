const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value == "") {
    inputbox.classList.add("error");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // "×" symbol
    li.appendChild(span);

    // Remove task when span (×) is clicked
    span.addEventListener("click", function () {
      li.remove();
      data();
    });

    // Toggle line-through and add image when clicked
    li.addEventListener("click", function () {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";

        // Remove image if present
        let img = li.querySelector("img");
        if (img) {
          li.removeChild(img);
        }
      } else {
        li.style.textDecoration = "line-through";

        // Add an image to the <li>
        let img = document.createElement("img");
        img.src = "asessts/checked.png"; // Set the image source
        img.alt = "Image Description";
        img.style.position = "absolute";
        img.style.left = "2px";
        img.style.bottom = "8px";
        img.style.width = "20px"; // Adjust size as needed
        img.style.height = "20px";
        img.style.marginLeft = "10px";

        li.appendChild(img);
      }
      data();
    });
  }
  data();
  inputbox.value = "";
}
function data() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
