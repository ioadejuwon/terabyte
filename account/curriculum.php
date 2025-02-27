<?php 
    session_start();
    

    include_once "../inc/config.php"; 

    $pagetitle = "Add Course Section";

    include_once "../inc/drc.php"; 

    
    
    // $sqlcourse_id = mysqli_query($conn, "SELECT * FROM tera_courses WHERE unique_id = '{$_SESSION['unique_id']}' AND course_");




    

    if(!isset($_SESSION['unique_id'])){
        header("location: ".LOGIN."?url=".$current_url."&t=".$pagetitle);// redirect to login page if not signed in
        exit; // Make sure to exit after sending the redirection header
    }elseif(!isset($_GET['c']) || $_GET['c'] == ''){
      header("Location: create.php");

    }elseif(isset($_SESSION['unique_id']) && isset($_GET['c'])){
        $unique_id = $_SESSION['unique_id']; // Get the unique_id
        $courseID = $_GET['c']; // Get the courseID

        $sqlcourse_id = "SELECT course_id FROM tera_courses WHERE course_id = ? AND unique_id = '{$_SESSION['unique_id']}'";
        $stmt_course_id = mysqli_prepare($conn, $sqlcourse_id);
        mysqli_stmt_bind_param($stmt_course_id, "s", $courseID); // Bind the parameter to the placeholder
        mysqli_stmt_execute($stmt_course_id); // Execute the query
        mysqli_stmt_bind_result($stmt_course_id, $result_course_id); // Bind the result variable
        mysqli_stmt_fetch($stmt_course_id);

        if(!$result_course_id){
          header("Location: create.php");
        }else{

        }
        mysqli_stmt_close($stmt_course_id); // Close the statement before opening another one

        
    }
    
    
    
    
    include_once "dash-head.php"; 
    include_once "dash-header.php"; 
    // include_once "../inc/drc.php"; 


    $sql = mysqli_query($conn, "SELECT * FROM tera_users WHERE unique_id = '{$unique_id}'");
    if ($sql) {
        $row = mysqli_fetch_assoc($sql);
        $instructor = $row["instructor"];
        $admin = $row["admin"];
    } else {
        // Handle error
        echo "Error: " . mysqli_error($conn);
    }

    // // Check if 'id' is set and not empty
    // if (!isset($_GET['c']) || $_GET['c'] == '') {
    //   header("Location: ../dashboard.php");
    //   // exit(); // Ensure script execution stops after redirection
    // }

    



      // ?id=tb-mdu4-fcyj

