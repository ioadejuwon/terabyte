<?php
// Check if the site is running locally or on a hosting site
if ($_SERVER['HTTP_HOST'] == 'localhost:8888') {
    // Local environment
    define('BASE_URL', 'http://localhost:8888/terabyte/');
    
    
    define('LOGIN', 'http://localhost:8888/terabyte/login.php');
    define('SIGNUP', 'http://localhost:8888/terabyte/signup.php');
    define('DASHBOARD', 'http://localhost:8888/terabyte/dashboard.php');
} else {
    // Hosting environment
    define('BASE_URL', 'https://http://terabyte.africa/');


    // pages
    define('LOGIN', 'https://terabyte.africa/login');
    define('SIGNUP', 'https://terabyte.africa/signup');
    define('DASHBOARD', 'https://terabyte.africa/dashboard');
}


