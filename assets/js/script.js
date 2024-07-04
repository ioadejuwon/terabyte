// Sign Up and Login show password
function Pass() {
    var x = document.getElementById("loginPassword");
    var passwordeyeicon = document.getElementById("loginPasswordicon");
    if (x.type === "password") {
        x.type = "text";
        passwordeyeicon.innerHTML = "<i class='fa-regular fa-eye'></i>";
    } else {
        x.type = "password";
        passwordeyeicon.innerHTML = "<i class='fa-regular fa-eye-slash'></i>";
    }
}

function confirmPass() {
    var confirmPassword = document.getElementById("confirmPassword");
    var confirmpasswordeyeicon = document.getElementById("confirmPasswordicon");
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        confirmpasswordeyeicon.innerHTML = "<i class='fa-regular fa-eye'></i>";
    } else {
        confirmPassword.type = "password";
        confirmpasswordeyeicon.innerHTML = "<i class='fa-regular fa-eye-slash'></i>";
    }
}


var aTags = document.querySelectorAll('span[data-href]');
console.log(aTags); // Log the selected elements to the console
aTags.forEach(function(aTag) {
    var link = aTag.getAttribute('data-href');
    console.log(link); // Log the data-href attribute value
    aTag.addEventListener('click', function(e) {
        window.location.replace(link);
        // window.open(link, '_blank'); // Open the link in a new tab
    });
});

