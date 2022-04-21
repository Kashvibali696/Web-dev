
let text = document.querySelector("#isValid");

function check(email, password) {
    let flag1 = 0, flag2 = 0;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            for (let j = i + 1; j < email.length; j++) {
                if (email[j] == '.' && j != email.length - 1) {
                    flag1 = 1;
                }
            }
        }
    }

    if (password.length >= 8) {
        flag2 = 1;
    }

    return flag1 && flag2;
}

document.querySelector("#submitButton").addEventListener("click", function (event) {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (check(email, password)) {
        text.innerText = "Valid Email and Password";
    }
    else {
        text.innerText = "Invalid EMail and Password";
    }

    event.preventDefault();
});