?>






      <div class="content-wrapper js-content-wrapper">
        <div class="dashboard -home-9 js-dashboard-home-9">
            
          <?php include_once "dash-sidebar.php" ?>

          <div class="dashboard__main">
            <div class="dashboard__content bg-light-4">
              <div class="row pb-50 mb-10">
                <div class="col-auto">

                  <h1 class="text-30 lh-12 fw-700">Curriculum</h1>
                  
                  <div class="breadcrumbs mt-10 pt-0 pb-0">
                    <div class="breadcrumbs__content">
                      <div class="breadcrumbs__item">
                        <a href="index.html">Home</a>
                      </div>
                      <div class="breadcrumbs__item">
                        <a href="<?php DASHBOARD ?>">Dashboard</a>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </div>

              
              <div class="row y-gap-30 pt-30 d-none">
                <div class="col-xl-12 col-md-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    <div class="py-30 px-30 text-center mb-30 ">
                      <div class="row justify-center pt-60 lg:pt-40">
                        <div class="col-auto y-gap-20">
                          <h2 class="h2">Get started</h2>
                          <p>Add new section to add your content.</p>
                          <a href="#" class="button -md -terabyte-1 text-white">
                            Add New Section
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <?php
                $sql_course = mysqli_query($conn, "SELECT * FROM tera_courses WHERE unique_id = '{$_SESSION['unique_id']}' AND course_id = '$courseID'");
                $row_course = mysqli_fetch_assoc($sql_course);
                $courseName = $row_course['course_title'];
                $courseDes = $row_course['course_des'];

              ?>
              <div class="row y-gap-60 mb-5">
                <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div class="py-30 px-30">
                      <div class="row">
                        <div class="col-auto y-gap-20">
                          <h2 class="h2"><?php echo $courseName ?></h2>
                          <p><?php echo $courseDes ?>.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>


              <div class="row y-gap-10">

                <div class="col-12">
                  <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                    

                    <div class="py-30 px-30">
                        

                        <div class="row">
                          

                          <div class="col-12">

                
                            <div class="accordion -block-2 text-left js-accordion" id="lessonSection">
                                <?php
                                $sql_section = mysqli_query($conn, "SELECT * FROM tera_course_section WHERE unique_id = '{$_SESSION['unique_id']}' AND course_id = '$courseID'");
                                while ($row_section = mysqli_fetch_assoc($sql_section)) {
                                    $sectionname = $row_section['section_name'];
                                    $section_id = $row_section['section_id'];
                                ?>
                                <div class="accordion__item -dark-bg-dark-1 mt-10" id="<?php echo $section_id; ?>">
                                    <div class="accordion__button py-20 px-30 bg-light-4">
                                        <div class="d-flex items-center">
                                            <div class="icon icon-drag mr-10"></div>
                                            <span class="text-16 lh-14 fw-500 text-dark-1 section-name"><?php echo $sectionname; ?></span>
                                            <form class="edit-form" style="display: none;">
                                                <input type="text" name="section_name" value="<?php echo $sectionname; ?>">
                                                <button type="submit">Save</button>
                                                <button type="button" class="cancel">Cancel</button>
                                            </form>
                                        </div>
                                        <div class="d-flex x-gap-10 items-center">
                                            <a href="#" class="icon icon-edit mr-5" data-id="<?php echo $section_id; ?>"></a>
                                            <a href="#" class="icon icon-bin" data-id="<?php echo $section_id; ?>" data-url="<?php echo $current_url; ?>"></a>
                                            <div class="accordion__icon mr-0">
                                                <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                                                <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion__content">

                                      <div class="accordion__content__inner px-30 py-30">
                                          <div class="y-gap-20">

                                            <?php
                                            $sql_videos = mysqli_query($conn, "SELECT * FROM tera_course_videos WHERE unique_id = '{$_SESSION['unique_id']}' AND course_id = '$courseID' AND section_id = '$section_id'");
                                            while ($row_video = mysqli_fetch_assoc($sql_videos)) {
                                                $video_name = $row_video['video_name'];
                                                $video_path = '../'.$row_video['video_path'];
                                                // $section_id = $row_section['section_id'];
                                            ?>

                                              <div class="d-flex justify-between">
                                                <div class="d-flex items-center">
                                                  <div class="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                                                    <div class="icon-play text-9"></div>
                                                  </div>
                                                  <div><?php echo $video_name ?></div>
                                                </div>

                                                <div class="d-flex x-gap-20 items-center">
                                                  <!-- <a href="#" class="text-14 lh-1 text-purple-1 underline">Preview</a> -->
                                                  <!-- <a href="#" class="text-14 lh-1 text-purple-1 underline">5 question</a> -->
                                                  <!-- <span href="#" class="text-14 lh-1 text-purple-1 ">03:56</span> -->
                                                  <a href="<?php echo $video_path ?>" class="d-flex justify-center items-center js-gallery underline" data-gallery="gallery1">
                                                    Preview
                                                  </a>
                                                  <a href="<?php echo $video_path ?>" class="d-flex justify-center items-center js-gallery underline" data-gallery="gallery1">
                                                    Delete
                                                  </a>
                                                </div>
                                              </div>
                                            <?php 
                                            }
                                            ?>



                                          </div>

                                          <form class=" row upload-video-form input-form mt-20" style="display: none;">
                                              <div class="col-6">
                                                <input type="text" placeholder="Video Name" name="video_name" value="" class="form-control">
                                              </div>
                                              <div class="col-6">
                                                <input type="file" placeholder="Click here to Upload video" name="video_file" class="form-control">
                                                <input type="hidden" name="course_id" value="<?php echo $courseID ?>" class="form-control" >
                                              </div>
                                              

                                              <div class="d-flex x-gap-10 y-gap-10 flex-wrap mt-20">
                                              <button type="submit" class=" button -sm py-15  -terabyte-1 text-white mr-10">Upload</button>
                                              <button type="button" class="cancel-upload button -sm py-15  -outline-terabyte-1 text-terabyte-1 ">Cancel</button>
                                                  <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500 d-none">Add Video +</a>
                                              </div>
                                              
                                          </form>
                                          <div class="d-flex x-gap-10 y-gap-10 flex-wrap mt-20">
                                              <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500 add-video" data-id="<?php echo $section_id; ?>">Add Video +</a>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                                <?php
                                }
                                ?>
                            </div>


                            <form class="input-form mt-10 mb-10 d-non" id="courseSection" method="POST">
                              <label for="">Add more lessons</label>
                              <div class="input-group mb-24">
                                
                                <input type="text" name="sectionName" class="form-control" id="category" placeholder="Lesson Name" aria-describedby="button-addon2" required>
                                <input type="hidden" name="unique_id" value="<?php echo $unique_id; ?>" id="" required>
                                <input type="hidden" name="course_id" value="<?php echo $courseID; ?>" id="" required>
                                <!-- <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"> -->
                                <button class="button  -terabyte-1 text-white" type="submit" id="submit" style="padding: 0% 5%;">Add Lesson</button>
                              </div>
                            </form>

                            <div class="mt-20 d-none">
                              <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                                <div>
                                  <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Another Lesson</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>


                   
                <div class="row y-gap-20 justify-between pt-30">
                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -outline-terabyte-1 text-terabyte-1 sm:w-1/1">Prev</button>
                  </div>

                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -terabyte-1 text-white sm:w-1/1">Next</button>
                  </div>
                </div>

               

               
              </div>


             

              



              

            </div>



    

            
<?php 
    include_once "dash-footer.php"; 
    include_once "dash-tail.php"; 
?>