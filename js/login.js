class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    };
};

function validateonSubmit() {
    let self = this;

    this.form.addEventListener('submit', (event) => {

        event.preventDefault();
        var error = 0;

        self.fields.array.forEach(field => {
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

function validateFields() {
    if (field.value.trim() === "") {
        this.setStatus(
            field,
            `${field.previosElementSibling.innerText} cannot be blank`,
            "error"
        );
        return false;
    } else {
        if(field.type == "password") {
            if(field.value.length < 8) {
                
            }
        }
    }
}