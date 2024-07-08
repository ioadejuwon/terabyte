<?php


include_once '../inc/config.php';
include_once "../inc/drc.php";

include_once '../inc/randno.php';
session_start();



// if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['categoryname'])) {
//     // Get the category name from the form
//     // $category_name = $_POST['categoryname'];
//     $category_name = mysqli_real_escape_string($conn, $_POST['categoryname']);
//     // Assume $categoryID is generated elsewhere and available here
//     $category_id = $categoryID;

//     $sqlcategories = mysqli_query($conn, "SELECT * FROM tera_categories WHERE categoryName = '{$category_name}'");
//     // $row = mysqli_fetch_assoc($sqlbiz_id);
//     $count_row = mysqli_num_rows($sqlcategories);
//     if($count_row > 0){
//         // echo "Category already exist";
//         echo "<p class='fw-300 text-error-1'>Category already exist!</p>";
//     }else{

//         // Insert data into the database
//         $sql = "INSERT INTO tera_categories (categoryid, categoryName) VALUES ('$category_id', '$category_name')";

//         if ($conn->query($sql) === TRUE) {
//             // echo "New category created successfully";
//             echo "<p class='fw-300 text-success-1'>Category created successfully!</p>";
//         } else {
//             echo "Error: " . $sql . "<br>" . $conn->error;
//         }
//     }

//     // Close the database connection
//     $conn->close();
// } else {
//     // echo "Invalid request";
//     echo "<p class='fw-300 text-error-1'>Invalid request!</p>";
// }


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['categoryname'])) {
    $category_name = mysqli_real_escape_string($conn, $_POST['categoryname']); // Get the category name from the form
    $category_id = $categoryID;

    $sqlcategories = mysqli_query($conn, "SELECT * FROM tera_categories WHERE categoryName = '{$category_name}'");
    $count_row = mysqli_num_rows($sqlcategories);

    if ($count_row > 0) {
        echo json_encode(['status' => 'error', 'message' => 'Category already exists!']);
    } else {
        $sql = "INSERT INTO tera_categories (categoryid, categoryName) VALUES ('$category_id', '$category_name')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(['status' => 'success', 'message' => 'Category created successfully!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Error: ' . $conn->error]);
        }
    }

    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request!']);
}






