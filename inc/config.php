<?php    
    $dbhost = 'localhost:8889';
    $dbuser = 'root';
    $dbpass = 'root';
    $dbname = 'tera_terabyte';
    $conn = mysqli_connect($dbhost,$dbuser,$dbpass, $dbname);

    // if(!$conn){
    //     die("Could not connectnn ". mysqli_connect_error());
    // }else{
    //     echo 'Connection successful!';
    // }