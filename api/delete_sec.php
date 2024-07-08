<?php
    // session_start();
    // include_once "../inc/config.php"; // Include config at the beginning
    // include_once "../inc/drc.php"; // Include config at the beginning
    
    // if(isset($_SESSION['unique_id']) && isset( $_GET['id']) && isset( $_GET['u'])) {
    //         echo $unique_id = $_SESSION['unique_id'];
    //         echo $section_id = mysqli_real_escape_string($conn, $_GET['id']);
    //         echo $url = mysqli_real_escape_string($conn, $_GET['u']);
    //         // Use prepared statement to prevent SQL injection
    //         $stmt = $conn->prepare("DELETE FROM tera_course_section WHERE unique_id = ? AND section_id = ?");
    //         $stmt->bind_param("ss", $unique_id , $section_id);
    //         $stmt->execute();
    //         $stmt->close();
    //         // session_unset();
    //         // session_destroy();
    //         header("location: ". $url);
    // } else {  
    //     header("location: ". LOGIN);
    //     echo "You are not logged in.";
    // }




session_start();
include_once "../inc/config.php";
include_once "../inc/drc.php";

header('Content-Type: application/json');

header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'An error occurred.');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($_SESSION['unique_id']) && isset($input['id']) && isset($input['u'])) {
        $unique_id = $_SESSION['unique_id'];
        $section_id = mysqli_real_escape_string($conn, $input['id']);
        $url = mysqli_real_escape_string($conn, $input['u']);

        $stmt = $conn->prepare("DELETE FROM tera_course_section WHERE unique_id = ? AND section_id = ?");
        $stmt->bind_param("ss", $unique_id, $section_id);

        if ($stmt->execute()) {
            $response['status'] = 'success';
            $response['message'] = 'Section deleted successfully.';
        } else {
            $response['message'] = 'Failed to delete section.';
        }

        $stmt->close();
    } else {
        $response['message'] = 'You are not logged in or missing required parameters.';
        http_response_code(401); // Unauthorized
    }
} else {
    $response['message'] = 'Invalid request method.';
    http_response_code(405); // Method Not Allowed
}

echo json_encode($response);
