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



// Dropzon part




Dropzone.options.myDropzone = false;
Dropzone.options.myDropzone = {
    autoProcessQueue: false,
    acceptedFiles: "image/*",
    maxFiles: 5,
    maxFilesize: 3,
    parallelUploads: 10,
    addRemoveLinks: true,
    uploadMultiple: true, // Allow multiple file uploads
    
    previewsContainer: '.dropzone-previews',
    
    
     // The setting up of the dropzone
    init: function() {
        var myDropzone = this;

        // Flag to track image upload status
        var isImagesUploaded = false;

        // First change the button to actually tell Dropzone to process the queue.
        this.element.querySelector("input[type=submit]").addEventListener("click", function(e) {
            // Make sure that the form isn't actually being sent.
            e.preventDefault();
            e.stopPropagation();
            // myDropzone.processQueue();

            // Check whether all required fields are filled and images are uploaded
            if (areRequiredFieldsFilled() && isImagesUploaded) {
                myDropzone.processQueue();
            } else {
                displayErrors();
            }
        });
        // Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
        // of the sending event because uploadMultiple is set to true.
        this.on("sendingmultiple", function() {
            // Gets triggered when the form is actually being sent.
            // Hide the success button or the complete form.
            const element = document.getElementById("upload-button");
            element.innerHTML = `
            <input type="submit" name="submit" class="btn btn-outline"  value="Uploading product..." style="border:0; width: 100% !important; height: 50px;">
            `;
        });

        this.on("successmultiple", function(files, response) {
            // Gets triggered when the files have successfully been sent.
            // Redirect user or notify of success.
            // return file.previewElement.classList.add("dz-success");
            const element = document.getElementById("displayThis");
            element.innerHTML = `
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-12 mb-16 mt-16 text-center pb-24">
                                <h3 class="">One item added to inventory successfully.</h3>
                            </div>

                            <div class="row g-8">
                                <div class="col-6">
                                    <a href="create" class="btn w-100 text-black-60 hp-hover-text-color-primary-1" style="height:50px;">
                                        Add another product
                                    </a>
                                </div>

                                <div class="col-6">
                                    <a href="products" class="btn btn-primary px-12 w-100" style="height:50px;">
                                        Check your inventory
                                    </a>
                                </div>
                            </div>

                            <div class='mt-32'>

                                <h4>Share your the link to your product</h4>
                                <a href='$whatsappshare$goodwalink' class='btn btn-icon-only btn-primary'  target='_blank' >
                                    <i class='fa-brands fa-whatsapp'></i>
                                </a>

                                <a href='$twittershare$goodwalink' class='btn btn-icon-only btn-primary'  target='_blank' >
                                    <i class='fa-brands fa-twitter'></i>
                                </a>
                                <a href='$telegramshare$goodwalink' class='btn btn-icon-only btn-primary'  target='_blank' >
                                    <i class='fa-brands fa-facebook-f'></i>
                                </a>
                                <a href='$facebookshare$goodwalink' class='btn btn-icon-only btn-primary'  target='_blank' >
                                    <i class='fa-brands fa-facebook-f'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        });
        this.on("errormultiple", function(files, response) {
        // Gets triggered when there was an error sending the files.
        // Maybe show form again, and notify user of error
        });
        myDropzone.on("queuecomplete", function(file) {
            // window.location.href="../../inventory.php"
        });
        this.on("addedfile", function (file) {
            // Set the flag to true when at least one image is added
            isImagesUploaded = true;
        });
        // Event handler for when all files are removed
        this.on("removedfile", function () {
            // Reset the flag when all images are removed
            isImagesUploaded = false;
        });  
        
        
        function areRequiredFieldsFilled() {
            var ptitle = document.getElementsByName("ptitle")[0].value.trim();
            var pdes = document.getElementsByName("pdes")[0].value.trim();
            var pprice = document.getElementsByName("pprice")[0].value.trim();
            // return ptitle !== "" && pdes !== "" && category !== "c" && pqty !== "" && ptag !== "c" && pprice !== "";
            return ptitle !== "" && pdes !== "" && pprice !== "";
        }

        function displayErrors() {
            var ptitle = document.getElementsByName("ptitle")[0].value.trim();
            var pdes = document.getElementsByName("pdes")[0].value.trim();
            var pprice = document.getElementsByName("pprice")[0].value.trim();

            function displayError(fieldName, errorMessage) {
                var errorElement = document.getElementById(fieldName + "Error");
                if (errorMessage) {
                    errorElement.textContent = errorMessage;
                } else {
                    errorElement.textContent = "";
                }
            }

            displayError("ptitle", ptitle === "" ? "Product title is required." : "");
            displayError("pdes", pdes === "" ? "Product description is required." : "");
            displayError("pprice", pprice === "" ? "Product Price is required." : "");
            displayError("pimage", !isImagesUploaded ? "At least one image is required." : "");
        }
    }
};
