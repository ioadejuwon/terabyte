<?php
include_once '../inc/config.php';
include_once "../inc/drc.php";

include_once '../inc/randno.php';
session_start();

$error = null;



//Add course to the database
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['sectionName'])) {
    $unique_id = mysqli_real_escape_string($conn, trim($_POST['unique_id']));
    $course_id = mysqli_real_escape_string($conn, trim($_POST['course_id']));
    $section_id = $sectionID;
    $sectionName = mysqli_real_escape_string($conn, trim($_POST['sectionName']));

    $sql = "INSERT INTO tera_course_section (unique_id, course_id, section_id, section_name) VALUES ('$unique_id', '$course_id', '$section_id', '$sectionName')";

    if ($conn->query($sql) === TRUE) {
        $new_section_id = $conn->insert_id;

        // $new_section_html = "
        // <div class='accordion__item -dark-bg-dark-1 mt-10' id='section-{$new_section_id}'>
        //     <div class='accordion__button py-20 px-30 bg-light-4'>
        //         <div class='d-flex items-center'>
        //             <div class='icon icon-drag mr-10'></div>
        //             <span class='text-16 lh-14 fw-500 text-dark-1'>{$sectionName}</span>
        //         </div>
        //         <div class='d-flex x-gap-10 items-center'>
        //             <a href='#' class='icon icon-edit mr-5'></a>
        //             <a href='#' class='icon icon-bin'></a>
        //             <div class='accordion__icon mr-0'>
        //                 <div class='d-flex items-center justify-center icon icon-chevron-down'></div>
        //                 <div class='d-flex items-center justify-center icon icon-chevron-up'></div>
        //             </div>
        //         </div>
        //     </div>
        //     <div class='accordion__content'>
        //         <div class='accordion__content__inner px-30 py-30'>
        //             <div class='d-flex x-gap-10 y-gap-10 flex-wrap'>
        //                 <div>
        //                     <a href='#' class='button -sm py-15 -purple-3 text-purple-1 fw-500'>Add Article +</a>
        //                 </div>
        //                 <div>
        //                     <a href='#' class='button -sm py-15 -purple-3 text-purple-1 fw-500'>Add Article +</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>";

        // echo $new_section_html;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "<p class='fw-300 text-error-1'>Invalid request!</p>";
}
