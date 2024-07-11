<?php 
include_once "inc/auth.php";
include_once "head.php"; 
// include_once "header.php"; 

$pagetitle = "Signup";

?>


<div class="content-wrapper  js-content-wrapper">
  
  <section class="form-page js-mouse-move-container">
    <div class="form-page__img bg-dark-1 lg:d-none" >
    <img src="assets/img/general/logo_wh.svg" alt="Terabyte Logo" class=" mb-30" style="width:50%; z-index:2000;">
    </div>
    
    
    <div class="form-page__content lg:py-50">
      <div class="container">
        <div class="row justify-center items-center">
          <div class="col-xl-6 col-lg-9">
            
            <div class="px-25 py-25 md:px-50 md:py-50 bg-white shadow-1 rounded-16">
              <!-- Terabyte Logo Icon (Only show on small screens) -->
              <img src="assets/img/general/icon_ab.png" alt="Terabyte Logo" class="no-big-screen mb-30" width="15%">

              <h3 class="text-30 lh-13">Sign Up</h3>
              <p class="mt-10 mb-10">Create a free account and learn the best way possible.</p>
              
              
              <!-- Sign Up Form Begin-->
              <form class="input-form respondForm__form row y-gap-20 " method="POST" action="#">
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">First Name</label>
                  <input type="text" class="form-control" name="fname" value="<?php echo $fname; ?>" placeholder="First Name" required>
                </div>
                <div class="col-12">
                <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Last Name</label>
                  <input type="text" class="form-control" name="lname" value="<?php echo $lname; ?>" placeholder="Last Name" required>
                </div>
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10"> Email</label>
                  <input type="email" class="form-control" name="email" value="<?php echo $email; ?>" placeholder="Email Address" required>
                </div>
                
                <div class=" mb-16">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Password</label>
                  <div class="input-group">
                    <input type="password" name="pword" placeholder="Enter Password" value="<?php echo $pword; ?>" class="form-control" id="loginPassword" style="height:50px;" required>
                    <span class="input-group-text" onclick="Pass()" id="loginPasswordicon">
                      <i class='fa-regular fa-eye-slash'></i>
                    </span>
                  </div>
                </div>

                <div class=" mb-16">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Confirm Password</label>
                  <div class="input-group">
                    <input type="password" name="cword" placeholder="Confirm Password" value="<?php echo $cword; ?>" class="form-control" id="confirmPassword" style="height:50px;" required>
                    <span class="input-group-text" onclick="confirmPass()" id="confirmPasswordicon">
                      <i class='fa-regular fa-eye-slash'></i>
                    </span>
                  </div>
                </div>

                <span class="text-error-1">
                    <?php echo $error; ?>
                </span>

                <div class="col-12">
                  <button type="submit" name="signup" id="submit" class="button -md -terabyte-1 text-white fw-500 w-1/1">
                    Create Account
                  </button>
                </div>

              </form>
              <p class="mt-10 mb-10">Have an account already? <a href="<?php echo LOGIN ?>" class="text-terabyte-1">Sign in here.</a></p>
              <!-- Sign Up Form Begin-->
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
<?php include_once "tail.php"; ?>