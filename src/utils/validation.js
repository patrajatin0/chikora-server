const validatesignupData = (req) => {
    const { firstName, lastName, email, password } = req.body
    if (!firstName || !lastName) {
        throw new Error("Name is not valid")
    } else if (!validator, isEmail(email)) {
        throw new Error("Email is not valid")
    } else if (!validator.isstrongpassword(password)) {
        throw new Error("please enter a strong password")
    }
}
module.exports = validatesignupData