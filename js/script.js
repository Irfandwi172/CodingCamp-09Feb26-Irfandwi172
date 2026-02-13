
var nama = prompt("Siapa namamu?");

if (nama && nama.trim() !== "") {
    document.getElementById("greeting").textContent = nama;
} else {
    document.getElementById("greeting").textContent = "Tamu";
}

function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open"); 
}

function closeMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.remove("open"); 
}



document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var valid = true;

    var inputNama  = document.getElementById("inputNama").value.trim();
    var inputEmail = document.getElementById("inputEmail").value.trim();
    var inputTgl   = document.getElementById("inputTgl").value;
    var inputPesan = document.getElementById("inputPesan").value.trim();
    var inputGender = document.querySelector('input[name="gender"]:checked');

    if (inputNama === "") {
        document.getElementById("fg-nama").classList.add("has-error");
        valid = false;
    } else {
        document.getElementById("fg-nama").classList.remove("has-error");
    }

    if (inputEmail === "" || !inputEmail.includes("@") || !inputEmail.includes(".")) {
        document.getElementById("fg-email").classList.add("has-error");
        valid = false;
    } else {
        document.getElementById("fg-email").classList.remove("has-error");
    }

    if (inputTgl === "") {
        document.getElementById("fg-tgl").classList.add("has-error");
        valid = false;
    } else {
        document.getElementById("fg-tgl").classList.remove("has-error");
    }

    if (!inputGender) {
        document.getElementById("errGender").style.display = "block";
        valid = false;
    } else {
        document.getElementById("errGender").style.display = "none";
    }

    if (inputPesan.length < 10) {
        document.getElementById("fg-pesan").classList.add("has-error");
        valid = false;
    } else {
        document.getElementById("fg-pesan").classList.remove("has-error");
    }

    if (valid) {
        var hasil = document.getElementById("result-content")
        hasil.innerHTML =
            '<div class="result-item"><span>Nama:</span> '          + inputNama         + '</div>' +
            '<div class="result-item"><span>Email:</span> '         + inputEmail        + '</div>' +
            '<div class="result-item"><span>Tgl Lahir:</span> '     + inputTgl          + '</div>' +
            '<div class="result-item"><span>Jenis Kelamin:</span> ' + inputGender.value + '</div>' +
            '<div class="result-item"><span>Pesan:</span> '         + inputPesan        + '</div>';

        document.getElementById("result-box").style.display = "block";
        document.getElementById("contactForm").reset();
    }

});