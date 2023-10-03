const formEl = document.querySelector("#form");
const submitter = document.querySelector("#btn-submit");

formEl.addEventListener("submit", (e) => {
  const formData = new FormData(formEl, submitter);
  e.preventDefault();

  for (const [key, value] of formData) {
    const formTextEl = e.target.querySelector("div.form-text");
    const inputEl = e.target.querySelector("#email");

    if (!validateEmail(value)) {
      formTextEl.classList.remove("text-hide");
      inputEl.classList.add("border-danger");
      return;
    }
    formTextEl.classList.add("text-hide");
    inputEl.classList.remove("border-danger");
    openModal();
  }
});

function openModal() {
  const myModal = new bootstrap.Modal(document.getElementById("myModal"), {
    keyboard: false,
  });
  myModal.show();
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
