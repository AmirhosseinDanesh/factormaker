export const factorValidate = (values) => {
    const errors = {};

    if (values.paymentCardNumber.length < 16) {
        errors.paymentCardNumber = "شماره کارت 16 رقم نیست!"
    }




    return errors;
}
