let container = document.getElementById("root");
container.style.textAlign = "center";

let createForm = document.createElement("form");
createForm.setAttribute("action", "");
createForm.setAttribute("method", "get");
container.appendChild(createForm);

let heading = document.createElement("h2");
heading.innerHTML = "Contact Us";
createForm.appendChild(heading);

let line = document.createElement("hr");
createForm.appendChild(line);

let linebreak = document.createElement("br");
createForm.appendChild(linebreak);

let namelabel = document.createElement("label");
namelabel.classList.add("form-label");
namelabel.innerHTML = "Your Name : ";
createForm.appendChild(namelabel);

let nameelem = document.createElement("input");
nameelem.classList.add("placehold");
nameelem.placeholder = "Firstname";
nameelem.setAttribute("type", "text");
nameelem.setAttribute("name", "dname");
createForm.appendChild(nameelem);

let namebreak = document.createElement("br");
createForm.appendChild(namebreak);

let lastlabel = document.createElement("label");
lastlabel.classList.add("form-label");
lastlabel.innerHTML = "Your Lastname : ";
createForm.appendChild(lastlabel);

let lastname = document.createElement("input");
lastname.classList.add("placehold");
lastname.placeholder = "Lastname";
lastname.setAttribute("type", "text");
lastname.setAttribute("lastname", "dlastname");
createForm.appendChild(lastname);

let emaillabel = document.createElement("label");
emaillabel.classList.add("form-label");
emaillabel.innerHTML = "Your Email : ";
createForm.appendChild(emaillabel);

let emailelem = document.createElement("input");
emailelem.classList.add("placehold");
emailelem.placeholder = "Email";
emailelem.setAttribute("type", "email");
emailelem.setAttribute("name", "demail");
createForm.appendChild(emailelem);

let emailbreak = document.createElement("br");
createForm.appendChild(emailbreak);

let messagelabel = document.createElement("label");
messagelabel.classList.add("form-label");
messagelabel.innerHTML = "Your Message : ";
createForm.appendChild(messagelabel);

let texareaelem = document.createElement("textarea");
texareaelem.classList.add("placehold");
let textPlace = (texareaelem.placeholder = "Your Message");
texareaelem.setAttribute("name", "dmessage");
createForm.appendChild(texareaelem);

let messagebreak = document.createElement("br");
createForm.appendChild(messagebreak);

let submitbtn = document.createElement("button");
submitbtn.setAttribute("id", "myBtn");
submitbtn.textContent = "Submit";
createForm.appendChild(submitbtn);

submitbtn.addEventListener("click", () => {
  var a = nameelem.value;
  var b = lastname.value;
  var c = emailelem.value;
  var d = texareaelem.value;
  if (
    (a == null || a == "",
    b == null || b == "",
    c == null || c == "",
    d == null || d == "")
  ) {
    alert("Please Fill All Required Fields");
    return false;
  }
});
