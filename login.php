<?php
include_once "inc/auth.php"; 


$pagetitle = "Login";

include_once "head.php"; 

// include_once "header.php"; 

?>


<div class="content-wrapper  js-content-wrapper">
  
  <section class="form-page js-mouse-move-container">
    <div class="form-page__img bg-dark-1 lg:d-none" >
      <img src="assets/img/logo-wh.png" alt="Terabyte Logo" class=" mb-30" style="width:50%; z-index:2000;">
    </div>
    
    
    <div class="form-page__content lg:py-50">
      <div class="container">
        <div class="row justify-center items-center">
          <div class="col-xl-6 col-lg-8">
            
            <div class="px-25 py-25 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <!-- Terabyte Logo Icon (Only show on small screens) -->
              <img src="assets/img/logo-icon.png" alt="Terabyte Logo" class="no-big-screen mb-30" width="20%">
              <h3 class="text-30 lh-13">Login</h3>
              <p class="mt-10">Don't have an account yet? <a href="<?php echo SIGNUP ?>" class="text-purple-1">Sign up for free</a></p>
              
              
              
              <form class="input-form respondForm__form row y-gap-20 " method="POST" action="#">
                <div class="col-12">
                  <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Username Or Email</label>
                  <input type="text" class="form-control" name="email" value="<?php echo $email; ?>" placeholder="Username or Email" required>
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
                <?php echo $error ?>
                <div class="col-12">
                  <button type="submit" name="login" id="submit" class="button  -md -terabyte-1 text-white fw-500 w-1/1">
                    Login
                  </button>
                </div>
              </form>
              
              
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
<?php include_once "tail.php"; ?>