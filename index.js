const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  const captchaResponse = grecaptcha.getResponse()
  if (!captchaResponse.length > 0) {
    //throw new Error("Captcha not complete")
    document.getElementById("errorCaptcha").innerHTML="🛑Captcha not complete🛑";
  } else {

    sendMail(mail);
    //alert("email sent successfully")
    document.getElementById("errorCaptcha").innerHTML="✅Email sent successfully. thks😉";
    form.reset()

  }

});

const sendMail = (mail) => {
  fetch("https://nodemailerapi-dt78.onrender.com/send", {
    method: "POST",
    body: mail,
  }).then((response) => {
    return response.json();

  });
};


var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
  let id = check.checked;

  if (id == true) {
    location.href = "index(en).html"
  } else {
    location.href = "index.html"
  }
}

