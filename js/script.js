var countDownDate = new Date("Dec 5, 2027 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function subscribe() {
    var emailInput = document.getElementById('email').value;
    var emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(emailInput)) {
        alert('Thank you for subscribing to the newsletter!');
    }
}

// Depending on the gender, the army and the year of discharge are displayed
window.onload = function () {
    showHideForm();
};

function showHideForm() {
    var genderSelect = document.getElementById("gender");
    var military = document.getElementById("militaryForm");
    var dateOfDischargeDiv = document.getElementById("dateOfDischargeDiv");

    if (genderSelect.value === "MALE") {
        militaryForm.style.display = "block";
        checkMilitary();
    } else {
        militaryForm.style.display = "none";
        dateOfDischargeDiv.style.display = "none";
    }
}

function checkMilitary() {
    var militaryValue = document.getElementById("military").value;
    var dateOfDischargeDiv = document.getElementById("dateOfDischargeDiv");

    if (militaryValue === "1") {
        dateOfDischargeDiv.style.display = "block";
    } else {
        dateOfDischargeDiv.style.display = "none";
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var region = document.getElementById("region").value;

    if (name === "" || surname === "" || address === "" || number === "" || city === "" || region === "") {
        alert("Please fill out all fields.");
    } else {
        alert("The data has been sent successfully!");
    }
}

function openSubscribeModal(subscribemodalId) {
    var subcribeModal = document.getElementById(subscribemodalId);
    subcribeModal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        subcribeModal.style.display = "none";
    }

};

function closeModal(subscribemodalId) {
    window.onclick = function (event) {
        if (event.target == subscribemodalId) {
            subscribemodalId.style.display = "none";
        }
    }
}

function openContactModal(contactmodalId) {
    var modal = document.getElementById(contactmodalId);
    modal.style.display = "block";
    var span = document.getElementsByClassName("close")[1];

    span.onclick = function () {
        modal.style.display = "none";
    }
}

function toggleChildrenInput() {
    var checkBox = document.getElementById("children");
    var container = document.getElementById("childrenContainer");

    if (checkBox.checked == true) {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}
