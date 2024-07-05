<?php
$unique_id = $_SESSION['unique_id'];
// Check if the site is running locally or on a hosting site
if ($_SERVER['HTTP_HOST'] == 'localhost:8888') {
    // Local environment
    define('BASE_URL', 'http://localhost:8888/terabyte/');
    
    
    define('LOGIN', BASE_URL.'login.php');
    define('SIGNUP', BASE_URL.'signup.php');
    define('DASHBOARD', BASE_URL.'account/dashboard.php');
    define('MY_COURSES', BASE_URL.'account/courses.php');
    define('PROFILE', BASE_URL.'account/profile.php');
    define('BOOKMARK', BASE_URL.'account/bookmarks.php');
    define('LOGOUT', BASE_URL.'logout.php?id='.$unique_id);
} else {
    // Hosting environment
    define('BASE_URL', 'https://hmvl.bio/tb/');
    // define('BASE_URL', 'https://terabyte.africa/');


    // pages
    define('LOGIN', BASE_URL.'login');
    define('SIGNUP', BASE_URL.'signup');
    define('DASHBOARD', BASE_URL.'account/dashboard');
    define('MY_COURSES', BASE_URL.'account/courses');
    define('PROFILE', BASE_URL.'account/profile');
    define('BOOKMARK', BASE_URL.'account/bookmarks');
    define('LOGOUT', BASE_URL.'logout.php?id='.$unique_id);

}


