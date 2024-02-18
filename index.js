let username;
let usermail;
let subject;
let texteara;

document.getElementById("mybutton").onclick = function () {
  username = document.getElementById("username").value;
  usermail = document.getElementById("userEmail").value;
  subject = document.getElementById("sub").value;
  texteara = document.getElementById("textarea").value;
  console.log(
    "your name is ",
    username,
    "\n",
    "and ur email is ",
    usermail,
    "\n",
    "and the subject is ",
    subject,
    "\n",
    "and ur thoughts are complet ",
    texteara
  );

  alert("thank you ur forme has been seend ");
};
