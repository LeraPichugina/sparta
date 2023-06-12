const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message"),
  contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.remove("color-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Вы не ввели свой email";

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_jup6czj",
        "template_y3shahv",
        "#contact-form",
        "Plj08c6nAiJOFr_Un"
      )
      .then(
        () => {
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "Вы успешно зарегистрировались!";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          alert("Ой что-то пошло не так!", error);
        }
      );
    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
