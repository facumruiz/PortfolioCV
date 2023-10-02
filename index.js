const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
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

function idioma(){
    let id = check.checked;

    if(id==true){
        location.href="index(en).html"
    }else{
        location.href="index.html"
    }
}

