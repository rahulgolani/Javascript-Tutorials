console.log("Form Validation");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
let validName = false;
let validEmail = false;
let validPhone = false;
console.log(name);
console.log(email);
console.log(phone);
nameClass = name.getAttribute('class');
//instead of this use classList.add and classList.remove methods
name.addEventListener('blur', () => {
  const regex = /^[a-zA-Z ]+$/;
  let userName = name.value;
  console.log(regex, userName);
  nameField = document.getElementById('nameDiv');
  if (regex.test(userName)) {
    // name.setAttribute('class', nameClass + ` is-valid`);
    name.classList.add('is-valid');
    name.classList.remove('is-invalid');
    validName = true;
    // console.log("it matched");
  } else {
    validName = false;
    // nameClass = name.getAttribute('class');
    name.classList.remove('is-valid');
    name.classList.add('is-invalid');
    // name.setAttribute('class', nameClass + ` is-invalid`);
    // console.log(nameField);
  }
  // console.log(name.getAttribute("class"));
});

email.addEventListener('blur', () => {
  console.log("email is blurred");
  const regex = /^([0-9a-zA-Z\._]+)@([0-9a-zA-Z\._]+)\.([a-zA-Z]){2,7}$/;
  let emailVal = email.value;
  if (regex.test(emailVal)) {
    validEmail = true;
    // name.setAttribute('class', nameClass + ` is-valid`);
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
    // console.log("it matched");
  } else {
    validEmail = false;
    // nameClass = name.getAttribute('class');
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    // name.setAttribute('class', nameClass + ` is-invalid`);
    // console.log(nameField);
  }
  // console.log(name.getAttribute("class"));

});
phone.addEventListener('blur', () => {
  console.log("phone is blurred");
  const regex = /^([0-9]){10}$/;
  let phoneVal = phone.value;
  if (regex.test(phoneVal)) {
    validPhone = true;
    // name.setAttribute('class', nameClass + ` is-valid`);
    phone.classList.add('is-valid');
    phone.classList.remove('is-invalid');
    // console.log("it matched");
  } else {
    validPhone = false;
    // nameClass = name.getAttribute('class');
    phone.classList.remove('is-valid');
    phone.classList.add('is-invalid');
    // name.setAttribute('class', nameClass + ` is-invalid`);
    // console.log(nameField);
  }
  // console.log(name.getAttribute("class"));

});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  message = document.getElementById('message');
  console.log("Click");
  if (validName && validEmail && validPhone) {
    html = `<div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
      <strong>Success!</strong> Your details have been submitted.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
    message.innerHTML = html;
  } else {
    message.innerHTML = "";
  }


});