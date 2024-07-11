<?php
session_start();
include_once "../inc/config.php";
include_once "../inc/drc.php";

include_once '../inc/randno.php';

header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'An error occurred.');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_SESSION['unique_id']) && isset($_POST['section_id']) && isset($_FILES['video_file'])) {
        $unique_id = $_SESSION['unique_id'];
        $section_id = mysqli_real_escape_string($conn, $_POST['section_id']);
        $course_id = mysqli_real_escape_string($conn, $_POST['course_id']);
        $video_id = $videoID;
        $lesson_name = mysqli_real_escape_string($conn, $_POST['video_name']);

        $video_file = $_FILES['video_file'];
        
        
        $video_name = $video_file['name']; 
        $video_tmpname = $video_file['tmp_name'];
        $separateext1 = explode('.', $video_name);
        $fileactualext1 = strtolower(end($separateext1));
        $video_newname = $course_id.'-'.$video_id.'.' . $fileactualext1;

        $upload_dir = 'uploads/videos/';
        $video_path = $upload_dir . $video_newname;

        $move_file_to = '../'.$video_path;



       

        if (move_uploaded_file($video_tmpname, $move_file_to )) {
            $stmt = $conn->prepare("INSERT INTO tera_course_videos (unique_id, section_id, course_id, video_id, video_name, video_path) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $unique_id, $section_id, $course_id, $video_id, $lesson_name, $video_path);

            if ($stmt->execute()) {
                $response['status'] = 'success';
                $response['message'] = 'Video uploaded successfully.';
            } else {
                $response['message'] = 'Failed to insert video record.';
            }

            $stmt->close();
        } else {
            // $response['message'] = 'Failed to upload video file.';
            $response['message'] = 'unique_id: ' . $unique_id. ' Section_id: ' .$section_id .' course_id: '.$course_id .' Video Path: '. $video_path;
        }
    } else {
        $response['message'] = 'You are not logged in or missing required parameters.';
        http_response_code(401); // Unauthorized
    }
} else {
    $response['message'] = 'Invalid request method.';
    http_response_code(405); // Method Not Allowed
}

echo json_encode($response);
?>
