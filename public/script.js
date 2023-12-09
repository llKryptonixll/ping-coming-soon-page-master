const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    handleFormSubmit(e);
});

const emailInput = document.getElementById("email_input");
const error = document.getElementById("error");
emailInput.addEventListener("input", removeErrors);

function handleFormSubmit(e) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!emailInput.value.match(regEx)){
        error.style.display = "block";
        emailInput.style.borderColor = "hsl(354, 100%, 66%)";
        form.style.rowGap = "50px";
        e.preventDefault();
    }
    else{
        currentTarget.submit();
    }
}

function removeErrors() {
    error.style.display = "none";
    form.style.rowGap = "15px";
    emailInput.style.borderColor = "hsl(0, 0%, 59%)";
}