interface FormValues {
    name: string;
    email: string;
    phone: string;
}

const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name || values.name.length < 1) {
        errors.name = 'Required';
    }

    if (!values.email || values.email.length < 1) {
        errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Enter valid e-mail';
    }

    if (!values.phone) {
        errors.phone = 'Telefon numarası gerekli';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    }
    else if (values.phone.length<14) {
        errors.phone = 'Enter valid phone number';
    }

    return errors;
};

export default validate;
