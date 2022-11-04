'use strict'
const sendForm = (event) => {
    const user = {
        firstName: event.target.firstname.value,
        middleName: event.target.middlename.value,
        lastName: event.target.lastname.value,
        course: event.target.course.value,
        gender: event.target.gender.value,
        phone: event.target.phone.value,
        phoneNo: event.target.phoneNo.value,
        address: event.target.address.value,
        email: event.target.email.value,
        password: event.target.password.value,
        rePassword: event.target.rePassword.value,
    };
    if (user.password === user.rePassword) {
        document.querySelector('#form').style.display = 'none';
        document.querySelector('#user-info').style.display = 'flex';
        document.querySelector('#user-firstname').innerText = 'Firstname: ' + user.firstName;
        document.querySelector('#user-middlename').innerText = 'Middlename: ' + user.middleName;
        document.querySelector('#user-lastname').innerText = 'Lastname: ' + user.lastName;
        document.querySelector('#user-course').innerText = 'Course: ' + user.course;
        document.querySelector('#user-gender').innerText = 'Gender: ' + user.gender;
        document.querySelector('#user-phone').innerText = 'Phone: ' + user.phone + user.phoneNo;
        document.querySelector('#user-address').innerText = 'Address: ' + user.address;
        document.querySelector('#user-email').innerText = 'E-mail: ' + user.email;

    } else {
        alert('the pass and re-type pass are not equal')
    }
    return false;
}
