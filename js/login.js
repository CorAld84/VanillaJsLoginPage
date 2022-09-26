class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    };

    validateonSubmit() {
        let self = this;

        this.form.addEventListener('submit', (event) => {

            event.preventDefault();
            var error = 0;

            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`);

                if (self.validateFields(input) == false) {
                    error++;
                }
            });

            if (error == 0) {
                localStorage.setItem("auth", 1);
                this.form.submit();
            }
        });
    };

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );

            return false;

        } else {
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters`,
                        "error"
                    );

                    return false;

                } else {
                    this.setStatus(field, null, "success");
                    
                    return true;
                };
            } else {
                this.setStatus(field, null, "success");
                
                return true;
            };
        };
    };

    setStatus(field, message, sta) {

        const errorMessage = field.parentElement.querySelector(".error-message");


        if (sta == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        };

        if (sta == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        };
    };

};

const form = document.querySelector(".loginForm");

console.log(form);

if (form) {

    const fields = ["username", "password"];

    const validator = new Login(form, fields);
}





