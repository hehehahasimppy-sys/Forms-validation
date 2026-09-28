const form = document.getElementById("registerForm");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const province = document.getElementById("province");
const terms = document.getElementById("terms");

const successMessage = document.getElementById("successMessage");


// ฟังก์ชันแสดง Error
function showError(input, message) {

    input.classList.add("error");
    input.classList.remove("success-input");

    const small = input.parentElement.querySelector("small");

    if (small) {
        small.textContent = message;
    }
}


// ฟังก์ชันแสดงว่าถูกต้อง
function showSuccess(input) {

    input.classList.remove("error");
    input.classList.add("success-input");

    const small = input.parentElement.querySelector("small");

    if (small) {
        small.textContent = "";
    }
}


// ตรวจสอบชื่อ
function checkFirstname() {

    if (firstname.value.trim() === "") {
        showError(firstname, "กรุณากรอกชื่อ");
        return false;
    }

    showSuccess(firstname);
    return true;
}


// ตรวจสอบนามสกุล
function checkLastname() {

    if (lastname.value.trim() === "") {
        showError(lastname, "กรุณากรอกนามสกุล");
        return false;
    }

    showSuccess(lastname);
    return true;
}


// ตรวจสอบ Email
function checkEmail() {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        showError(email, "กรุณากรอกอีเมล");
        return false;
    }

    if (!emailPattern.test(email.value)) {
        showError(email, "รูปแบบอีเมลไม่ถูกต้อง");
        return false;
    }

    showSuccess(email);
    return true;
}


// ตรวจสอบเบอร์โทร
function checkPhone() {

    const phonePattern = /^0[0-9]{9}$/;

    if (phone.value.trim() === "") {
        showError(phone, "กรุณากรอกเบอร์โทรศัพท์");
        return false;
    }

    if (!phonePattern.test(phone.value)) {
        showError(phone, "เบอร์โทรต้องมี 10 หลักและขึ้นต้นด้วย 0");
        return false;
    }

    showSuccess(phone);
    return true;
}


// ตรวจสอบ Username
function checkUsername() {

    if (username.value.trim() === "") {
        showError(username, "กรุณากรอก Username");
        return false;
    }

    if (username.value.length < 4) {
        showError(username, "Username ต้องมีอย่างน้อย 4 ตัวอักษร");
        return false;
    }

    showSuccess(username);
    return true;
}


// ตรวจสอบ Password
function checkPassword() {

    if (password.value === "") {
        showError(password, "กรุณากรอกรหัสผ่าน");
        return false;
    }

    if (password.value.length < 8) {
        showError(password, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
        return false;
    }

    showSuccess(password);
    return true;
}


// ตรวจสอบ Confirm Password
function checkConfirmPassword() {

    if (confirmPassword.value === "") {
        showError(confirmPassword, "กรุณายืนยันรหัสผ่าน");
        return false;
    }

    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, "รหัสผ่านไม่ตรงกัน");
        return false;
    }

    showSuccess(confirmPassword);
    return true;
}


// ตรวจสอบจังหวัด
function checkProvince() {

    if (province.value === "") {
        showError(province, "กรุณาเลือกจังหวัด");
        return false;
    }

    showSuccess(province);
    return true;
}


// เมื่อกดสมัครสมาชิก
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const validFirstname
