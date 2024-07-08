<?php
session_start();
include_once "../inc/config.php";
include_once "../inc/drc.php";

header('Content-Type: application/json');


$response = array('status' => 'error', 'message' => 'An error occurred.');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($_SESSION['unique_id']) && isset($input['id']) && isset($input['section_name'])) {
        $unique_id = $_SESSION['unique_id'];
        $section_id = mysqli_real_escape_string($conn, $input['id']);
        $section_name = mysqli_real_escape_string($conn, $input['section_name']);

        $stmt = $conn->prepare("UPDATE tera_course_section SET section_name = ? WHERE unique_id = ? AND section_id = ?");
        $stmt->bind_param("sss", $section_name, $unique_id, $section_id);

        if ($stmt->execute()) {
            $response['status'] = 'success';
            $response['message'] = 'Section edited successfully.';
        } else {
            $response['message'] = 'Failed to edit section.';
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
?>
