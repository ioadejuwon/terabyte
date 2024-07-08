<?php
include_once '../inc/config.php';
include_once "../inc/drc.php";

include_once '../inc/randno.php';
session_start();

$error = null;



//Add course to the database
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['coursetitle'])) {
    // Get the category name from the form
    // $category_name = $_POST['categoryname'];

    // if($_POST['coursetitle'] == '' OR $_POST['courselevel'] == '' OR $_POST['coursecategory'] == '' OR $_POST['coursedescription'] == '' OR $_POST['courseknowledge'] == '' OR $_POST['courserequirement'] == '' ){
    //     echo "<p class='fw-300 text-error-1'>Please fill all the required fields!</p>";
    // } else {
        $unique_id = mysqli_real_escape_string($conn, $_POST['unique_id']);
        $coursetitle = mysqli_real_escape_string($conn, $_POST['coursetitle']);
        $courselevel = mysqli_real_escape_string($conn, $_POST['courselevel']);
        $coursecategory = mysqli_real_escape_string($conn, $_POST['coursecategory']);
        $coursedescription = mysqli_real_escape_string($conn, $_POST['coursedescription']);
        $courseknowledge = mysqli_real_escape_string($conn, $_POST['courseknowledge']);
        $courserequirement = mysqli_real_escape_string($conn, $_POST['courserequirement']);
        // Assume $categoryID is generated elsewhere and available here
        $course_id = $courseID;

        // $sqlcategories = mysqli_query($conn, "SELECT * FROM categories WHERE categoryName = '{$category_name}'");
        // // $row = mysqli_fetch_assoc($sqlbiz_id);
        // $count_row = mysqli_num_rows($sqlcategories);
        // if($count_row > 0){
        //     // echo "Category already exist";
        //     echo "<p class='fw-300 text-error-1'>Category already exist!</p>";
        // }else{

            // Insert data into the database
            $sql = "INSERT INTO tera_courses (unique_id, course_id, course_title, course_level, course_cat, course_des, course_know, course_req) VALUES ('$unique_id', '$course_id', '$coursetitle', '$courselevel', '$coursecategory', '$coursedescription', '$courseknowledge', '$courserequirement')";

            if ($conn->query($sql) === TRUE) {
                // echo "New category created successfully";
                // echo "<p class='fw-300 text-success-1'>Course created successfully!</p>";
                echo $course_id;
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        // }
    // }

    // Close the database connection
    $conn->close();
} else {
    // echo "Invalid request";
    echo "<p class='fw-300 text-error-1'>Invalid request!</p>";
}