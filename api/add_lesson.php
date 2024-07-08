<?php
include_once '../inc/config.php';
include_once "../inc/drc.php";

include_once '../inc/randno.php';
session_start();

$error = null;



if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['lessonName']) && isset($_POST['videoURL'])) {
    $section_id = mysqli_real_escape_string($conn, $_POST['section_id']);
    $lessonName = mysqli_real_escape_string($conn, $_POST['lessonName']);
    $videoURL = mysqli_real_escape_string($conn, $_POST['videoURL']);

    $sql = "INSERT INTO tera_course_lesson (section_id, lesson_name, video_url) VALUES ('$section_id', '$lessonName', '$videoURL')";

    if ($conn->query($sql) === TRUE) {
        $new_lesson_id = $conn->insert_id;

        $new_lesson_html = "
        <div class='lesson' id='lesson-{$new_lesson_id}'>
            <h5 class='text-14 lh-1 fw-500 text-dark-1'>{$lessonName}</h5>
            <a href='{$videoURL}' class='text-14 text-purple-1' target='_blank'>Watch Video</a>
        </div>";

        echo $new_lesson_html;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
} else {
    echo "<p class='fw-300 text-error-1'>Invalid request!</p>";
}