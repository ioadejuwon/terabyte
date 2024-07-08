<?php 
    session_start();
    

    include_once "../inc/config.php"; 
    include_once "../inc/drc.php"; 

    

    if(!isset($_SESSION['unique_id'])){
        header("location: ".LOGIN."?url=".$current_url."&t=".$pagetitle);// redirect to login page if not signed in
        exit; // Make sure to exit after sending the redirection header
    }else{
        $unique_id = $_SESSION['unique_id'];
        
    }
    
    $pagetitle = "Add New Course";
    
    include_once "dash-head.php"; 
    include_once "dash-header.php"; 

    // include_once "../inc/add-course.php"; 


    $sql = mysqli_query($conn, "SELECT * FROM tera_users WHERE unique_id = '{$_SESSION['unique_id']}'");
    $row = mysqli_fetch_assoc($sql);
    $unique_id = $row["unique_id"];

    $instructor = $row["instructor"];
    $admin = $row["admin"];

    $categories = mysqli_query($conn, "SELECT * FROM tera_categories");

?>






      <div class="content-wrapper js-content-wrapper">
        <div class="dashboard -home-9 js-dashboard-home-9">
            
          <?php include_once "dash-sidebar.php" ?>

          <div class="dashboard__main">
          <div class="dashboard__content bg-light-4">
              <div class="row pb-50 mb-10">
                <div class="col-auto">

                  <h1 class="text-30 lh-12 fw-700">Create New Course</h1>
                  <div class="mt-10">You can enter the course information here.</div>

                </div>
              </div>

              <div class="row y-gap-60">
                <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div class="d-flex items-center py-20 px-30 border-bottom-light">
                      <h2 class="text-17 lh-1 fw-500">Course Information</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row y-gap-60">
                <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                   

                    <div class="py-30 px-30">
                      <form class="contact-form row y-gap-30" id="createCourse" method="POST" action="#" >

                        <div class="col-12">
                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Title <span class="text-error-1">*</span> </label>
                          <input type="text" name="coursetitle" value="<?php echo $coursetitle ?>" placeholder="Enter the title of the course">
                          <input type="hidden" name="unique_id" value="<?php echo $unique_id ?>" placeholder="">
                        </div>
                        
                        <div class="col-md-6">
                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Level  <span class="text-error-1">*</span></label>

                          <select class="selectize wide js-selectize" name="courselevel" value="<?php echo $courselevel ?>">
                            <option value="">Choose level</option>
                            <option value="Beginners">Beginners</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Expert">Expert</option>
                          </select>

                        </div>


                        <div class="col-md-6">
                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course category <span class="text-error-1">*</span></label>

                          <select class="selectize wide js-selectize" name="coursecategory" value="<?php echo $coursecategory ?>">
                            <option value="">Choose category</option>
                            <?php
                                while ($row_categories = mysqli_fetch_assoc($categories)) {
                                  $categoryname = $row_categories['categoryName'];
                                  $category_id = $row_categories["categoryid"];
                              ?>
                              <tr>
                                <option value="<?php echo $category_id?>"><?php echo $categoryname?></option>

                              <?php
                                }
                              ?>
                          </select>

                        </div>


                        <div class="col-12">

                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Description  <span class="text-error-1">*</span></label>

                          <textarea placeholder="Description" rows="7" name="coursedescription" value="<?php echo $coursedescription ?>"></textarea>
                        </div>


                        <div class="col-md-6">

                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">What will students learn in your course?  <span class="text-error-1">*</span></label>

                          <textarea placeholder="Description" rows="7" name="courseknowledge"   value="<?php echo $courseknowledge ?>"></textarea>
                        </div>


                        <div class="col-md-6">

                          <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">Requirements  <span class="text-error-1">*</span></label>

                          <textarea placeholder="Description" rows="7" name="courserequirement"  value="<?php echo $courserequirement ?>" required></textarea>
                        </div>

                        <div class="row y-gap-20 justify-between pt-15">
                          
                          <div id="error-message"></div>

                          <div class="col-auto">
                            <!-- <i class="text-20 fa- mr-15"></i> -->
                            
                            <a href="#">
                            <button class="button -md -outline-terabyte-1 text-terabyte-1">
                              <i class="text-20 fa-solid fa-angle-left"></i>&nbsp;
                              Prev
                            </button>
                            </a>
                          </div>

                          <div class="col-auto">
                            <button class="button -md -terabyte-1 text-white" type="submit" id="submit">
                              Next
                              &nbsp;
                              <i class="text-20 fa-solid fa-angle-right"></i>
                            </button>
                          </div>

                          
                        </div>

                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>



    

            
<?php 
    include_once "dash-footer.php"; 
    include_once "dash-tail.php"; 
?>