$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 80) {
    //clearHeader, not clearheader - caps H
    $(".cvphone").addClass("fixed-top");
  } else {
    $(".cvphone").removeClass("fixed-top");
  }
}); //missing );

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
    setTimeout(function(){
      document.getElementById("errorCaptcha").innerHTML="";
      grecaptcha.reset()
      form.reset()
  }, 3000);


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




function idioma() {
  let id = check.checked;

  if (id == true) {
    location.href = "index(en).html"
  } else {
    location.href = "index.html"
  }
}

