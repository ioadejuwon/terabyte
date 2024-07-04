<?php


include_once 'config.php';
include_once "drc.php";

include_once 'randno.php';
session_start();

$error = null;

// $url = $_GET['url'];

if (isset($_POST['login'])){
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pword = mysqli_real_escape_string($conn, $_POST['pword']);
    if(!empty($email) && !empty($pword)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = "SELECT email, fname, pwordhashed, unique_id FROM tera_users WHERE email = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $email); // Bind the parameter to the placeholder
            mysqli_stmt_execute($stmt); // Execute the query
            mysqli_stmt_bind_result($stmt, $resultEmail, $fname, $resultPasswordHash, $unique_id);// Bind the result variable
            mysqli_stmt_fetch($stmt); // Fetch the result
            if($resultEmail && password_verify($pword, $resultPasswordHash)){
                $_SESSION['unique_id'] = $unique_id;
                 //Send Login email to Vendor
                if (!empty($url)) {
                    header("Location: $url");
                    
                } else {
                    header("Location: ".DASHBOARD);
                }   
                
            }else{
                $error = "Looks like you entered the wrong email address or password!";
            }
        }else{
            $error = "Invalid Email address";
        } 
    }else{
        $error = "Please enter your details";
    }
}elseif(isset($_SESSION['unique_id'])){
    if (!empty($url)) {
        header("Location: $url");
    } else {
        header("Location: ".DASHBOARD);
    }
}




if(isset($_POST['signup'])){
    if($_POST['fname'] == '' OR $_POST['lname'] == '' OR $_POST['email'] == '' OR $_POST['pword'] == '' OR $_POST['cword'] == '' ){
        $error = "Please fill all the inputs with your details";
    } else {
        $email = trim($_POST['email']); //Get Email
        $fname = trim($_POST['fname']); //Get First Name
        $lname = trim($_POST['lname']); //Get Last Name
        $pword = $_POST['pword'];
        $cword = $_POST['cword'];
        $username = $fname.'-'.$uid;
        $uname = str_replace(' ','', $username);
        $fullname = $fname. ' '. $lname;

        $unique_id;
    
        
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // Validate Email Address
            $sql = "SELECT email FROM tera_users WHERE email = ?";
            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "s", $email); // Bind the parameter to the placeholder
            mysqli_stmt_execute($stmt); // Execute the query
            mysqli_stmt_bind_result($stmt, $resultEmail); // Bind the result variable
            mysqli_stmt_fetch($stmt); // Fetch the result

            
            if ($resultEmail) { // Check if the email exists
                $error = "Looks like '".$email."' already exists. Please, try to <a href='".LOGIN."'>log in</a>?"; // Email already exists in the database
                session_destroy();
            } elseif($cword != $pword){
                $error =  "Password is not the same as Confirm Password!";
                session_destroy();
            }else{
                $pwordhash = password_hash($pword, PASSWORD_BCRYPT); // Encrypt Password 

                $insert = "INSERT INTO tera_users (unique_id, fname, lname, email, uname, instructor, admin, email_verify, pwordhashed) VALUES (?, ?, ?, ?, ?, 0, 0, 0, ?)";
                $stmt = mysqli_prepare($conn, $insert); // Prepare the SQL statement
                mysqli_stmt_bind_param($stmt, "ssssss", $unique_id, $fname, $lname, $email, $uname, $pwordhash); // Bind values to the placeholders

                
                if (mysqli_stmt_execute($stmt)) {
                    echo "I inserted into users here";
                    
                    $_SESSION['unique_id'] = $unique_id;
                    header("location: dashboard.php?id=".$unique_id);

                    mysqli_stmt_close($stmt); // Close the statement before opening another one
                    exit();
                } else {
                    $error =  "There is an error with one of your inputs!"; // Send an "error" response if the insertion fails
                    session_destroy();
                }
            }
        }else{
            $error = "Invalid Email address";
            session_destroy();
        } 
    }             
}else{
    // redirect to dashboard if in session (signed in)
    if(isset($_SESSION['unique_id'])){
        header("Location: ".DASHBOARD);
      }
}

