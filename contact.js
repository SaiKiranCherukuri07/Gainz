//Add your firebase configuration

const firebaseApp = firebase.initializeApp({
    //Firebase Config
});


const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

const formData = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const weight = document.getElementById("weight").value;
  const mobileNumber = document.getElementById("mobileNo").value;
  const resolution = document.getElementById("focus").value;

  console.log(name,age,gender,weight,mobileNumber,resolution)
  db.collection("Users")
    .add({
      name: name,
      age: age,
      gender: gender,
      weight: weight,
      mobileNumber: mobileNumber,
      resolution: resolution
    })
    .then((response) => {
      console.log("Data.Id:", response.id);
    })
    .catch((err) => {
      console.log(err);
    });
};

let validUser = false;
let validNumber = false;

let userName = document.getElementById("name");
userName.addEventListener("blur", () => {
  let regexName = /^([a-zA-Z\s+{2}]){2,25}$/;
  let userStr = userName.value;
  if (regexName.test(userStr)) {
    console.log("Valid Name");
    validUser = true;
  } else {
    console.log("Error occured");
    validUser = false;
  }
});

let userNumber = document.getElementById("mobileNo");
userNumber.addEventListener("blur", () => {
  let regexMobile = /[0-9]{10}/;
  let mobileStr = userNumber.value;
  if (regexMobile.test(mobileStr)) {
    console.log("Valid Mobile Number");
    validNumber = true;
  } else {
    console.log("Not valid MN");
    validNumber = false;
  }
});

let selectGender = document.getElementById("gender");
selectGender.addEventListener("blur", function () {
  selectGender.style.color = "black";
});

let selectFocus = document.getElementById("focus");
selectFocus.addEventListener("blur", () => {
  selectFocus.style.color = "black";
});

let fullData;
let localData = localStorage.getItem("fullData");

if (localData == null) {
  fullData = [];
} else {
  fullData = JSON.parse(localData);
  console.log(fullData);
}

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (validNumber && validUser) {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let gender = document.getElementById("gender");
    let weight = document.getElementById("weight");
    let mobileNumber = document.getElementById("mobileNo");
    let resolution = document.getElementById("focus");

    //Regular Expressions for every element
    formData();
    let data = {
      name: name.value,
      age: age.value,
      gender: gender.value,
      weight: weight.value,
      mobileNumber: mobileNumber.value,
      resolution: resolution.value,
    };

    fullData.push(data);
    localStorage.setItem("fullData", JSON.stringify(fullData));
  } else {
    console.log("Enter valid Name and valid Mobile Number");
  }
  let contactForm = document.getElementById('contactForm');
  contactForm.reset();
});
