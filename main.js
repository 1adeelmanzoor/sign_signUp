let go_sign_up = document.querySelector(".signUp");
let go_login = document.querySelector(".Login");

let sign_up = document.querySelector(".sign_up");
let login = document.querySelector(".login");

let Fname = document.querySelector(".Fname");
let Lname = document.querySelector(".Lname");
let eemail = document.querySelector(".email");
let ppassword = document.querySelector(".pass");
let aage = document.querySelector(".age");
let ccontact = document.querySelector(".contact");

let activeName = document.querySelector("#activeUser");
let logout = document.querySelector("#logout");

go_sign_up?.addEventListener("click", () => {
  window.location = "http://127.0.0.1:5500/sign_up.html";
});

go_login?.addEventListener("click", function () {
  window.location = "http://127.0.0.1:5500/login.html";
});

let users = JSON.parse(localStorage.getItem("users")) || [];

function saveData(e) {
  let fFname = Fname.value;
  let lLname = Lname.value;
  let eeemail = eemail.value;
  let pppassword = ppassword.value;

  let aaage = aage.value;
  let cccontact = ccontact.value;

  if (!eeemail || !pppassword || !fFname || !lLname) {
    alert("Please Fill All Required Fields");
    return false;
  }
  // el.preventDefualt();
  // let obj = {
  //   email: eemail.value,
  //   password: ppassword.value,
  //   FirstName: Fname.value,
  //   LastName: Lname.value,
  //   age: aage.value,
  //   contact: ccontact.value,
  //   g1: () => {
  //     document.querySelector("input[name=gender]:checked");
  //     g1 = g1 ? g1.value : "";
  //     localStorage.setItem("g1", g1);
  //   },
  // };
  // if (!eemail || !ppassword || !Fname || !Lname || aage || ccontact) {
  //   return alert("you need to fill up all the forms.");
  // }
  else {
    users.push({
      email: eeemail,
      password: pppassword,
      FirstName: fFname,
      LastName: lLname,
      age: aaage,
      contact: cccontact,
      todos: [],
      // g1: () => {
      //   document.querySelector("input[name=gender]:checked");
      //   g1 = g1 ? g1.value : "";
      // localStorage.setItem("g1", g1);
      // },
    });

    localStorage.setItem("users", JSON.stringify(users));

    // toast

    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });

    toastList.forEach((toast) => toast.show());
    document.querySelector("form").reset();
    // window.location = "http://127.0.0.1:5500/dashboard.html";
  }
  // document.location = "http://127.0.0.1:5500/dashboard.html";
  e.preventDefault();
}

// toast

// var toastElList = [].slice.call(document.querySelectorAll(".toast"));
// var toastList = toastElList.map(function (toastEl) {
//   return new bootstrap.Toast(toastEl);
// });
// toastList.forEach((toast) => toast.show());

// eemail.focus();
// users = JSON.parse(localStorage.getItem("users"));
//   localStorage.setItem("password", password);
//   localStorage.setItem("FisrtName", FirstName);
//   localStorage.setItem("LastName", LastName);
//   localStorage.setItem("age", age);
//   localStorage.setItem("contact", contact);

//   let g1 = document.querySelector("input[name=gender]:checked");
//   g1 = g1 ? g1.value : "";
//   localStorage.setItem("g1", g1);
// }
//   location.href = "http://127.0.0.1:5500/dashboard.html";

function getData() {
  // let storedEmail = JSON.parse(localStorage.getItem("users"));
  // let storedPw = JSON.parse(localStorage.getItem("users['password']"));
  // console.log(storedEmail);

  // let userName = document.getElementsByClassName("email");
  // let userPw = document.getElementsByClassName("password");

  // if (userName.value === storedEmail && userPw.value === storedPw) {
  //   alert("You are logged in.");
  // } else {
  //   alert("Error on login");
  // }
  // JSON.parse(localStorage.getItem("users")).forEach((element) => {
  //    = element.eemail;
  // });

  const users = JSON.parse(localStorage.getItem("users"));
  const activeUser = users.find((u) => u.email === eemail.value);
  // console.log(activeUser);
  if (activeUser) {
    if (activeUser.password === ppassword.value) {
      // console.log(activeUser);

      window.location.href = "dashboard.html";

      // console.log(localStorage.getItem(userEmail.password));
      alert("login");
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    } else {
      alert("Wrong email or password");
    }
  } else {
    alert("User deos not exist.");
  }
  // document.location = "http://127.0.0.1:5500/dashboard.html";
}

sign_up?.addEventListener("click", saveData);
login?.addEventListener("click", getData);

// var activeUser = JSON.parse(localStorage.getItem("activeUser"));
