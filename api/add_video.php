<?php
session_start();
include_once "../inc/config.php";
include_once "../inc/drc.php";

header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'An error occurred.');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_SESSION['unique_id']) && isset($_POST['section_id']) && isset($_FILES['video_file'])) {
        $unique_id = $_SESSION['unique_id'];
        $section_id = mysqli_real_escape_string($conn, $_POST['section_id']);
        $course_id = mysqli_real_escape_string($conn, $_POST['course_id']);

        $video_file = $_FILES['video_file'];
        $upload_dir = '../uploads/videos/';
        $video_path = $upload_dir . basename($video_file['name']);
        $location_file = 'uploads/videos/'. basename($video_file['name']);

        if (move_uploaded_file($video_file['tmp_name'], $video_path)) {
            $stmt = $conn->prepare("INSERT INTO tera_course_videos (unique_id, section_id, course_id, video_path) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $unique_id, $section_id, $course_id, $video_path);

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
