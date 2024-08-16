
//Append your firebase configuaration
const firebaseConfig = {
    //Firebase config
  };
firebase.initializeApp(firebaseConfig);

let contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    let userName = elementValues('name');
    let age = elementValues('age');
    let weight = elementValues('weight');
    let mobileNumber = elementValues('mobileNo');
    let focus = elementValues('focus');
    let gender = elementValues('gender');
    console.log(userName,age,weight,mobileNumber,focus,gender);

    saveData(userName,age,weight,mobileNumber,focus,gender);
}

const saveData = (userName,age,weight,mobileNumber,focus,gender) => {
    let newContactForm = contactFormDB.push();
    newContactForm.set({
        name :userName,
        age:age,
        weight:weight,
        mobileNumber:mobileNumber,
        focus:focus,
        gender:gender,
    })
}

const elementValues = (id) =>{
    return document.getElementById(id).value;
}