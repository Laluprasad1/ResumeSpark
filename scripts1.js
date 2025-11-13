// Adding new Language field
function addNewLanField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("laField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter language");

  let lanOb = document.getElementById("la");
  let lanAddButtonOb = document.getElementById("laAddButton");

  lanOb.insertBefore(newNode, lanAddButtonOb);
}

// Adding new Education field
function addNewEdField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("edField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter education details");

  let edOb = document.getElementById("ed");
  let edAddButtonOb = document.getElementById("aqAddButton");

  edOb.insertBefore(newNode, edAddButtonOb);
}

// Adding new Title field for Work Experience (optional)
function addNewTiField() {
  let x = document.createElement("input");
  x.classList.add("form-control");
  x.classList.add("tiField");
  x.classList.add("mt-2");
  x.setAttribute("placeholder", "Enter title");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(x, weAddButtonOb);
}

// Adding new Work Experience field
function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter work experience");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// Adding new Skills field
function addNewAQField() {
  let newNode = document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter skill");

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}

// Generating CV
function generateCV() {
  // Name and Job Title
  document.getElementById("nName").innerHTML = document.getElementById("nameField").value;
  document.getElementById("jJob").innerHTML = document.getElementById("jobFiled").value;

  // Contact Information
  document.getElementById("cContact").innerHTML = document.getElementById("contactField").value;
  document.getElementById("gGmail").innerHTML = document.getElementById("gmailFiled").value;
  document.getElementById("nBirthday").innerHTML = document.getElementById("birthdayField").value;
  document.getElementById("fAddress").innerHTML = document.getElementById("addressField").value;

  // Objective
  document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

  // Languages
  let languages = document.getElementsByClassName("laField");
  let lanContent = "";
  for (let e of languages) {
    if (e.value.trim()) lanContent += `<li>${e.value}</li>`;
  }
  document.getElementById("lan").innerHTML = lanContent;

  // Education
  let educationFields = document.getElementsByClassName("edField");
  let eduContent = "";
  for (let e of educationFields) {
    if (e.value.trim()) eduContent += `<li>${e.value}</li>`;
  }
  document.getElementById("edu").innerHTML = eduContent;

  // Work Experience
  let workExperienceFields = document.getElementsByClassName("weField");
  let weContent = "";
  for (let e of workExperienceFields) {
    if (e.value.trim()) weContent += `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = weContent;

  // Skills
  let skillsFields = document.getElementsByClassName("skField");
  let skillsContent = "";
  for (let e of skillsFields) {
    if (e.value.trim()) skillsContent += `<li>${e.value}</li>`;
  }
  document.getElementById("skills").innerHTML = skillsContent;

  // Setting the Image
  let file = document.getElementById("imgField").files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  }

  // Show the CV template
//   document.getElementById("cv-template").classList.remove("d-none");
//   document.getElementById("cv-form").classList.add("d-none");
}

// Print CV
function printCV() {
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("btnN").style.display = "none";
  document.getElementById("wrapper").style.display = "none";
  window.print();
  document.getElementById("cv-form").style.display = "block";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("btnN").style.display = "block";
  document.getElementById("wrapper").style.display = "block";
}
